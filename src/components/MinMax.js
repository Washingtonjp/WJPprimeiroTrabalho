const MinMax = (props) => {
    console.log(props)
    let resultado = props.min + props.max;
return <div> <h2 className ="titulo">o valor de {props.max} é maior que o valor de {props.min} </h2>
          <h1> {resultado} </h1>
</div>
}
export default  MinMax ;