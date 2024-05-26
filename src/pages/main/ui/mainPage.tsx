import { useStoreMap, useUnit, } from "effector-react";
import { Button, Cell } from "../../../shared/ui";
import { $store, api } from "../model/store";
import { createCellsValues } from "../model/helpers";


export const MainPage = () => {
    const chain = createCellsValues();
    const [moveOn, reset, toSum] = useUnit([api.moveOn, api.reset, api.toSum]);
    const sum = useStoreMap({
        store: $store,
        fn: (s) => s.sum,
        keys: [],
    });


    return <div>
        <div className="wrapper-cells">
            {chain.map((number, index) => <Cell key={number} value={number} index={index} />)}
        </div>
        <div className="wrapper-buttons">
            Total sum: <Cell value={sum} />
            <div>
                <Button letter={'Y'} setValue={moveOn} />
                <Button letter={'N'} setValue={reset} />
                <Button letter={'B'} setValue={() => toSum(chain)} />
            </div>
        </div>
    </div>
}

