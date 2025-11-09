import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 4rem;
      }
      a{
        color: var(--black);
        font-weight: 500;
      }
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    padding: 0 2rem;
    
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
      }
    }
  }

  @media(max-width: 600px){
    padding: 0 1.5rem;
    
    header{
      h2{
        font-size: 3rem;
      }

      p{
        font-size: 1.5rem;
      }
    }

    .contacts{
      div{
        padding: 1.4rem 2rem;
        
        img{
          width: 3.5rem;
        }

        a{
          font-size: 1.4rem;
        }
      }
    }
  }

  @media(max-width: 480px){
    header{
      h2{
        font-size: 2.5rem;
      }
    }

    .contacts{
      gap: 1.5rem;
      
      div{
        padding: 1.2rem 1.5rem;
        gap: 1.5rem;
        
        img{
          width: 3rem;
        }

        a{
          font-size: 1.3rem;
        }
      }
    }
  }
  
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
