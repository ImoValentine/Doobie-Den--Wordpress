import{newE2EPage}from"@stencil/core/testing";describe("sc-product-buy-button",(()=>{it("renders",(async()=>{const t=await newE2EPage();await t.setContent("<sc-product-buy-button></sc-product-buy-button>");const e=await t.find("sc-product-buy-button");expect(e).toHaveClass("hydrated")}))}));