import React from 'react'
import styled from 'styled-components'
import {
	GiDiceSixFacesOne as Die1Icon,
	GiDiceSixFacesTwo as Die2Icon,
	GiDiceSixFacesThree as Die3Icon,
	GiDiceSixFacesFour as Die4Icon,
	GiDiceSixFacesFive as Die5Icon,
	GiDiceSixFacesSix as Die6Icon,
} from 'react-icons/gi'
import {
    GoChevronDown as CaretIcon,
} from 'react-icons/go'

import { BaseContainer } from '../../global-styles'

export const MAX_ROLLS = 5

export const ROLL_STATUS = {
    FAIL: 'fail',
    MIXED: 'mixed',
    CRIT: 'critical',
}
const COLOR_BY_STATUS = {
    [ROLL_STATUS.FAIL]: 'red',
    [ROLL_STATUS.MIXED]: 'blue',
    [ROLL_STATUS.CRIT]: 'green',
}
const DRAWER_TRANSITION_DURATION = '500ms'

const RollsContainer = styled(BaseContainer)`
    position: fixed;
    bottom: ${({ visible }) => visible ? '0' : '-18rem'};
    right: 4rem;
    height: 19.5rem;
    transition-property: bottom;
    transition-duration: ${DRAWER_TRANSITION_DURATION};
`
const RollsHeader = styled.a`
    display: block;
    font-size: 1.35rem;
    font-weight: bold;
    padding-bottom: 0.4em;
    border-bottom: 0.15em solid;
    margin-bottom: 0.4em;
    cursor: pointer;
`
const VisibilityToggleButton = styled.div`
    float: right;
    transform: rotateZ(${({ visible }) => visible ? '0' : '180'}deg);
    transition-property: transform;
    transition-duration: ${DRAWER_TRANSITION_DURATION};
    font-size: 1.6rem;
    line-height: 1;
`

const RollContainer = styled.div`
    display: flex;
    flex-direction: row;
    opacity: ${({ active }) => active ? '1' : '0.55'};
    margin-bottom: 0.4rem;
`
const RollResult = styled.div`
    color: ${({ status }) => COLOR_BY_STATUS[status]};
    font-size: 3rem;
    padding-right: 0.3em;
    line-height: 1;
    width: 1.25em;
    text-align: right;
    position: relative;

    &:after {
        display: block;
        font-size: 1rem;
        position: absolute;
        top: 0;
        right: 0.2em;
        content: '${({ status }) => status === ROLL_STATUS.CRIT ? '*' : ''}';
    }
`
const DiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Modifier = styled.div`
    padding-left: 0.2rem;
    font-size: 1.2em;
    font-weight: bold;
`

const DieIcons = [
    Die1Icon,
    Die2Icon,
    Die3Icon,
    Die4Icon,
    Die5Icon,
    Die6Icon,
]
const DieIconContainer = styled.div`
    font-size: 2rem;
    margin: 0 0.2em;
    line-height: 0;
`
const DieRoll = ({ value, title }) => {
    const DieIcon = DieIcons[value - 1]
    return (
        <DieIconContainer title={title}>
            <DieIcon title={title} />
        </DieIconContainer>
    )
}

export const RollsBox = ({ rolls }) => {
    const [visible, setVisible] = React.useState(true)

    return (rolls && rolls.length) ? (
        <RollsContainer visible={visible}>
            <RollsHeader onClick={() => setVisible(!visible)}>
                Roll History
                <VisibilityToggleButton visible={visible}>
                    <CaretIcon />
                </VisibilityToggleButton>
            </RollsHeader>
            {
                rolls.map(({ resultValue, resultStatus, dice, modifier }, index) => (
                    <RollContainer active={index === 0}>
                        <RollResult status={resultStatus}>
                            {resultValue}
                        </RollResult>
                        <DiceContainer>
                            {
                                dice.map(value => (<DieRoll value={value} title={value} />))
                            }
                            {modifier !== undefined ? (
                                <Modifier>{`${modifier >= 0 ? '+' : '-'} ${Math.abs(modifier)}`}</Modifier>
                            ) : null}
                        </DiceContainer>
                    </RollContainer>
                ))
            }
        </RollsContainer>
    ) : null
}