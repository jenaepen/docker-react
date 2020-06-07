import React from "react"
import { shallow, mount } from 'enzyme';

import App from "../JS/App.js"


describe('App.js', () => {
    it('renders without crashing', () => {
        shallow(<App />);
      });
      it("App has a button in it", ()=>{
          const wrapper = mount(<App/>)
          const button = wrapper.find("button")
          expect(button.text()).toEqual("Increment Count")
      })
});
