# Skincare JSON ✨🧽

[ ![AGPL](http://www.gnu.org/graphics/agplv3-155x51.png) ](http://www.gnu.org/licenses/agpl-3.0.en.html)

# Installation 📜

```
npm install skincare-json
```
or

```
yarn add skincare-json
```


It does the cleaning treatment and the conversion of a JSON.


Turn this:

    { 
      "whatever": ",
      "whatever2": "easy "peasy" ""lemon squeezy"",
      "whatever3": "\rwhata"",
    }

Into this:

    { 
      "whatever": "",
      "whatever2": "easy peasy lemon squeezy,
      "whatever3": "whata",
    }


## Examples

```javascript
const skinJSON = require('skincare-json');
const jsonDirty = '{
      "whatever": ",
      "whatever2": "easy "peasy" ""lemon squeezy"",
      "whatever3": "\rwhata"",
    }'
    try {
      const jsonClean = JSON.parse(jsonDirty);
    } catch (error) {
      const jsonClean = skinJSON.parse(jsonDirty);
    }
console.log(jsonClean);

```


## 🙋‍♂️ Author

* **Gustavo Henrique** - [Gustavoohrq](https://github.com/Gustavoohrq)

## License

This project is licensed under the GNU GPL V3 - see the [LICENSE.md](LICENSE.md) file for details
