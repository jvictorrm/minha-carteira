import React from 'react';
import { Container, Tag } from './styles';

interface IFinancialTransactionCardProps {
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;
}

const FinancialTransactionCard: React.FC<IFinancialTransactionCardProps> = ({
    tagColor,
    title,
    subTitle,
    amount
}) =>
    (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subTitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );


export default FinancialTransactionCard;