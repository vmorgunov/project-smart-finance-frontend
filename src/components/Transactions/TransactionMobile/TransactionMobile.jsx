import Button from "../Button";
import { BalanseWrrap, BtnWrap, Item, List } from "./TransactionMobile.styled";

const TransactionMobile = () => {
return (
    <>
        {/* <BalanseWrrap></BalanseWrrap> */}
        <List >
            <Item >

            </Item>
        </List>
        <BtnWrap>
            <Button
                text='расход'
                marginButton='0 2px 0 0'
                widthButton='159'
                heightButton='53'
                borderRadius='0'
                backgroundColor='var(--bg-color)'
            />
            <Button
                text='доход'
                marginButton='0'
                widthButton='159'
                heightButton='53'
                borderRadius='0'
                backgroundColor='var(--bg-color)'
            />
        </BtnWrap>
    </>
    );
};

export default TransactionMobile;