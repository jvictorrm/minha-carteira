import React, { useMemo, useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { v4 as uuidv4 } from 'uuid';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import FinancialTransactionCard from '../../components/FinancialTransactionCard';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import { formatCurrency } from '../../utils/formatter';

import {
    Container,
    Content,
    Filters
}
    from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    formattedAmount: string;
    frequency: string;
    formattedDate: string;
    tagColor: string;
}

const FinancialTransactions: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [selectedMonth, setSelectedMonth] = useState('1');
    const [selectedYear, setSelectedYear] = useState('2020');
    const [selectedFrequencyFilter, setSelectedFrequencyFilter] = useState(['recorrente', 'eventual']);

    const balanceType = match.params.type;

    const { title, lineColor, listData } = useMemo(() => {
        return balanceType === 'entry-balance' ?
            { title: "Entradas", lineColor: "#4E41F0", listData: gains } :
            { title: "Saídas", lineColor: "#E44C4E", listData: expenses }
    }, [balanceType]);

    const months = useMemo(() => {
        return Array.from(
            new Set(
                listData.map(item => moment(item.date, "YYYY-MM-DD").format('M'))
            )
        ).map(month => { return { value: month, label: moment(month, "M").format('MMMM').toUpperCase() } });
    }, [listData]);

    const years = useMemo(() => {
        return Array.from(
            new Set(listData.map(item => moment(item.date, "YYYY-MM-DD").year())
            )
        ).map(year => { return { value: year.toString(), label: year.toString() } });
    }, [listData]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequencyFilter.findIndex(item => item === frequency);

        if (alreadySelected >= 0) {
            const filtered = selectedFrequencyFilter.filter(item => item !== frequency);
            setSelectedFrequencyFilter(filtered);
        } else {
            setSelectedFrequencyFilter((prev) => [...prev, frequency])
        }
    }

    useEffect(() => {
        const filteredList = listData.filter(item => {
            const date = moment(item.date, "YYYY-MM-DD");
            return date.format('M') === selectedMonth
                && String(date.year()) === selectedYear
                && selectedFrequencyFilter.includes(item.frequency);
        });

        const items = filteredList.map(item => {
            return {
                id: uuidv4(),
                description: item.description,
                formattedAmount: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                formattedDate: moment(item.date, "YYYY-MM-DD").format('DD/MM/YYYY'),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });

        setData(items);

    }, [listData, selectedMonth, selectedYear, data.length, selectedFrequencyFilter]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput
                    options={months}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    defaultValue={selectedMonth} />
                <SelectInput
                    options={years}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    defaultValue={selectedYear} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${selectedFrequencyFilter.includes('recorrente') && 'tag-actived'}`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => handleFrequencyClick('recorrente')}>
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual ${selectedFrequencyFilter.includes('eventual') && 'tag-actived'}`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => handleFrequencyClick('eventual')}>
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.length > 0 ?
                        data.map(item =>
                            <FinancialTransactionCard
                                key={item.id}
                                tagColor={item.tagColor}
                                title={item.description}
                                subTitle={item.formattedDate}
                                amount={item.formattedAmount} />
                        ) :
                        <div>
                            <h1>Não há registros para a competência informada</h1>
                        </div>
                }
            </Content>
        </Container>
    )
}

export default FinancialTransactions;