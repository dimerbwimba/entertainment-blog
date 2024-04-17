export const PersonTagView = ({ person }:any) => {
    return (
        <div>
            
            <img src={person[3][1]} alt={person[5][1]} />
            <h2>{person[4][1]}</h2>
            <dl>
                {person.slice(4).map((details:any, index:number) =>
                    <div  key={index} className="profile border-b mt-5">
                        <dt className=" uppercase">{details[0]}</dt>
                        <dd>
                            <p>{details[1]}</p>
                        </dd>
                    </div>
                )}
            </dl>
        </div>
    );
}