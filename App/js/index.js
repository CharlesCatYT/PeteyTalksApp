// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image4")
                .setLeft("1.5238095238095237em")
                .setTop("1.5238095238095237em")
                .setSrc("{/}hello.png")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setLeft("9.142857142857142em")
                .setTop("3.8095238095238093em")
                .setWidth("7.771428571428571em")
                .setHeight("6.552380952380952em")
                .setCaption("Petey Talks App")
            );
            
            append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"xui_ui_richeditor4")
                .setLeft("3.8095238095238093em")
                .setTop("9.142857142857142em")
                .setHeight("26em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("RichEditor")
                .setLabelHAlign("left")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput54")
                .setLeft("37.333333333333336em")
                .setTop("11.428571428571429em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Color Picker")
                .setType("color")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});