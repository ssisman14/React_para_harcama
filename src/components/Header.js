
function Header({money, total}) {


    return (
        <>
            <div>
                {
                    (total > 0 && (
                        <div className='header'>
                            Harcamak için <span>{money - total}</span> Tl paranız vardır.
                        </div>
                    ))
                    ||
                    (<div className='header'>
                        Harcamak için <span>{money}</span> Tl paranız vardır.
                    </div> )
                }
                <style jsx>
                    {`
                      .header{
                        position: sticky;
                        top: 0;
                        background : linear-gradient(to bottom, black, gray);
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        font-size: 24px;
                        letter-spacing: 1px
                      }
                      .header span {
                        margin: 0 10px;
                        font-weight: bold;

                      }
                    `}

                    }
                </style>


            </div>
        </>
    );
}



export default Header;