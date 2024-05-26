import { useStoreMap } from "effector-react";
import { $store } from "../../pages/main/model/store";

type CellProps = {
    value: number
    index?: number
}

export const Cell = function Cell({ value, index }: CellProps) {
    const currentIndex = useStoreMap({
        store: $store,
        fn: (s) => s.currentIndex,
        keys: [],
    });

    return <div className="wrapper-box">
        <div className={index === currentIndex ? 'box-active' : 'box'}>
            {value}
        </div>
    </div>
}
