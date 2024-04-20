import { Button, Grid } from "@mui/material";

export function AksiButtonSection({
    isDraft = false,
    onEditClick,
    onPublishClick,
    onDraftClick,
    onPratinjauClick,
    onDeleteClick
}) {
    return (
        <Grid className="mx-[64px]" container rowSpacing={1} columnSpacing={2}>
            <Grid className="flex items-start" item xs={6}>
                <button onClick={onEditClick} className="border-hijau border-[2px] px-[16px] py-[4px] rounded-full text-hijau font-bold hover:bg-[#f5f5f5]">
                    Edit
                </button>
            </Grid>

            <Grid className="flex items-start" item xs={6}>
                <button onClick={isDraft ? onPublishClick : onDraftClick} className="border-hijau border-[2px] px-[16px] py-[4px] rounded-full text-hijau font-bold hover:bg-[#f5f5f5]">
                    {isDraft ? 'Publish' : 'Unpublish'}
                </button>
            </Grid>

            <Grid className="flex items-start" item xs={6}>
                <button onClick={onPratinjauClick} className="border-hijau border-[2px] px-[16px] py-[4px] rounded-full text-hijau font-bold hover:bg-[#f5f5f5]">
                    Pratinjau
                </button>
            </Grid>

            <Grid className="flex items-start" item xs={6}>
                <button onClick={onDeleteClick} className="border-merah border-[2px] px-[16px] py-[4px] rounded-full text-merah font-bold hover:bg-[#f5f5f5]">
                    Delete
                </button>
            </Grid>
        </Grid>
    )
}