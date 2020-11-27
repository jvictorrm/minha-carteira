import React from 'react';

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts';

import {
    Container,
    SideLeft,
    SideRight,
    LabelContainer,
    Label
}
    from './styles';

interface IPieChartBoxProps {
    data: {
        name: string;
        value: number;
        percent: string;
        color: string;
    }[]
}

const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) =>
    (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
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
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="value" >
                            {
                                data.map(indicator =>
                                    <Cell key={indicator.name} fill={indicator.color} />
                                )
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>

        </Container>
    );


export default PieChartBox;