import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon6.png";
import smirk from "./assets/smirk.png";
import eyes from "./assets/eyes.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { StatusBadge } from "@alfalab/core-components/status-badge";
import { List } from "@alfalab/core-components/list";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [transfer, setTransfer] = useState<string>("self");
  const [plan, setPlan] = useState<string>("");
  const [expanded, setExpanded] = useState(false);

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Gap size={24} />
          <Typography.TitleResponsive
            font="system"
            tag="h1"
            view="medium"
            weight="semibold"
          >
            ДолжОК
          </Typography.TitleResponsive>
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Удобный и лёгкий сервис учёта долгов. Забудьте о неловких разговорах
            и путанице в расчётах.
          </Typography.Text>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Возможности
        </Typography.TitleResponsive>

        <div className={appSt.benefits}>
          <div className={appSt.benefit}>
            <img
              src={icon1}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Учёт
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Прозрачность в долговых отношениях
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon2}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Напоминания
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Тактичные уведомления о возврате долга
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon3}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              История
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Полная статистика всех операций
            </Typography.Text>
          </div>
          <div className={appSt.benefit}>
            <img
              src={icon4}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Простота
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Создание долга в один клик
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Как это работает
        </Typography.TitleResponsive>

        <div style={{ display: "flex", gap: "1rem" }}>
          <ButtonMobile
            block
            view={transfer !== "self" ? "secondary" : "primary"}
            onClick={() => setTransfer("self")}
            size="xs"
          >
            Я даю в долг
          </ButtonMobile>
          <ButtonMobile
            block
            onClick={() => setTransfer("sfr")}
            view={transfer !== "sfr" ? "secondary" : "primary"}
            size="xs"
          >
            Я беру в долг
          </ButtonMobile>
        </div>

        <Gap size={24} />

        {transfer === "self" ? (
          <>
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Создание операции
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              При стандартном переводе отметьте операцию как «долг» и укажите
              срок возврата
            </Typography.Text>
            <Gap size={16} />
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Подтверждение
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Отслеживайте статус долгов в одном месте и управляйте их
              актуальностью
            </Typography.Text>
            <Gap size={16} />
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Контроль возврата
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Получайте уведомления о приближении срока по долгам
            </Typography.Text>
          </>
        ) : (
          <>
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Подтверждение операции
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              При поступлении перевода отметьте операцию как «долг» и укажите
              срок возврата
            </Typography.Text>
            <Gap size={16} />
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Управление
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Отслеживайте статус долгов в одном месте и управляйте их
              актуальностью
            </Typography.Text>
            <Gap size={16} />
            <Typography.Text tag="p" view="primary-medium" weight="bold">
              Контроль возврата
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small">
              Получайте уведомления о приближении срока и совершайте возврат в
              пару кликов
            </Typography.Text>
          </>
        )}

        <Gap size={24} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Выберите план
        </Typography.TitleResponsive>

        <div className={appSt.plans}>
          <div
            className={appSt.plan}
            style={{
              ...(plan === "start" && { borderColor: "black" }),
            }}
            onClick={() => setPlan("start")}
          >
            {plan === "start" && (
              <StatusBadge
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <img
              src={icon6}
              alt=""
              width={50}
              height={60}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Старт
            </Typography.Text>
            <Typography.Text
              tag="p"
              view="primary-small"
              color="secondary"
              style={{ marginBottom: 0 }}
            >
              До 3 активных долгов
            </Typography.Text>
            <Typography.Text tag="p" view="primary-medium">
              49 руб./мес.
            </Typography.Text>
          </div>
          <div
            className={appSt.plan}
            style={{
              ...(plan === "max" && { borderColor: "black" }),
            }}
            onClick={() => setPlan("max")}
          >
            {plan === "max" && (
              <StatusBadge
                view="positive-checkmark"
                size={20}
                className={appSt.checkMark}
              />
            )}
            <img
              src={icon5}
              alt=""
              width={50}
              height={60}
              style={{ objectFit: "cover" }}
            />
            <Typography.Text
              tag="p"
              view="primary-small"
              weight="bold"
              style={{ marginBottom: 0 }}
            >
              Максимум
            </Typography.Text>
            <Typography.Text
              tag="p"
              view="primary-small"
              color="secondary"
              style={{ marginBottom: 0 }}
            >
              Безлимитные долги
            </Typography.Text>
            <Typography.Text tag="p" view="primary-medium">
              149 руб./мес.
            </Typography.Text>
          </div>
        </div>

        <Gap size={24} />

        <div className={appSt.reminder}>
          <img
            src={smirk}
            alt=""
            width={20}
            height={20}
            style={{ marginRight: "0.8rem" }}
          />
          <Typography.Text
            tag="p"
            view="primary-small"
            style={{ marginBottom: 0 }}
          >
            При остатке на счёте более 5 000 руб. доступ к тарифу Максимум —
            бесплатный
          </Typography.Text>
        </div>

        <Gap size={40} />

        <div
          className={appSt.best}
          style={{
            ...(plan === "smart" && { borderColor: "black" }),
          }}
          onClick={() => setPlan("smart")}
        >
          {plan === "smart" && (
            <StatusBadge
              view="positive-checkmark"
              size={20}
              className={appSt.checkMark}
            />
          )}
          <Typography.Text
            tag="p"
            view="primary-small"
            style={{
              margin: "-2.2rem auto 12px auto",
              padding: "0.5rem 1rem",
              backgroundColor: "black",
              color: "white",
              borderRadius: "0.5rem",
              width: "fit-content",
            }}
          >
            Лучший выбор
          </Typography.Text>
          <Typography.Text tag="p" view="primary-large" weight="bold">
            Подписка Альфа-Смарт
          </Typography.Text>
          <Typography.Text tag="p" view="primary-medium" color="secondary">
            Включает <b>Максимум</b> плюс дополнительные опции
          </Typography.Text>
          <div className={appSt.optionsContainer}>
            <div
              className={appSt.options}
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
            >
              <img src={eyes} alt="" width={20} height={20} />
              <Typography.Text
                tag="p"
                view="primary-small"
                style={{ marginBottom: 0 }}
              >
                Посмотреть опции
              </Typography.Text>
            </div>
            <Typography.Text
              tag="p"
              view="primary-medium"
              style={{ marginBottom: 0 }}
            >
              299 руб./мес.
            </Typography.Text>
          </div>
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <BottomSheet
            title={
              <Typography.TitleResponsive
                tag="h3"
                view="xsmall"
                font="system"
                weight="semibold"
              >
                Что входит в подписку
              </Typography.TitleResponsive>
            }
            open={expanded}
            onClose={() => setExpanded(false)}
          >
            <List tag="ul" marker="•">
              <List.Item>+1 топовая категория кэшбэка</List.Item>
              <List.Item>+1 попытка крутить барабан суперкэшбэка</List.Item>
              <List.Item>Секретная подборка партнёров с кэшбэков</List.Item>
              <List.Item>Увеличенный лимит кэшбэка</List.Item>
              <List.Item>+1% годовых</List.Item>
              <List.Item>Бесплатные уведомления</List.Item>
              <List.Item>Бесплатные переводы</List.Item>
              <List.Item>Бесплатное снятие наличных</List.Item>
              <List.Item>Скидка 20% на комиссию на бирже</List.Item>
            </List>
          </BottomSheet>
        </div>
      </div>

      <Gap size={24} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          disabled={!plan}
          block
          view="primary"
          onClick={submit}
        >
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
