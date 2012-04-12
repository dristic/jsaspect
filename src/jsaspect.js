/**
 * Copyright (c) 2012 Dan Ristic danr@exstoengine.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the 'Software'), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to 
 * do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or 
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
jsaspect = (function () {
  var aspects = {};
  
  return {
    define: function (name, aspect) {
      // Generate pointcuts.
      for(var key in aspect.pointcuts) {
        var cut = aspect.pointcuts[key],
            conditions = cut.conditions[0].split(' ');
        
        if(conditions[0] == 'call' && conditions[1] != null) {
          // Link with after/before/around.
          var i = 0
              ln = aspect.after[key].length;
          for(; i != ln; i++) {
            var obj = aspect.after[key][i];
            cut.scope[conditions[1]] = aspect.definition[obj.func];
          }
        }
      }
      
      // Define and store aspect object.
      
      // Clean up and return object.
    },
    
    getAspect: function (name) {
      return aspects[name];
    }
  };
})();