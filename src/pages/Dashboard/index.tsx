import React, { useMemo, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedYear, setSelectedYear] = useState("2020");

  const months = useMemo(() => {
    return Array.from(
      new Set(
        [...gains, ...expenses].map((item) =>
          moment(item.date, "YYYY-MM-DD").format("M")
        )
      )
    ).map((month) => {
      return {
        value: month,
        label: moment(month, "M").format("MMMM").toUpperCase(),
      };
    });
  }, []);

  const years = useMemo(() => {
    return Array.from(
      new Set(
        [...gains, ...expenses].map((item) =>
          moment(item.date, "YYYY-MM-DD").year()
        )
      )
    ).map((year) => {
      return { value: year.toString(), label: year.toString() };
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total: number = 0;
    expenses
      .filter((expense) => {
        const date = moment(expense.date, "YYYY-MM-DD");
        return (
          date.format("M") === selectedMonth &&
          String(date.year()) === selectedYear
        );
      })
      .forEach((expense) => {
        total += Number(expense.amount);
      });

    return total;
  }, [selectedMonth, selectedYear]);

  const totalGains = useMemo(() => {
    let total: number = 0;
    gains
      .filter((gain) => {
        const date = moment(gain.date, "YYYY-MM-DD");
        return (
          date.format("M") === selectedMonth &&
          String(date.year()) === selectedYear
        );
      })
      .forEach((gain) => {
        total += Number(gain.amount);
      });

    return total;
  }, [selectedMonth, selectedYear]);

  const { totalBalance, message } = useMemo(() => {
    const total = totalGains - totalExpenses;

    return total < 0
      ? {
          totalBalance: total,
          message: {
            title: "Que triste!",
            description: "Neste mês você gastou mais do que deveria.",
            footerText:
              "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
            icon: sadImg,
          },
        }
      : {
          totalBalance: total,
          message: {
            title: "Muito bem!",
            description: "Neste mês você esteve bem no balanço.",
            footerText:
              "Continue assim. Considere investir seu saldo quando for possível.",
            icon: happyImg,
          },
        };
  }, [totalExpenses, totalGains]);

  const expensesAndGainsRelation = useMemo(() => {
    const total = totalGains + totalExpenses;
    const gainsPercent = (totalGains / total) * 100;
    const expensesPercent = (totalExpenses / total) * 100;

    return [
      {
        name: "Entradas",
        value: totalGains,
        percent: gainsPercent.toFixed(1),
        color: "#E44C4E",
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: expensesPercent.toFixed(1),
        color: "#F7931B",
      },
    ];
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return moment
      .monthsShort()
      .map((month) => {
        let amountEntry = 0,
          amountExit = 0;

        gains.forEach((gain) => {
          const date = moment(gain.date, "YYYY-MM-DD");
          if (
            date.format("MMM") === month &&
            String(date.year()) === selectedYear
          ) {
            amountEntry += Number(gain.amount);
          }
        });

        expenses.forEach((expense) => {
          const date = moment(expense.date, "YYYY-MM-DD");
          if (
            date.format("MMM") === month &&
            String(date.year()) === selectedYear
          ) {
            amountExit += Number(expense.amount);
          }
        });

        return {
          monthNumber: moment(month, "MMM").format("M"),
          month,
          amountEntry,
          amountExit,
        };
      })
      .filter(
        (item) =>
          selectedYear === String(moment().year()) &&
          Number(item.monthNumber) <= Number(moment().format("M"))
      );
  }, [selectedYear]);

  const recurrentAndEventualRelation = useMemo(() => {
    let amountRecurrent = 0,
      amountEventual = 0;

    expenses
      .filter((expense) => {
        const date = moment(expense.date, "YYYY-MM-DD");
        return (
          date.format("M") === selectedMonth &&
          String(date.year()) === selectedYear
        );
      })
      .forEach((expense) => {
        switch (expense.type) {
          case "recorrente":
            amountRecurrent += Number(expense.amount);
            break;
          case "eventual":
            amountEventual += Number(expense.amount);
            break;
        }
      });

    const total = amountRecurrent + amountEventual;
    const recurrentPercent = Number(
      ((amountRecurrent / total) * 100).toFixed(1)
    );
    const recurrentEventual = Number(
      ((amountEventual / total) * 100).toFixed(1)
    );

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        recurrentPercent,
        color: "#F7931B",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        recurrentEventual,
        color: "#E44C4E",
      },
    ];
  }, [selectedMonth, selectedYear]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => setSelectedMonth(e.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectInput
          options={years}
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          color="#4E41F0"
          title="Saldo"
          amount={totalBalance}
          footerLabel="Teste legal"
          icon="dollar"
        />

        <WalletBox
          color="#F7931B"
          title="Entradas"
          amount={totalGains}
          footerLabel="Teste legal"
          icon="arrowUp"
        />

        <WalletBox
          color="#E44C4E"
          title="Saídas"
          amount={totalExpenses}
          footerLabel="Teste legal"
          icon="arrowDown"
        />

        <MessageBox
          title={message.title}
          icon={message.icon}
          description={message.description}
          footerText={message.footerText}
        />

        <PieChartBox data={expensesAndGainsRelation} />

        <HistoryBox
          data={historyData}
          amountEntryLineColor="#F7931B"
          amountExitLineColor="#E44C4E"
        />

        <BarChartBox />
      </Content>
    </Container>
  );
};

export default Dashboard;
