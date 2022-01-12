import React from "react";
import { Button, Typography } from "@mui/material";
import CatDef from "../json/CatDef.json";
import NatTrans from "../json/CatNatTrans.json";
import { Link } from "react-router-dom";
import "./tex.css";

export default function CatTheory() {
  const catDefTex = CatDef.tex;
  const natTransDiagram = NatTrans.tex;
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
          <li>
            <span className="cat">Top$_*$</span> is the category of pointed
            topological spaces, with elements $(X,p)$ where $X$ is a topological
            space and $p\in X$.
          </li>
          <li>
            <span className="cat">Diff</span> the category of smooth manifolds
            with morphisms the smooth maps.
          </li>
        </ul>
      </div>
      <div className="definition">
        (Subcategory) A category $\D$ of category $\C$ has the property that:
        <ul>
          <li>$\Obj(\D) \subseteq \Obj(\C)$.</li>
          <li>
            If $A,B\in \Obj(\D)$, then $\Hom_\D(A,B)\subseteq \Hom_\C(A,B)$.
          </li>
        </ul>
      </div>
      <div className="definition">
        (Covariant Functors) A (covariant) functor $F$ from categories $\C$ to
        $\mathcal D$ is:
        <ul>
          <li>A mapping of $\Obj(\C)$ to $\Obj(\mathcal D)$.</li>
          <li>
            A mapping of $f\in \Hom(A,B)$ in $\C$, to $F(f) \in \Hom(F(A),F(B))$
            with the property that $F(f\circ g) = F(f)\circ F(g)$.
          </li>
        </ul>
      </div>
      <div className="definition">
        (Opposite Category) Given a category $\C$, the opposite category $\op
        \C$ is defined by:
        <ul>
          <li>$\Obj(\op \C) = \Obj(\C)$.</li>
          <li>
            $f\in \Hom_\C(A,B) \iff f\in \Hom_{"{\\op\\C}"}(B,A)$ for any
            $A,B\in \Obj(\C)$.
          </li>
        </ul>
      </div>
      <div className="definition">
        (Contravariant Functor) Contravariant functors from $\C \to \D$ are
        covariant functors from $\op\C\to \D$.
      </div>
      <div>
        Examples of functors (both covariant and contravariant):
        <ul>
          <li>
            Each topological space maps to a set simply by viewing it without
            its topological structure, and the continuous morphisms between
            topological spaces are simply set morphisms. This gives a functor
            (not an interesting one) from <span className="cat">Top</span> to{" "}
            <span className="cat">Set</span>. This is called a forgetful
            functor, which mean that the functor forgets some structure.
          </li>
          <li>
            If the reader is familiar with smooth manifolds, then the reader
            might know that each pointed smooth manifold (smooth manifold with
            basepoint) $(M,x)$ has a tangent plane at that point $T_xM$ in{" "}
            <span className="cat">Vec</span>$_{"{\\mathbb R}"}$, and each smooth
            map $F$ from $(M,x) \to (N,y)$ induces a linear map (called the
            differential) $dF_x : T_xM\to T_yN$. This is an example of a
            covariant functor from <span className="cat">Diff$_*$</span> to{" "}
            <span className="cat">Vec</span>$_{"{\\mathbb R}"}$.
          </li>
          <li>
            The fundamental group $\pi_1$ is a mapping from{" "}
            <span className="cat">Top$_*$</span> to{" "}
            <span className="cat">Grp</span>.
          </li>
        </ul>
      </div>
      <div className="definition">
        (Natural Transformations) A natural transforamtion $\alpha$ between two
        functors $F,G:\C\to\D$ is a mapping from $A\in\Obj(\C)$ to a morphism
        $\alpha_A:F(A)\to G(A)$ such that the following commutes for all
        $f,A,B$:
        {natTransDiagram}
        We usually denote the natural transformation between $F,G$ as
        $F\Rightarrow_\alpha G$. Two categories are equivalent if there are
        functors $P:\C\to\D, Q:\D\to\C$ such that there are natural
        transformations that make $P\circ Q \Rightarrow_\alpha \id_\D$ and
        $Q\circ P \Rightarrow_\beta \id_\C$ where $\id_\C$ is the identity
        functor on category $\C$. ($P\circ Q$ is the $F$ and $\id_\D$ is the $G$
        in the definition of natural transformation).
      </div>
      <div>Examples of natural transformation:</div>
      <Link to="/" style={{ marginTop: "20px" }}>
        <Button>Back</Button>
      </Link>
    </div>
  );
}
