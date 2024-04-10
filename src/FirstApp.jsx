import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
export const  FirstApp = ({title,subTitle,name}) => {
//console.log(props);
    return (
        <>
        <h1>{title}</h1>
        { /*<code> {JSON.stringify(newMessage)} </code>*/}
        <p>{subTitle}</p>
        <p>{name}</p>
        </>
    );
}
FirstApp.PropTypes = {
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.number,
}
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay titulo',
    name: 'No hay titulo'
}