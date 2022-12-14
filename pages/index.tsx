import { articlesThunk } from "../redux/reducers/articlesReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ImageBlock } from "../common/ImageBlock";
import { LinkNavigation, List } from "../common";
import styles from "../styles/Main.module.scss";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { Select } from "../common/Select";
import { Slider } from "../common/Slider";
import { Sprite } from "../svg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const main = useAppSelector((state: RootState) => state.main);
  const rooms = useAppSelector((state: RootState) => state.articles);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    let interval = 6;
    dispatch(articlesThunk(interval));
    console.log(rooms.articles);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Главная</title>
      </Head>

      {/* Фильтр городов. */}
      <div className={styles["block-filter"]}>
        <h1 className={styles.title}>
          Sdaem.by - у нас живут
          <span className={styles["title-colour"]}>ваши объявления</span>
        </h1>

        <List
          array={main.array}
          beginNumber={1}
          active={true}
          classes={{
            classUl: styles["list-ul"],
          }}
        />
        <div className={styles.navbar}>
          {/* Город && Комнаты */}
          {["Город", "Комнаты"].map((el, index) => (
            <div className={styles["select-flex"]} key={index}>
              <div>
                <h2 className={styles["title-under"]}>{el}</h2>
                <Select
                  massive={main.massive[0]}
                  setActive={setActive}
                  alternative={true}
                  active={active}
                />
              </div>
              <div className={styles["block-line"]} />
            </div>
          ))}

          {/* Цена за сутки (BYN) */}
          <div>
            <h2 className={styles["title-under"]}>Цена за сутки (BYN)</h2>
            <div className={styles["filter-price-flex"]}>
              <input
                className={styles["filter-price"]}
                type="number"
                placeholder="От"
              />
              <div className={styles.trait}>-</div>
              <input
                className={styles["filter-price"]}
                type="number"
                placeholder="До"
              />
            </div>
          </div>
          <div className={styles["block-line"]} />

          {/* Больше опций */}
          <div className={styles["button-center"]}>
            <button className={styles.button}>Больше опций</button>
            <Sprite id="setting" />
          </div>
          <div className={styles["block-line"]} />

          {/* На карте */}
          <div className={styles["block-padding"]}>
            <button className={styles.button}>На карте</button>
            <Sprite id="sign" colour="#664EF9" height="15" width="12" />
          </div>

          {/* Показать */}
          <button className={styles["button-main"]}>
            <span className={styles["text-padding"]}>Показать</span>
            <Sprite id="mark" colour="black" />
          </button>
        </div>
      </div>

      {/* Показ и выбор городов. */}
      <div className={styles.block}>
        {/* Картинки. */}
        <div className={styles["block-picture"]}>
          {main.pictureSize.map((el) => (
            <ImageBlock
              title_2h={el.title_2h}
              title_3h={el.title_3h}
              cl_title_2h={el.cl_title_2h}
              cl_title_3h={el.cl_title_3h}
              cities={main.cities}
              width={el.width}
              index={el.index}
              key={el.index}
            />
          ))}
        </div>

        {/* Выбор городов. */}
        <div className={styles["city-block"]}>
          {[0, 1, 2].map((el) => (
            <List
              key={el}
              title={main.massiveList[el].title}
              array={main.massiveList[el].massive}
              classes={{
                classList: styles["city-List"],
                classTitle: styles["city-title"],
                classUl: styles["city-ul"],
              }}
            />
          ))}
        </div>

        {/* Куб точек. */}
        <div className={styles["position-picture"]}>
          <Image src={"/points.png"} alt="points" height={61} width={61} />
        </div>
      </div>

      {/* Квартиры и слайдер */}
      <div className={styles["block-slider"]}>
        <LinkNavigation
          deepLink="Аренда квартир в Минске"
          main="КВАРТИРЫ НА СУТКИ"
          option_v3={true}
        />

        {/* Slider */}
        <div className={styles["slider-margin"]}>
          <Slider array={rooms.articles.items} />
        </div>

        {/* Фон. */}
        <div className={styles.background} />

        {/* Внутри фона. */}
        <div className={styles["background-select"]}>
          {/* Метро && Район */}
          {[0, 1].map((_, index) => (
            <div key={index}>
              <Select
                massive={main.metroAndArea[index]}
                setActive={setActive}
                metro={index === 0}
                block_metro={true}
                alternative={true}
                active={active}
              />
            </div>
          ))}
        </div>

        {/* Под slider'ом */}
        <div className={styles["block-under-slider"]}>
          <div>
            <div className={styles["articles-length"]}>
              {rooms.articles.lengthItems}
              <span className={styles["articles-plus"]}>+</span>
            </div>
            <p className={styles["under-text"]}>Предложений по Минску</p>
          </div>

          <div
            className={clsx(
              styles["block-line-margin"],
              styles["block-line"]
            )}
          />

          <Link href="./" className={styles["button-watch-alles"]}>
            Посмотреть все
            <div className={styles["sprite-margin"]}>
              <Sprite id="mark" colour="#ffffff" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
