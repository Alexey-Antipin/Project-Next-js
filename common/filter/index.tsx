import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { choiceCity } from "../../redux/reducers/catalogReducer";
import { toogleBox } from "../../redux/reducers/checkboxReducer";
import getProducts from "../../common/Pagination/GetData";
import { ArticleRoom, MassiveOfSelect } from "../../ts";
import { useEffect, useRef, useState } from "react";
import { RootState } from "../../redux/store";
import styles from "./Filter.module.scss";
import { useRouter } from "next/router";
import { Checkbox } from "../checkbox";
import { cities } from "../../mocks";
import { Select } from "../Select";
import { Sprite } from "../../svg";
import clsx from "clsx";
import {
  selectPriceMin,
  selectPriceMax,
  defaultPrice,
} from "../../redux/reducers/selectReducer";

type ClassFilter = {
  classSelectflex: string;
  classSettings?: string;
  classNavbar: string;
  classList?: string;
  classTitle: string;
  classFlex: string;
  classLine: string;
};

type FilterRoomsTypes = {
  classes?: ClassFilter;
  component?: JSX.Element;
  arrayRooms?: boolean;
  option?: boolean;
};

export const FilterRooms: React.FC<FilterRoomsTypes> = ({
  arrayRooms,
  component,
  classes,
  option,
}) => {
  const checkbox = useAppSelector((state: RootState) => state.checkbox);
  const select = useAppSelector((state: RootState) => state.select);
  const main = useAppSelector((state: RootState) => state.main);
  const ref = useRef<HTMLDivElement>(null);

  const [activeSettings, setActiveSettings] = useState<number>(0);
  const [settings, setSettings] = useState<boolean>(false);
  const [valueMax, setValueMax] = useState<string>("");
  const [valueMin, setValueMin] = useState<string>("");
  const [zeroing, setZeroing] = useState<number>();
  const [active, setActive] = useState<number>(0);
  const rooms: MassiveOfSelect = main.massive[1];

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    optionPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueMin, valueMax]);

  // ???????????????? ??????????????
  const handleClick = () => {
    // ?????????? ????????????
    const newCity: ArticleRoom[] = optionCity();

    // ???????????? ??????
    const arrayPrice = filterPrice(newCity);

    const { articles, total } = getProducts({
      limit: 9,
      page: 1,
      array: arrayPrice,
    });

    dispatch(
      choiceCity({
        articles,
        totalData: total,
        currentPage: 1,
      })
    );

    if (router.pathname !== "/catalog") {
      router.push(`./catalog/`);
    }
  };

  // ?????????? ????????????
  const optionCity = () => {
    switch (select.city) {
      case 0:
        return cities.minsk;
      case 1:
        return cities.gomel;
      case 2:
        return cities.brest;
      case 3:
        return cities.vitebsk;
      case 4:
        return cities.grodno;
      case 5:
        return cities.mogilev;
      default:
        return cities.minsk;
    }
  };

  // ?????????? ??????
  const optionPrice = () => {
    // ?????????????? ????????
    if (valueMin) {
      dispatch(selectPriceMin(valueMin));
    } else {
      dispatch(selectPriceMin("0"));
    }

    // ???????????????? ????????
    if (!valueMax) {
      dispatch(selectPriceMax("10000"));
      return;
    }

    if (valueMin >= valueMax) {
      dispatch(selectPriceMax(valueMin));
    } else {
      dispatch(selectPriceMax(valueMax));
    }
  };

  // ???????????? ?????? ?? ????????????
  const filterPrice = (array: ArticleRoom[]) => {
    return array.filter(
      (item) =>
        +select.priceMin <= +item.price &&
        +item.price <= +select.priceMax &&
        (select.rooms !== 0 ? select.rooms == item.room : item.room)
    );
  };

  // ???????????? ??????????
  const handleClickSettings = () => {
    setSettings(!settings);
    dispatch(toogleBox(!settings));
  };

  // ???????????????? ??????
  const handleClickOfClean = () => {
    dispatch(defaultPrice());
    setValueMax("");
    setValueMin("");
    setZeroing(0);
  };

  // ???????????? ??????????
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return event.target.value.replace(/^[^0-9]{0,3}$/, "");
  };

  useEffect(() => {
    if (!settings) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current == null) {
        return;
      }
      if (!ref.current.contains(e.target as Element)) {
        setSettings(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className={clsx(classes?.classNavbar, styles.navbar)} ref={ref}>
      <div className={classes?.classSelectflex || styles["select-flex"]}>
        {/* ?????????? && ?????????????? */}
        {((arrayRooms && [rooms]) || main.massive).map((item, index) => (
          <div className={styles["select-map"]} key={index}>
            <div
              className={classes?.classFlex}
              onClick={() => setSettings(false)}>
              <h2 className={classes?.classTitle || styles["title-under"]}>
                {item.element}
              </h2>
              <Select
                setActive={setActive}
                active={active}
                setZeroing={setZeroing}
                zeroing={zeroing}
                option_2v={true}
                massive={item}
              />
            </div>
            <div className={clsx(classes?.classLine, styles.line)} />
          </div>
        ))}
        {/* ???????? ???? ?????????? (BYN) */}
        <div className={classes?.classFlex}>
          <h2 className={classes?.classTitle || styles["title-under"]}>
            ???????? ???? ?????????? (BYN)
          </h2>
          <div className={styles["filter-price-flex"]}>
            <input
              className={styles["filter-price"]}
              onChange={(event: any) => setValueMin(handleChange(event))}
              value={valueMin}
              placeholder="????"
              maxLength={5}
            />
            <div className={styles.trait}>-</div>
            <input
              className={styles["filter-price"]}
              onChange={(event) => setValueMax(handleChange(event))}
              value={valueMax}
              placeholder="????"
              maxLength={5}
            />
          </div>
        </div>
        {/* ???????????? ?????????? */}
        <div
          className={styles["button-center"]}
          onClick={() => handleClickSettings()}>
          <div className={clsx(classes?.classLine, styles.line)} />

          <button className={styles.button}>???????????? ??????????</button>
          <Sprite id="setting" />

          <div className={clsx(classes?.classLine, styles.line)} />
        </div>
        {option ? (
          <>
            {/* ???? ?????????? */}
            <div className={styles.padding}>
              <button className={styles.button}>???? ??????????</button>
              <Sprite id="sign" colour="#664EF9" height="15" width="12" />
            </div>

            {/* ???????????????? */}
            <button
              className={styles["button-main"]}
              onClick={() => handleClick()}>
              <span className={styles["text-padding"]}>????????????????</span>
              <Sprite id="mark" colour="black" />
            </button>
          </>
        ) : (
          <>
            {/* ???????????????? ?????????????????? */}
            <button
              className={styles["button-clear"]}
              onClick={() => handleClickOfClean()}>
              ????????????????
            </button>

            {/* ???????????????? ?????????????? */}
            <button
              className={clsx(styles["button-main"], styles["button-colour"])}
              onClick={() => handleClick()}>
              <span className={styles["text-padding"]}>???????????????? ??????????????</span>
              <Sprite id="mark" colour="#FFFFFF" />
            </button>
          </>
        )}
      </div>
      {settings && (
        <div className={classes?.classSettings || styles["filter-block"]}>
          <div className={styles.filter}>
            {main.filterList.map((array, index) => (
              <div
                className={classes?.classList || styles["filter-list"]}
                key={index}>
                <h2 className={classes?.classTitle || styles["title-under"]}>
                  {array.title}
                </h2>
                <Select
                  massive={array}
                  option_3v={true}
                  setActive={setActiveSettings}
                  active={activeSettings}
                />
              </div>
            ))}
          </div>

          <div className={styles["checkbox-block"]}>
            <Checkbox
              massive={checkbox.checkboxMassive[0].list}
              numberling={0}
            />
            <Checkbox
              massive={checkbox.checkboxMassive[1].list}
              numberling={1}
            />
          </div>
        </div>
      )}
      {component}
    </div>
  );
};
