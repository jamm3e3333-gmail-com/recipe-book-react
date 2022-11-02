import classes from './Loader.module.scss'

const Loader: FunComponent = () => {
    return (
        <div className={classes['lds-ring']}><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader