import React from "react";
import { Button, Typography } from "@mui/material";
import CatDef from "../json/CatDef.json";
import { Link } from "react-router-dom";
import "./tex.css";

export default function CatTheory() {
  const catDefTex = CatDef.tex;
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        Category Theory
      </Typography>
      <div className="definition">
        (Category){catDefTex} A category $\C$ is a class containing:
      </div>
      <ul>
        <li>$\Obj (\C)$ class of objects of category $\C$.</li>
        <li>For each $A,B\in \Obj(\C)$, a class of morphisms $\Hom (A,B)$.</li>
        <li>
          A composition operator $\circ:\Hom(B,C)\times \Hom(A,B)\to \Hom(A,C)$
          for all $A,B,C\in\Obj(\C)$, for example if $f\in\Hom(A,B),
          g\in\Hom(B,C)$, then $g\circ f \in \Hom(A,C)$ as expected.
        </li>
        <li>In addition, $\circ$ composition satisfies commutivity.</li>
        <li>
          Existence of $\id_A$ for all $A\in \Obj(\C)$ with the property that
          $\id_A \circ f = f$ and $g\circ \id_A = g$ for $f\in
          \Hom(Z,A),g\in\Hom(A,Z)$ for arbitrary $Z \in \Obj(\C)$.
        </li>
      </ul>
      <div className="definition">
        (Isomorphism in Category $\C$) A morphism $f\in\Hom(A,B)$ is called an
        isomorphism if there is a $g\in \Hom(B,A)$ such that $f\circ g =\id_B$
        and $g\circ f = \id_A$.
      </div>
      <div>
        Some examples would be nice:
        <ul>
          <li>
            Given a group $G$, we can form the one-object category induced by
            $G$, where the $\Hom(A,A)$ is exactly the group $G$ and $\id_A = e$.
            As evident from the definition of a group all the morphisms are
            isomorphism.
          </li>
          <li>
            If we extend the above definition to many-object category (where all
            morphisms are isomorphism), we get a groupoid.
          </li>
          <li>
            If we relax the one-object category group (that all morphisms don't
            have to be isomorphism), we obtain the monad category.
          </li>
          <li>
            <span className="cat">Set</span> the category of sets with morphism
            the functions between them.
          </li>
          <li>
            <span className="cat">Top</span> the category of topological spaces
            with morphisms the continuous maps.
          </li>
        </ul>
      </div>
      <div className="definition">
        (Functors) A functor $F$ from categories $\C$ to $\mathcal D$ is:
        <ul>
          <li>A mapping of $\Obj(\C)$ to $\Obj(\mathcal D)$.</li>
          <li>
            A mapping of $f\in \Hom(A,B)$ in $\C$, to $F(f) \in \Hom(F(A),F(B))$
            with the property that $F(f\circ g) = F(f)\circ F(g)$.
          </li>
        </ul>
      </div>
      <div>
        Examples of functors:
        <ul>
          <li></li>
        </ul>
      </div>
      <Link to="/" style={{ marginTop: "20px" }}>
        <Button>Back</Button>
      </Link>
    </div>
  );
}
