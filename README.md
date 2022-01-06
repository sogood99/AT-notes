# Algebraic Topology Notes

Some notes for topology. Plan on covering:

- [ ] Basic Category Theory
- [ ] Homotopy and Fundamental Group
- [ ] Van Kampen's Theorem and Examples
- [ ] Covering Spaces
- [ ] Singular Homology
- [ ] Homology with Coefficients
- [ ] Degrees and Cellular Homology
- [ ] Simplicial Homology
- [ ] Simplicial Approximation (Lefschetz Fixed Point Theorem)
- [ ] Mayer Vietoris Sequence
- [ ] Axioms of Homology
- [ ] Cohomology ?

## Build

Convert tex files in `./tex` to json:

```
node texToJson.js ./tex/ ./react-app/src/json/
```

then use react stuff (`npm start`, `npm build`). Use `npm run deploy` to deploy to GitHub pages.
