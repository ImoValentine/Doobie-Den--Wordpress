import{newSpecPage}from"@stencil/core/testing";import{h}from"@stencil/core";import{ScDonationChoices}from"../sc-donation-choices";describe("sc-donation-choices",(()=>{it("renders",(async()=>{const o=await newSpecPage({components:[ScDonationChoices],template:()=>h("sc-donation-choices",null)});expect(o.root).toMatchSnapshot()}))}));