export function fieldToProps({ field, fieldState }) {
    return {
        ...field,
        error: !!fieldState.error,
        helperText: fieldState?.error?.message,
    };
}
