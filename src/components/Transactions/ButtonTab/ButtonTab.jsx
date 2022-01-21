import { Button } from "./ButtonTab.styled";
// switching between expenses and income
const ButtonTab = ({text, leftPos, topPos, labelColorText, labelColorBG}) => {
    return (
        <Button
            leftPos={leftPos}
            topPos={topPos}
            labelColorText={labelColorText}
            labelColorBG={labelColorBG}
        >
            {text}
        </Button>
    );
};

export default ButtonTab;