import { useDispatch, useSelector } from "react-redux";

import {
  decQuantity,
  getCurrentProductQuantity,
  incQuantity,
} from "../../stores/cartSlice";

type UpdateProductQuantityProps = {
  id: number;
};

function UpdateQuantity({ id }: UpdateProductQuantityProps) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentProductQuantity(id));

  return (
    <div className="flex min-w-[90px] items-center justify-between gap-2 border p-2">
      <button className="text-xl" onClick={() => dispatch(incQuantity(id))}>
        +
      </button>
      <span className="flex-shrink-0">{currentQuantity}</span>
      <button className="text-xl" onClick={() => dispatch(decQuantity(id))}>
        -
      </button>
    </div>
  );
}

export default UpdateQuantity;
