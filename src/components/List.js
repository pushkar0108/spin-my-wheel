import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import update from 'immutability-helper';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { setSegments } from "../redux/features/appSlice";

const InputComponent = () => {
    const dispatch = useDispatch();
    const { segments } = useSelector((state) => state.app);
    const [input, setInput] = useState("");

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
                <TextField fullWidth
                    id="standard-basic"
                    label="Enter Item"
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <Button
                    variant="outlined"
                    onClick={() => {
                        if (input) {
                            const updatedSegments = [
                                [input, true],
                                ...segments
                            ];
                            dispatch(setSegments(updatedSegments));
                            setInput("");
                        }
                    }}
                >Add to List</Button>
            </Grid>
        </Grid>
    )
};

export default function SegmentList() {
    const dispatch = useDispatch();
    const { segments } = useSelector((state) => state.app);

    const handleDelete = (index) => {
        const updatedSegments = update(segments, { $splice: [[index, 1]] });
        dispatch(setSegments(updatedSegments));
    };

    const handleVisibility = (index) => {
        const segment = segments[index];
        const [text, visible] = segment;
        const updatedSegments = update(segments, {
            [index]: { $set: [text, !visible] }
        })
        dispatch(setSegments(updatedSegments));
    };

    return (
        <>
            <InputComponent />
            <Stack direction="row" spacing={1} className="m-4">
                <Chip onClick={() => {
                    const updatedSegments = _.sortBy(segments, [0]);
                    dispatch(setSegments(updatedSegments));
                }}
                    icon={<SortByAlphaIcon />} 
                    label="Sort" 
                    variant="outlined"
                />
                <Chip onClick={() => {
                    const updatedSegments = _.shuffle(segments);
                    dispatch(setSegments(updatedSegments));
                }}
                    icon={<ShuffleIcon />} 
                    label="Shuffle" 
                    variant="outlined" 
                />
            </Stack>

            <List style={{
                height: "42vh",
                overflow: "scroll"
            }}>
                {
                    segments.map((segment, index) => {
                        const [text, visible] = segment;
                        return (
                            <ListItem
                                key={text + index}
                                secondaryAction={
                                    <>
                                        <IconButton
                                            onClick={() => {
                                                handleDelete(index);
                                            }}
                                            edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => {
                                                handleVisibility(index);
                                            }}
                                            edge="end" aria-label="visibility">
                                                {
                                                    visible ?
                                                    <VisibilityIcon /> :
                                                    <VisibilityOffIcon />
                                                }
                                        </IconButton>
                                    </>

                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                        <DragIndicatorIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={text}
                                />
                            </ListItem>
                        )
                    })
                }
            </List>
        </>
    )
}