export const Container = (props) => {
    return (
        <div className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
            {props.children}
        </div>
    )
}
