import test from "tape"
import darkMatterUiReactNative from "../src"

test("darkMatterUiReactNative", (t) => {
  t.plan(1)
  t.equal(true, darkMatterUiReactNative(), "return true")
})
