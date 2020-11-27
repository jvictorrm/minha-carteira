import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
}
    from 'recharts';

import { formatCurrency } from '../../utils/formatter';

import {
    Container,
    ChartContainer,
    Header,
    LabelContainer,
    Label
}
    from './styles';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountExit: number;
    }[],
    amountEntryLineColor: string;
    amountExitLineColor: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({ data, amountEntryLineColor, amountExitLineColor }) =>
    (
        <Container>
            <Header>
                <h2>Histórico de Saldo</h2>
                <LabelContainer>
                    <Label color={amountEntryLineColor}>
                        <div>{85}%</div>
                        <span>{"indicator.name"}</span>
                    </Label>
                    <Label color={amountExitLineColor}>
                        <div>{15}%</div>
                        <span>{"indicator.name"}</span>
                    </Label>
                </LabelContainer>
            </Header>

            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 20, left: 5, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#CECECE" />
                        <XAxis dataKey="month" stroke="#CECECE" />
                        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                        <Line
                            type="monotone"
                            data={[]}
                            dataKey="amountEntry"
                            name="Entradas"
                            stroke={amountEntryLineColor}
                            strokeWidth={5}
                            dot={{ r: 8 }} />
                        <Line
                            type="monotone"
                            data={[]}
                            dataKey="amountExit"
                            name="Saídas"
                            stroke={amountExitLineColor}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );

export default HistoryBox;