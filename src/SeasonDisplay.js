import React from 'react';

const seasonConfig = {
    winter : {
    text: "It is chilly",
    iconName: 'snowflake'
    },
    summer : {
    text: 'Lets hit the beach',
    iconName: 'sun'
    }
}
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
      return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
    const SeasonDisplay = (props) =>{
        const season = getSeason(props.lat , new Date().getMonth());
        const {text , iconName} = seasonConfig[season];
        return(
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h2 className="header">{text}</h2>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )
}
export default SeasonDisplay;
