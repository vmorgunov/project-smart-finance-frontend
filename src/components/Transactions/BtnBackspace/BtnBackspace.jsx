import srcBtnBackspace from '../../../images/backspace.svg';
import { Button } from './BtnBackspace.styled';

const BtnBackspace = () => {
    return (
        <Button type='button'>  
            <img
                src={srcBtnBackspace}
                alt="Back to home" 
                width="18px"
                height="12px" />
        </Button>  
    );
};

export default BtnBackspace;