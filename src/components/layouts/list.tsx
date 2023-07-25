import { Checkbox, ListItem, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

function List_component() {

    const [listdata, setListdata] = useState([]);
    const [listdt, setListdt] = useState<any>([]);
    const [checkbox, setCheckbox] = useState<any>([])

    const maplist = new Map();
    useEffect(() => {
        fetch('./src/data/list.json').then(res => res.json())
            .then(resdata2 => {
                listdata ;
                setListdata(resdata2);
                nestedObject(resdata2)
            });
    }, []);

    const handleChange = (e: any, key: any) => {
        Object.keys(checkbox).map(dpt => {
            if (key == dpt) {
                checkbox[key] = e.target.checked;
                if (key == 'department0') {
                    checkbox['sub_departments1'] = e.target.checked;
                    checkbox['sub_departments2'] = e.target.checked;
                }

                if (key == 'department3') {
                    checkbox['sub_departments4'] = e.target.checked;
                    checkbox['sub_departments5'] = e.target.checked;
                    checkbox['sub_departments6'] = e.target.checked;
                }
                checkbox['sub_departments1'] && checkbox['sub_departments2'] == true ? checkbox['department0'] = e.target.checked : checkbox['department0'] = false;
                checkbox['sub_departments4'] && checkbox['sub_departments5'] && checkbox['sub_departments6'] == true ?
                    checkbox['department3'] = e.target.checked : checkbox['department3'] = false;
                setCheckbox({ ...checkbox })
            }
        })
    }

    function nestedObject(listdata: any) {
        var c = 0;
        Object.keys(listdata).forEach(dpt => {
            for (var [key, value] of Object.entries(listdata[dpt])) {
                if (key == 'department') {
                    checkbox[key + c] = false
                    maplist.set(key + c++, value)
                }
                if (key == 'sub_departments') {
                    if (typeof (value) == 'object') {
                        Object.values(value as Object).map(sub => {
                            checkbox[key + c] = false
                            maplist.set(key + c++, sub)
                        })
                    }
                }
            }
        });
        setListdt(Object.fromEntries(maplist));
        setCheckbox({ ...checkbox });
    };

    return (
        <>
            <List key={'list'}>
                {
                    Object.keys(listdt).map(key => {
                        if (key.length == 11) {
                            return (
                                <ListItem sx={{ marginLeft: '15px' }} divider key={Math.random()}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Checkbox checked={checkbox[key]} onChange={e => handleChange(e, key)}></Checkbox>
                                        </ListItemIcon>
                                        <ListItemText>{listdt[key]}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        } else {
                            return (
                                <ListItem sx={{ marginLeft: '50px' }} divider key={Math.random()}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Checkbox checked={checkbox[key]} onChange={e => handleChange(e, key)}></Checkbox>
                                        </ListItemIcon>
                                        <ListItemText>{listdt[key]}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        }
                    })
                }
            </List>
        </>
    )
}
export default List_component;
