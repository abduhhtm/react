function ChildComponent ({title, description}) {
    return (
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        </>
    );
} 

function Image ({src, alt, size,}) {
    return (
        <>
        < img src={src} alt={alt} style={{width: size, height: size}}/>
        </>
    );
}

function ChildernComponent ({title, description, age, ...props}) {
    return (
        <div>
        <>
        <h1>{title}</h1>r
        <p>{description}</p>
        <p>{age}</p>
        <Image {...props}/>
        </>
        </div>
    );
}


export default function ParentComponent () {
    return (
        <>
        <ChildernComponent
        title="Titlell"
        description="Description"
        age={20}
        src="../../public/cobaReact.png"
        alt="cobaReact"
        size="100px"
        />
        </> 
    )
}

function Childern({Childern}) {
    return <div style={{backgroundColor: "pink"}}>{Childern}</div>;
    <Childern>
        <ChildernComponent
        title="Title"
        description="Description"
        age={20}
        src="../../public/cobaReact.png"
        alt="cobaReact"
        size="100px"
        ></ChildernComponent>
    </Childern>
}