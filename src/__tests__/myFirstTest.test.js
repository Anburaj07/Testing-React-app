import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../components/Button"
import App from "../App";
import { click } from "@testing-library/user-event/dist/click";
import Counter from "../components/Counter";
import renderer from 'react-test-renderer';
import TimeConversion from "../components/TimeConversion";

//component testing
describe("Testing Button Component",()=>{
    it ("check Button is present on DOM or not",()=>{
    render(<Button>Testing Button</Button>)
    const button=screen.getByText("Testing Button");
    expect(button).toBeInTheDocument();
    });

    it("Button is rendered on App with text Click Me",()=>{
        render(<App/>)
        const button=screen.getAllByTestId("test-button");
        expect(button[0]).toBeInTheDocument();
        expect(button[0]).toHaveTextContent('Add')
    })

    it("OnClicking the button shold execute",()=>{
        const mockFun=jest.fn();
        render(<Button func={mockFun}>Click</Button>)
        const button=screen.getByTestId("test-button")
        fireEvent.click(button);
        fireEvent.click(button);
        // expect(mockFun).toBeCalled()
        expect(mockFun).toBeCalledTimes(2)
    })

    it("Should thorw error for color and size",()=>{
        jest.spyOn(console,"error")
        render(<Button color={1} size={false}>Click</Button>)
        expect(console.error).toBeCalledTimes(2)
    })
});

describe("Checking Counter function",()=>{
    it("Counter Should be present on DOM with initial value",()=>{
        render(<Counter/>)
        const counter=screen.getByTestId('counter')
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent(0)
    })

    it("On Clicking add button counter should increase",()=>{
        render(<Counter/>);
        const counter=screen.getByTestId('counter')
        expect(counter).toHaveTextContent(0)
        const button=screen.getAllByTestId("test-button");
        fireEvent.click(button[0]);
        expect(counter).toHaveTextContent(5);
        fireEvent.click(button[0]);
        expect(counter).toHaveTextContent(0);
    })

    it("Button",()=>{
        const tree=renderer
        .create(
            <Button color="blue" size="large">Click Me</Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    })
})

describe("Testing Timer Component",()=>{
    it("check Timer is present on DOM or not",()=>{
        render(<TimeConversion milliseconds={5200}/>)
        const Timer=screen.getByTestId("timer");
        expect(Timer).toBeInTheDocument();
        expect(Timer).toHaveTextContent("5 seconds")
    })

    it("check Timer display for 1 minute", () => {
        render(<TimeConversion milliseconds={60000} />);
        const TimerElement = screen.getByTestId("timer");
        expect(TimerElement).toHaveTextContent("1 minute");
      });
    
      it("check Timer display for 3 minutes and 20 seconds", () => {
        render(<TimeConversion milliseconds={200000} />);
        const TimerElement = screen.getByTestId("timer");
        expect(TimerElement).toHaveTextContent("3 minutes 20 seconds");
      });
})

