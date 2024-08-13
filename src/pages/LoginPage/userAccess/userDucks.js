

export const login =
    ({ form, module, navigate, redirectPath }) =>
        async (dispatch) => {
            try {
                let values = form.getValues();
                values.module = module;
                let { data } = await UserApi.login(values);
                dispatch(setUser(data));
                if (navigate && redirectPath) navigate(redirectPath);
            } catch (error) {
                setFormErrors(form, error);
               // handleError(error, i18next.t("userAccess_authError"));
            }
        };