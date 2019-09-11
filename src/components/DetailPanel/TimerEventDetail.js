import styles from "./index.less";
import {Input, TimePicker,} from "antd";
import React, {useContext} from "react";
import DefaultDetail from "./DefaultDetail";
import LangContext from "../../util/context";

const TimerEventDetail = ({model,onChange,readOnly = false,}) => {
  const { i18n } = useContext(LangContext);
  const title = i18n['timerEvent'];
  return (
    <div data-clazz={model.clazz}>
      <div className={styles.panelTitle}>{title}</div>
      <div className={styles.panelBody}>
        <DefaultDetail model={model} onChange={onChange} readOnly={readOnly} />
        <div className={styles.panelRow}>
          <div>{i18n['timerEvent.cycle']}：</div>
          <TimePicker defaultValue={model.cycle}
                      style={{width: '100%', fontSize: 12}}
                      placeholder={i18n['timerEvent.cycle.placeholder']}
                      format="HH:mm"
                      disabled={readOnly}
                      onChange={(time,timeString) => onChange('cycle', timeString)}
          />
        </div>
        <div className={styles.panelRow}>
          <div>{i18n['timerEvent.duration']}：</div>
          <TimePicker defaultValue={model.duration}
                      style={{width: '100%', fontSize: 12}}
                      placeholder={i18n['timerEvent.cycle.placeholder']}
                      format="HH:mm"
                      disabled={readOnly}
                      onChange={(time,timeString) => onChange('duration', timeString)}
          />
        </div>
      </div>
    </div>
  )
};

export default TimerEventDetail;
