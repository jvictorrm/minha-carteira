import React from "react";

import { formatCurrency } from "../../utils/formatter";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip
} from 'recharts';

import {
  Container,
  SideLeft,
  LabelContainer,
  Label,
  SideRight,
  ChartContainer
}
  from "./styles";

interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[]
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>

        <LabelContainer>
          {
            data.map(indicator =>
              <Label key={indicator.name} color={indicator.color}>
                <div>{indicator.percent}%</div>
                <span>{indicator.name}</span>
              </Label>
            )
          }
        </LabelContainer>
      </SideLeft>

      <SideRight>
        <ChartContainer>
          <ResponsiveContainer>
            <BarChart data={data}>
              <Bar dataKey="amount" name="Valor" radius={7}>
                {
                  data.map(indicator =>
                    <Cell
                      key={indicator.name}
                      fill={indicator.color}
                      cursor="pointer" />
                  )
                }
              </Bar>
              <Tooltip
                formatter={(value) => formatCurrency(Number(value))}
                cursor={{ fill: 'none' }} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
