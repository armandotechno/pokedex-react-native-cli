import { ScrollView, StyleSheet, Text, View } from "react-native"
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from "./FadeInImage";

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props ) => {
    return (
      <ScrollView
      showsVerticalScrollIndicator={ false }
        style={{ 
            ...StyleSheet.absoluteFillObject,
        }}
      >
        {/* Types y peso */}
        <View style={{
            ...styles.container,
            marginTop: 340
        }}>
            <Text style={ styles.title }>Types</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map( ({ type }) => (
                        <Text
                            style={{ 
                                ...styles.regularText, 
                                marginRight: 10
                            }} 
                            key={ type.name }
                        >
                            { type.name }
                        </Text>
                    ))
                }
            </View>

        {/* Peso */}
        <Text style={ styles.title }>Peso</Text>
        <Text style={ styles.regularText }>{ pokemon.weight }kg</Text>

        </View>

        {/* Sprites */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Sprites</Text>
        </View>

        <ScrollView
            // style={}
            horizontal
            showsHorizontalScrollIndicator={ false }
        >
            <FadeInImage 
                uri={ pokemon.sprites.front_default }
                style={ styles.basicSprite }
            />

            <FadeInImage 
                uri={ pokemon.sprites.back_default }
                style={ styles.basicSprite }
            />

            <FadeInImage 
                uri={ pokemon.sprites.front_shiny }
                style={ styles.basicSprite }
            />

            <FadeInImage 
                uri={ pokemon.sprites.back_shiny }
                style={ styles.basicSprite }
            />
        </ScrollView>

        {/* Habilidades */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Habilidades base</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.abilities.map( ({ ability }) => (
                        <Text
                            style={{ 
                                ...styles.regularText, 
                                marginRight: 10
                            }} 
                            key={ ability.name }
                        >
                            { ability.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* Movimientos */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Movimientos</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    pokemon.moves.map( ({ move }) => (
                        <Text
                            style={{ 
                                ...styles.regularText, 
                                marginRight: 10
                            }} 
                            key={ move.name }
                        >
                            { move.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* Stats */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Stats</Text>
            <View>
                {
                    pokemon.stats.map( ( stat, i ) => (
                        <View 
                            key={ stat.stat.name + i }
                            style={{ flexDirection: 'row' }}
                        >
                            <Text
                                style={{ 
                                    ...styles.regularText, 
                                    marginRight: 10,
                                    width: 250
                                }} 
                                key={ stat.stat.name }
                            >
                                { stat.stat.name.toUpperCase() }
                            </Text>

                            <Text
                                style={{ 
                                    ...styles.regularText, 
                                    fontWeight: 'bold'
                                }} 
                            >
                                { stat.base_stat }
                            </Text>
                        </View>
                    ))
                }
            </View>

            {/* Sprite Final */}
            <View style={{
                marginBottom: 20,
                alignItems: 'center'
            }}>
                <FadeInImage 
                    uri={ pokemon.sprites.front_default }
                    style={{ 
                        ...styles.basicSprite, 
                        width: 150,
                        height: 150,
                        marginBottom: 25
                    }}
                />
            </View>

        </View>
                
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 20
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});