import React from 'react';
import {useTranslation} from "react-i18next";
import useStyle from './styles'



const P404= () => {
    const {t}= useTranslation()
    const classes = useStyle();

  return (
    <div>
        <img className={classes.notFoundImg} alt={"404photo"} src={"/images/404.png"}/>
        <div className={classes.notFoundText}>
        {t("404_desc")}
        </div>
    </div>
  )};

export default P404;