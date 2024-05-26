type buttonProps = {
    letter: string;
    setValue : () => void;
}
export const Button = ({letter, setValue}: buttonProps) => {
    
    return <button 
        className="button"
        onClick={() => setValue()}
    >
        {letter}
    </button>
}
 
