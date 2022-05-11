const Container = (props)=>{
    const defaultClass = 'container-full mx-auto p-4 min-w-full'
    return <div className={`${defaultClass} ${props.className}`}>{props.children}</div>
}

export default Container;