import{newE2EPage}from"@stencil/core/testing";describe("sc-phone-input",(()=>{let t,e,a,i;const n="sc-phone-input";beforeEach((async()=>{t=await newE2EPage(),await t.setContent(`<${n}></${n}>`),e=await t.find(`${n}`),a=await t.find(`${n} >>> .input`),i=await t.find(`${n} >>> .input__control`),i.focus=jest.fn(),i.blur=jest.fn()})),it("renders",(async()=>{expect(e).toHaveClass("hydrated")})),it("Has sizes",(async()=>{expect(a).toHaveClass("input--medium"),await t.$eval(n,(t=>{t.size="small"})),await t.waitForChanges(),expect(a).toHaveClass("input--small"),await t.$eval(n,(t=>{t.size="large"})),await t.waitForChanges(),expect(a).toHaveClass("input--large")})),it("Can be focused and blurred",(async()=>{const s=await t.spyOnEvent("scBlur"),o=await t.spyOnEvent("scFocus");expect(a).not.toHaveClass("input--focused"),await i.click(),await t.waitForChanges(),expect(a).toHaveClass("input--focused"),expect(o).toHaveReceivedEvent(),await e.callMethod("triggerBlur"),await t.waitForChanges(),expect(a).not.toHaveClass("input--focused"),expect(s).toHaveReceivedEvent(),await e.callMethod("triggerFocus"),await t.waitForChanges(),expect(a).toHaveClass("input--focused"),expect(o).toHaveReceivedEvent(),await t.$eval(n,(t=>{t.hasFocus=!1})),await t.waitForChanges(),expect(a).not.toHaveClass("input--focused"),expect(s).toHaveReceivedEvent(),await t.$eval(n,(t=>{t.hasFocus=!0})),await t.waitForChanges(),expect(a).toHaveClass("input--focused"),expect(o).toHaveReceivedEvent()})),it("Changes value",(async()=>{const a=await t.spyOnEvent("scChange");let n=await i.getProperty("value");expect(n).toBe(""),await i.press("8"),await i.press("8"),await t.waitForChanges(),n=await i.getProperty("value"),expect(n).toBe("88"),await e.callMethod("triggerBlur"),await t.waitForChanges(),expect(a).toHaveReceivedEvent()})),it("Has a name",(async()=>{let e=await i.getAttribute("name");expect(e).toBe(null),await t.$eval(n,(t=>{t.name="Test Name"})),await t.waitForChanges(),expect(i).toHaveAttribute("name");const a=await i.getAttribute("name");expect(a).toBe("Test Name")})),it("Can be disabled",(async()=>{let e=await i.getAttribute("disabled");expect(e).toBe(null),await t.$eval(n,(t=>{t.disabled=!0})),await t.waitForChanges(),expect(i).toHaveAttribute("disabled")})),it("Can be readonly",(async()=>{let e=await i.getAttribute("readonly");expect(e).toBe(null),await t.$eval(n,(t=>{t.readonly=!0})),await t.waitForChanges(),expect(i).toHaveAttribute("readonly")})),it("Can be required",(async()=>{let e=await i.getAttribute("required");expect(e).toBe(null),await t.$eval(n,(t=>{t.required=!0})),await t.waitForChanges(),expect(i).toHaveAttribute("required")})),it("Has a placeholder",(async()=>{let e=await i.getAttribute("placeholder");expect(e).toBe(null),await t.$eval(n,(t=>{t.placeholder="Test placeholder"})),await t.waitForChanges(),expect(i).toHaveAttribute("placeholder");const a=await i.getAttribute("placeholder");expect(a).toBe("Test placeholder")})),it("Can set min and max length",(async()=>{let e=await i.getAttribute("minlength"),a=await i.getAttribute("maxlength");expect(e).toBe(null),expect(a).toBe(null),await t.$eval(n,(t=>{t.minlength=10,t.maxlength=20})),await t.waitForChanges(),expect(i).toHaveAttribute("minlength"),expect(i).toHaveAttribute("maxlength");const s=await i.getAttribute("minlength"),o=await i.getAttribute("maxlength");expect(s).toBe("10"),expect(o).toBe("20")})),it("Can set min and max and step",(async()=>{let e=await i.getAttribute("min"),a=await i.getAttribute("max"),s=await i.getAttribute("step");expect(e).toBe(null),expect(a).toBe(null),expect(s).toBe(null),await t.$eval(n,(t=>{t.min=10,t.max=20,t.step=2})),await t.waitForChanges(),expect(i).toHaveAttribute("min"),expect(i).toHaveAttribute("max");const o=await i.getAttribute("min"),l=await i.getAttribute("max"),c=await i.getAttribute("step");expect(o).toBe("10"),expect(l).toBe("20"),expect(c).toBe("2")}))}));