import{newE2EPage}from"@stencil/core/testing";describe("sc-choices",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-choices></sc-choices>");const t=await e.find("sc-choices");expect(t).toHaveClass("hydrated")})),it("It can toggle between choices",(async()=>{const e=await newE2EPage();await e.setContent('\n    <sc-choices>\n      <sc-choice type="radio" name="test" value="test" checked></sc-choice>\n      <sc-choice type="radio" name="test" value="test-2"></sc-choice>\n    </sc-choices>\n    ');const t=await e.find('sc-choice[value="test"]'),c=await e.find('sc-choice[value="test-2"]');expect(t).toHaveAttribute("checked"),expect(c).not.toHaveAttribute("checked"),await c.click(),await e.waitForChanges(),expect(t).not.toHaveAttribute("checked"),expect(c).toHaveAttribute("checked")})),it("Can select multiple choices",(async()=>{const e=await newE2EPage();await e.setContent('\n    <sc-choices>\n      <sc-choice name="test" value="test" type="checkbox" checked></sc-choice>\n      <sc-choice name="test" type="checkbox" value="test-2"></sc-choice>\n    </sc-choices>\n    ');const t=await e.find('sc-choice[value="test"]'),c=await e.find('sc-choice[value="test-2"]');expect(t).toHaveAttribute("checked"),expect(c).not.toHaveAttribute("checked"),await c.triggerEvent("click"),await e.waitForChanges(),expect(t).toHaveAttribute("checked"),expect(c).toHaveAttribute("checked"),await t.triggerEvent("click"),await e.waitForChanges(),expect(t).not.toHaveAttribute("checked")}))}));