import styled from "styled-components";


export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background:none;
      border: 1px solid #FFF;
      color: white;
      font-weight: 600;
      &::placeholder{
        color: #FFF;
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
      position: relative;
      transition: all 0.3s ease;

      &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover{
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(35, 206, 107, 0.3);
      }
    }
  
  }

  @media (max-width: 740px){
    padding: 0 2rem;
    
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }

  @media (max-width: 480px){
    padding: 0 1.5rem;
    
    h2{
      font-size: 2.5rem;
    }

    form{
      input, textarea{
        padding: 0.8rem 1.5rem;
        font-size: 1.4rem;
      }

      textarea{
        height: 15rem;
      }

      button{
        padding: 0.8rem 4rem;
        font-size: 1.4rem;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`