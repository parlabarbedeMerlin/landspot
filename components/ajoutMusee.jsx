/* eslint-disable max-lines-per-function */
import { Field, Formik } from "formik"
import { validationSchemaMusee } from "@/utils/validationSchema"
import { initialValuesMusee } from "@/utils/initialValues"
import { ButtonForm } from "@/components/buttonForm"
import { handleSubmitMusee } from "@/utils/handleSubmit"
import { useState } from "react"

export const FormMusee = () => {
  const [typeentree, settypeentree] = useState("choisir une option")

  return (
    <Formik
      validationSchema={validationSchemaMusee}
      initialValues={initialValuesMusee}
      onSubmit={handleSubmitMusee}
    >
      <form className="text-2xl my-2">
        <div className="flex justify-between">
          <p>Nom du musée</p>
          <Field name="name" component="input" placeholder="Nom du musée" />
        </div>
        <h2 className="mt-4 text-4xl mb-2">Adresse du spot</h2>
        <div className="flex justify-between gap-5">
          <Field
            name="numero"
            type="number"
            component="input"
            placeholder="Numero"
            className="w-1/3"
          />
          <Field
            name="rue"
            component="input"
            placeholder="Rue"
            className="w-2/3"
          />
        </div>
        <Field
          name="ville"
          component="input"
          className="w-2/3 my-2"
          placeholder="Ville"
        />
        <div className="flex justify-between gap-5">
          <Field
            name="codepostal"
            component="input"
            placeholder="Code postal"
            className="w-1/3"
          />
          <Field
            name="pays"
            component="input"
            placeholder="Pays"
            className="w-2/3"
          />
        </div>
        <h2 className="mt-4 text-4xl mb-2">Description</h2>
        <div className="flex justify-between">
          <p>Courant artistique</p>
          <Field
            name="courant"
            component="input"
            placeholder="Renaissance, surréalisme ..."
          />
        </div>
        <div className="flex justify-between">
          <p>Type d'art</p>
          <Field
            name="typeart"
            component="input"
            placeholder="Peinture, sculpture ..."
          />
        </div>
        <div className="flex justify-between my-2">
          <p>Gratuit ou payant</p>
          <Field
            name="prix"
            as="select"
            onChange={(event) => {
              settypeentree(event.target.value)
            }}
            value={typeentree}
          >
            {["payant", "gratuit", "Choisir une option"]
              .reverse()
              .map((typeText, index) => (
                <option key={index} value={typeText}>
                  {typeText}
                </option>
              ))}
          </Field>
        </div>
        {typeentree === "payant" && (
          <div className="flex justify-between my-2">
            <p>Niveau du prix</p>
            <Field name="niveauPrix" as="select" required={typeentree}>
              {[
                "5 - €€€€€",
                "4 - €€€€",
                "3 - €€€",
                "2 - €€",
                "1 - €",
                "Choisir un prix",
              ]
                .reverse()
                .map((typeText, index) => (
                  <option key={index} value={typeText}>
                    {typeText}
                  </option>
                ))}
            </Field>
          </div>
        )}
        <ButtonForm />
      </form>
    </Formik>
  )
}
