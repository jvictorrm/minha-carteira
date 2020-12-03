import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface IWalletBoxProps {
    color: string;
    title: string;
    amount: number;
    footerLabel: string;
    icon?: 'dollar' | 'arrowUp' | 'arrowDown';
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    color,
    title,
    amount,
    icon,
    footerLabel
}) => {

    const iconSrc = useMemo(() => {
        switch (icon) {
            case 'dollar':
                return dollarImg;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            default:
                return undefined;
        }
    }, [icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp
                    separator="."
                    decimal=","
                    decimals={2}
                    end={amount} />
            </h1>
            <small>{footerLabel}</small>
            {iconSrc && <img src={iconSrc} alt={title} />}
        </Container>
    );
}

export default WalletBox;