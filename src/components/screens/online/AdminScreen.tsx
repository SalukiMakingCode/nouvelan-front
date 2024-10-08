import {
    SetCurrentScoreByActivityDto,
    useGetAllUserParticipateQuery,
    userConnected,
    useSetCurrentScoreByActivityMutation
} from "../../../graphql";
import UiText from "../../ui-kit/typography/UiText";
import {Pressable, ScrollView, StyleSheet, View} from "react-native";
import Menu from "../../ui-kit/menu/menu";
import {useState} from "react";
import UiTextField from "../../ui-kit/form/UiTextField";
import UiButton from "../../ui-kit/form/UiButton";

interface UserScores {
    [userId: number]: number;
}

const AdminScreen = () => {
    const user = userConnected();
    const {data, loading, error} = useGetAllUserParticipateQuery();
    const [displayPinsDistribution, setDisplayPinsDistribution] = useState<boolean>(false);
    const [displayPinsDistributionMode, setDisplayPinsDistributionMode] = useState<string | null>(null);
    const [userScores, setUserScores] = useState<UserScores>({});
    const [setScore] = useSetCurrentScoreByActivityMutation();

    if (loading) {
        return <UiText>Loading...</UiText>;
    }

    if (error) {
        return <UiText>Error loading users.</UiText>;
    }

    const handleScoreChange = (userId, score) => {
        setUserScores({
            ...userScores,
            [userId]: score,
        });
    };

    const handleEventPress = (event: string) => () => {
        setDisplayPinsDistribution(true);
        setDisplayPinsDistributionMode(event);
    }

    const saveScore = async () => {
        if (Object.keys(userScores).length === 0) {
            return;
        }

        const scoresToSave: SetCurrentScoreByActivityDto[] = [];

        Object.keys(userScores).forEach(userId => {
            const userScore = Number(userScores[userId]);

            if (!isNaN(userScore)) {
                const scoreToSave: SetCurrentScoreByActivityDto = {
                    userId: Number(userId),
                    yearId: 1,
                };

                switch (displayPinsDistributionMode) {
                    case 'aperitif':
                        scoreToSave.aperitif = userScore;
                        break;
                    case 'dessert':
                        scoreToSave.dessert = userScore;
                        break;
                    case 'entreeChaude':
                        scoreToSave.entreeChaude = userScore;
                        break;
                    case 'entreeFroide':
                        scoreToSave.entreeFroide = userScore;
                        break;
                    case 'plat':
                        scoreToSave.plat = userScore;
                        break;
                    case 'sorbet':
                        scoreToSave.sorbet = userScore;
                        break;
                    case 'soupe':
                        scoreToSave.soupe = userScore;
                        break;
                    default:
                        break;
                }

                scoresToSave.push(scoreToSave);
            }
        });

        await setScore({
            variables: {
                dto: scoresToSave,
            },
        });

    }

    if (!user || user.id !== 1) {
        return (
            <View>
                <UiText template={'h1'} color={'black'}>Admin Screen</UiText>
                <UiText template={'h2'} color={'black'}>Access denied</UiText>
            </View>
        );
    }

    if (displayPinsDistribution) {
        return (
            <View style={styles.container}>
                <Menu/>
                <ScrollView>
                    <View style={styles.containerTitre}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's {displayPinsDistributionMode}
                        </UiText>
                    </View>

                    <View>
                        {data?.getAllUserParticipate?.length > 0 ? (
                            data?.getAllUserParticipate.map((user) => (
                                <View key={user.id} style={styles.containerUser}>
                                    <UiText template={"h2"} textAlign={'center'} color={'black'}>
                                        {user.firstName}
                                    </UiText>
                                    <UiTextField
                                        template={'defaultInputNumber'}
                                        value={userScores[user.id] || ''}
                                        onChange={(value) => handleScoreChange(user.id, value)}
                                    />
                                </View>
                            ))
                        ) : (
                            <UiText>Aucun utilisateur trouvé.</UiText>
                        )}
                    </View>

                    <View>
                        <UiButton onPress={saveScore}>
                            <UiText template={'button'}>
                                Enregistrer
                            </UiText>
                        </UiButton>
                    </View>

                </ScrollView>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView>
                <View style={styles.containerAction}>
                    <Pressable onPress={handleEventPress('aperitif')}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's de l'apéritif
                        </UiText>
                    </Pressable>
                </View>

                <View style={styles.containerAction}>
                    <Pressable onPress={handleEventPress('entreeFroide')}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's de l'entrée froide
                        </UiText>
                    </Pressable>
                </View>

                <View style={styles.containerAction}>
                    <Pressable onPress={handleEventPress('soupe')}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's de la soupe
                        </UiText>
                    </Pressable>
                </View>

                <View style={styles.containerAction}>
                    <Pressable onPress={handleEventPress('entreeChaude')}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's de l'entrée chaude
                        </UiText>
                    </Pressable>
                </View>

                <View style={styles.containerAction}>
                    <Pressable onPress={handleEventPress('sorbet')}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's du sorbet
                        </UiText>
                    </Pressable>
                </View>

                <View style={styles.containerAction}>
                    <Pressable onPress={handleEventPress('plat')}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's du plat
                        </UiText>
                    </Pressable>
                </View>

                <View style={styles.containerAction}>
                    <Pressable onPress={handleEventPress('dessert')}>
                        <UiText template={'h2'} color={'black'}>
                            Distribuer les pin's du dessert
                        </UiText>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140e32'
    },
    containerAction: {
        backgroundColor: '#FFDAB9',
        borderWidth: 4,
        borderColor: '#022aa9',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
    },
    containerTitre: {
        backgroundColor: '#FFDAB9',
        borderWidth: 1,
        borderColor: 'black',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
    },
    containerUser: {
        backgroundColor: '#FFDAB9',
        borderWidth: 1,
        borderColor: 'black',
        width: '95%',
        alignSelf: 'center',
        marginBottom: 10,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default AdminScreen;