/**
 * @version 1.0.7787.32181
 * @copyright anton
 * @compiler Bridge.NET 17.9.11-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Assets.Scripts.TrackContentGenerationParams start.*/
    Bridge.define("Assets.Scripts.TrackContentGenerationParams", {
        fields: {
            generationParams: null,
            compiledData: null
        },
        ctors: {
            init: function () {
                this.generationParams = new Assets.Scripts.TrackContentGenerationParams.Params();
            }
        },
        methods: {
            /*Assets.Scripts.TrackContentGenerationParams.ReadGenerationParams start.*/
            ReadGenerationParams: function (configFile) {
                this.generationParams = Newtonsoft.Json.JsonConvert.DeserializeObject(configFile.text, Assets.Scripts.TrackContentGenerationParams.Params).$clone();
            },
            /*Assets.Scripts.TrackContentGenerationParams.ReadGenerationParams end.*/

            /*Assets.Scripts.TrackContentGenerationParams.CompileGenerationData start.*/
            CompileGenerationData: function (distance, rowLength, itemSize) {
                var $t, $t1, $t2;
                this.compiledData = new (System.Collections.Generic.List$1(Assets.Scripts.TrackContentGenerationParams.GeneratedRow)).ctor();
                var unfilledDistance = distance;
                var chosenPatternName = ($t = this.generationParams.patterns)[0].name;

                var patternNames = new (System.Collections.Generic.List$1(System.String)).ctor();
                $t1 = Bridge.getEnumerator(this.generationParams.patterns);
                try {
                    while ($t1.moveNext()) {
                        var pattern = $t1.Current.$clone();
                        patternNames.add(pattern.name);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }

                while (unfilledDistance > 0.0) {
                    var chosenPattern = this.GetPatternByName(chosenPatternName);
                    var compiledPattern = this.CompilePattern(chosenPattern.$clone(), rowLength, itemSize);
                    $t2 = Bridge.getEnumerator(compiledPattern);
                    try {
                        while ($t2.moveNext()) {
                            var newRow = $t2.Current.$clone();
                            unfilledDistance -= itemSize + newRow.offset;
                            this.compiledData.add(newRow.$clone());
                        }
                    } finally {
                        if (Bridge.is($t2, System.IDisposable)) {
                            $t2.System$IDisposable$Dispose();
                        }
                    }
                    chosenPatternName = this.ChooseNextPatternName(patternNames, chosenPattern.$clone(), this.generationParams.defaultWeight);
                }
            },
            /*Assets.Scripts.TrackContentGenerationParams.CompileGenerationData end.*/

            /*Assets.Scripts.TrackContentGenerationParams.CompilePattern start.*/
            CompilePattern: function (pattern, rowLenght, itemSize) {
                var $t;
                var rows = new (System.Collections.Generic.List$1(Assets.Scripts.TrackContentGenerationParams.GeneratedRow)).ctor();
                var repeats;
                if (System.String.contains(pattern.repeat,"-")) {
                    var minMax = System.String.split(pattern.repeat, [45].map(function (i) {{ return String.fromCharCode(i); }}));
                    var min = System.Int32.parse(minMax[0]);
                    var max = System.Int32.parse(minMax[1]);
                    repeats = UnityEngine.Random.Range(min, ((max + 1) | 0));
                } else {
                    repeats = System.Int32.parse(pattern.repeat);
                }

                for (var i = 0; i < repeats; i = (i + 1) | 0) {
                    $t = Bridge.getEnumerator(pattern.rows);
                    try {
                        while ($t.moveNext()) {
                            var symbolicRow = $t.Current;
                            var row = new Assets.Scripts.TrackContentGenerationParams.GeneratedRow();
                            row.offset = pattern.rowOffset;
                            row.items = new (System.Collections.Generic.List$1(Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem)).ctor();
                            // initial row filling (with intersections and right shift [0, rowLenght])
                            for (var j = 0; j < symbolicRow.length; j = (j + 1) | 0) {
                                if (symbolicRow.charCodeAt(j) !== 46) {
                                    var item = new Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem();
                                    if (symbolicRow.charCodeAt(j) === 79) {
                                        item.type = Assets.Scripts.TrackContentGenerationParams.ItemType.OBSTACLE;
                                    } else if (symbolicRow.charCodeAt(j) === 72) {
                                        item.type = Assets.Scripts.TrackContentGenerationParams.ItemType.HARD_OBSTACLE;
                                    } else if (symbolicRow.charCodeAt(j) === 66) {
                                        item.type = Assets.Scripts.TrackContentGenerationParams.ItemType.BONUS;
                                    }
                                    var randomShift = UnityEngine.Random.Range(((-pattern.randomization) | 0), pattern.randomization);
                                    item.position = rowLenght * ((((j + randomShift) | 0)) / symbolicRow.length) + itemSize / 2.0;
                                    row.items.add(item.$clone());
                                }
                            }
                            // spacing intersections
                            var intersectionTolerance = itemSize * 0.25;
                            for (var k = 0; k < row.items.Count; k = (k + 1) | 0) {
                                // intersection with left border
                                if ((k === 0 && row.items.getItem(k).$clone().position < itemSize / 2.0 - intersectionTolerance) || (k === ((row.items.Count - 1) | 0) && row.items.getItem(k).$clone().position > rowLenght - itemSize / 2.0 - intersectionTolerance)) {
                                    row.items.removeAt(k);
                                    k = (k - 1) | 0;
                                    continue;
                                } else if (k !== ((row.items.Count - 1) | 0) && row.items.getItem(((k + 1) | 0)).$clone().position - row.items.getItem(k).$clone().position < itemSize - intersectionTolerance) {
                                    if (row.items.getItem(((k + 1) | 0)).$clone().type !== Assets.Scripts.TrackContentGenerationParams.ItemType.BONUS) {
                                        row.items.removeAt(((k + 1) | 0));
                                    } else {
                                        row.items.removeAt(k);
                                    }
                                    k = (k - 1) | 0;
                                    continue;
                                }
                            }
                            // shift positions to [-rowLenght / 2, rowLenght / 2]
                            for (var helloImmutableKitty = 0; helloImmutableKitty < row.items.Count; helloImmutableKitty = (helloImmutableKitty + 1) | 0) {
                                var changingItem = row.items.getItem(helloImmutableKitty).$clone();
                                changingItem.position -= rowLenght / 2;
                                row.items.setItem(helloImmutableKitty, changingItem.$clone());
                            }
                            rows.add(row.$clone());
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
                return rows;
            },
            /*Assets.Scripts.TrackContentGenerationParams.CompilePattern end.*/

            /*Assets.Scripts.TrackContentGenerationParams.ChooseNextPatternName start.*/
            ChooseNextPatternName: function (names, chosingPattern, defaultValue) {
                var $t, $t1, $t2;
                var weightsDistribution = new (System.Collections.Generic.Dictionary$2(System.String,UnityEngine.Vector2Int)).ctor();
                var nameWeight;
                var currentWeightsSumm = 0;
                $t = Bridge.getEnumerator(names);
                try {
                    while ($t.moveNext()) {
                        var name = $t.Current;
                        nameWeight = defaultValue;
                        $t1 = Bridge.getEnumerator(chosingPattern.descendantWeights);
                        try {
                            while ($t1.moveNext()) {
                                var descendantWeight = $t1.Current.$clone();
                                if (System.String.equals(name, descendantWeight.pattern)) {
                                    nameWeight = descendantWeight.weight;
                                    break;
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                        var leftBorder = currentWeightsSumm;
                        var rightBorder = (currentWeightsSumm + nameWeight) | 0;
                        currentWeightsSumm = (currentWeightsSumm + nameWeight) | 0;
                        var interval = new UnityEngine.Vector2Int.$ctor1(leftBorder, rightBorder);
                        weightsDistribution.add(name, interval.$clone());
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var diceDecision = UnityEngine.Random.Range(0, currentWeightsSumm);
                var chosenPatternName = names.getItem(0);
                // DANGER! var usage
                // var means key-value of dictionary
                $t2 = Bridge.getEnumerator(weightsDistribution);
                try {
                    while ($t2.moveNext()) {
                        var pair = $t2.Current;
                        if (diceDecision >= pair.value.x && diceDecision < pair.value.y) {
                            chosenPatternName = pair.key;
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
                return chosenPatternName;
            },
            /*Assets.Scripts.TrackContentGenerationParams.ChooseNextPatternName end.*/

            /*Assets.Scripts.TrackContentGenerationParams.GetPatternByName start.*/
            GetPatternByName: function (patternName) {
                var $t, $t1;
                var chosenPattern = ($t = this.generationParams.patterns)[0].$clone();
                $t1 = Bridge.getEnumerator(this.generationParams.patterns);
                try {
                    while ($t1.moveNext()) {
                        var pattern = $t1.Current.$clone();
                        if (System.String.equals(patternName, pattern.name)) {
                            chosenPattern = pattern.$clone();
                            break;
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                return chosenPattern.$clone();
            },
            /*Assets.Scripts.TrackContentGenerationParams.GetPatternByName end.*/


        }
    });
    /*Assets.Scripts.TrackContentGenerationParams end.*/

    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow start.*/
    Bridge.define("Assets.Scripts.TrackContentGenerationParams.GeneratedRow", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Assets.Scripts.TrackContentGenerationParams.GeneratedRow(); }
            }
        },
        fields: {
            offset: 0,
            items: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([5407643933, this.offset, this.items]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Assets.Scripts.TrackContentGenerationParams.GeneratedRow)) {
                    return false;
                }
                return Bridge.equals(this.offset, o.offset) && Bridge.equals(this.items, o.items);
            },
            $clone: function (to) {
                var s = to || new Assets.Scripts.TrackContentGenerationParams.GeneratedRow();
                s.offset = this.offset;
                s.items = this.items;
                return s;
            }
        }
    });
    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow end.*/

    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow+GeneratedItem start.*/
    Bridge.define("Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem(); }
            }
        },
        fields: {
            type: 0,
            position: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([5105979530, this.type, this.position]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem)) {
                    return false;
                }
                return Bridge.equals(this.type, o.type) && Bridge.equals(this.position, o.position);
            },
            $clone: function (to) {
                var s = to || new Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem();
                s.type = this.type;
                s.position = this.position;
                return s;
            }
        }
    });
    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow+GeneratedItem end.*/

    /*Assets.Scripts.TrackContentGenerationParams+ItemType start.*/
    Bridge.define("Assets.Scripts.TrackContentGenerationParams.ItemType", {
        $kind: "nested enum",
        statics: {
            fields: {
                OBSTACLE: 0,
                HARD_OBSTACLE: 1,
                BONUS: 2
            }
        }
    });
    /*Assets.Scripts.TrackContentGenerationParams+ItemType end.*/

    /*Assets.Scripts.TrackContentGenerationParams+Params start.*/
    Bridge.define("Assets.Scripts.TrackContentGenerationParams.Params", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Assets.Scripts.TrackContentGenerationParams.Params(); }
            }
        },
        fields: {
            patterns: null,
            defaultWeight: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1634915517, this.patterns, this.defaultWeight]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Assets.Scripts.TrackContentGenerationParams.Params)) {
                    return false;
                }
                return Bridge.equals(this.patterns, o.patterns) && Bridge.equals(this.defaultWeight, o.defaultWeight);
            },
            $clone: function (to) {
                var s = to || new Assets.Scripts.TrackContentGenerationParams.Params();
                s.patterns = this.patterns;
                s.defaultWeight = this.defaultWeight;
                return s;
            }
        }
    });
    /*Assets.Scripts.TrackContentGenerationParams+Params end.*/

    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern start.*/
    Bridge.define("Assets.Scripts.TrackContentGenerationParams.Params.Pattern", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Assets.Scripts.TrackContentGenerationParams.Params.Pattern(); }
            }
        },
        fields: {
            name: null,
            rowOffset: 0,
            repeat: null,
            randomization: 0,
            rows: null,
            descendantWeights: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1961022389, this.name, this.rowOffset, this.repeat, this.randomization, this.rows, this.descendantWeights]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Assets.Scripts.TrackContentGenerationParams.Params.Pattern)) {
                    return false;
                }
                return Bridge.equals(this.name, o.name) && Bridge.equals(this.rowOffset, o.rowOffset) && Bridge.equals(this.repeat, o.repeat) && Bridge.equals(this.randomization, o.randomization) && Bridge.equals(this.rows, o.rows) && Bridge.equals(this.descendantWeights, o.descendantWeights);
            },
            $clone: function (to) {
                var s = to || new Assets.Scripts.TrackContentGenerationParams.Params.Pattern();
                s.name = this.name;
                s.rowOffset = this.rowOffset;
                s.repeat = this.repeat;
                s.randomization = this.randomization;
                s.rows = this.rows;
                s.descendantWeights = this.descendantWeights;
                return s;
            }
        }
    });
    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern end.*/

    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern+DescendantWeight start.*/
    Bridge.define("Assets.Scripts.TrackContentGenerationParams.Params.Pattern.DescendantWeight", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Assets.Scripts.TrackContentGenerationParams.Params.Pattern.DescendantWeight(); }
            }
        },
        fields: {
            pattern: null,
            weight: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([6955708288, this.pattern, this.weight]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Assets.Scripts.TrackContentGenerationParams.Params.Pattern.DescendantWeight)) {
                    return false;
                }
                return Bridge.equals(this.pattern, o.pattern) && Bridge.equals(this.weight, o.weight);
            },
            $clone: function (to) {
                var s = to || new Assets.Scripts.TrackContentGenerationParams.Params.Pattern.DescendantWeight();
                s.pattern = this.pattern;
                s.weight = this.weight;
                return s;
            }
        }
    });
    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern+DescendantWeight end.*/

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: "enum",
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*BlobShadowMovement start.*/
    Bridge.define("BlobShadowMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Target: null,
            Offset: null,
            _Position: null
        },
        ctors: {
            init: function () {
                this.Offset = new UnityEngine.Vector3();
                this._Position = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*BlobShadowMovement.Update start.*/
            Update: function () {
                if (UnityEngine.Component.op_Equality(this.Target, null)) {
                    return;
                }

                this._Position = this.Target.position.$clone().add( (this.Target.forward.$clone().scale( this.Offset.z )) );
                this._Position.x += this.Offset.x;
                this._Position.y = this.Offset.y;

                this.transform.position = this._Position.$clone();
                this.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( -90, this.Target.rotation.getPositiveEulerAngles().y, 0 );
            },
            /*BlobShadowMovement.Update end.*/


        }
    });
    /*BlobShadowMovement end.*/

    /*Boosts start.*/
    Bridge.define("Boosts", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Data: null,
            kBoostDuration: 0,
            OnBoostAdded: null,
            OnBoostRemoved: null
        },
        ctors: {
            init: function () {
                this.Data = new (System.Collections.Generic.List$1(Boosts.DataItem)).ctor();
                this.kBoostDuration = 10;
            }
        },
        methods: {
            /*Boosts.Activate start.*/
            Activate: function (kind) {
                var $t;
                var dataItem = this.Data.Find(function (w) {
                    return w.Kind === kind;
                });
                if (dataItem == null) {
                    this.Data.add(($t = new Boosts.DataItem(), $t.Kind = kind, $t.TimeLeft = this.kBoostDuration, $t));
                } else {
                    dataItem.TimeLeft += this.kBoostDuration;
                }
                this.OnBoostAdded(kind);
            },
            /*Boosts.Activate end.*/

            /*Boosts.Deactivate start.*/
            Deactivate: function (kind) {
                var dataItem = this.Data.Find(function (w) {
                    return w.Kind === kind;
                });
                if (dataItem != null) {
                    this.Data.remove(dataItem);
                }

                this.OnBoostRemoved(kind);
            },
            /*Boosts.Deactivate end.*/

            /*Boosts.Start start.*/
            Start: function () {

            },
            /*Boosts.Start end.*/

            /*Boosts.Update start.*/
            Update: function () {
                var $t, $t1;
                $t = Bridge.getEnumerator(this.Data);
                try {
                    while ($t.moveNext()) {
                        var dataItem = $t.Current;
                        dataItem.TimeLeft -= UnityEngine.Time.deltaTime;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var dataItemsToDelete = this.Data.FindAll(function (w) {
                    return w.TimeLeft <= 0.0;
                });
                $t1 = Bridge.getEnumerator(dataItemsToDelete);
                try {
                    while ($t1.moveNext()) {
                        var dataItem1 = $t1.Current;
                        this.OnBoostRemoved(dataItem1.Kind);
                        this.Data.remove(dataItem1);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*Boosts.Update end.*/


        }
    });
    /*Boosts end.*/

    /*Boosts+DataItem start.*/
    Bridge.define("Boosts.DataItem", {
        $kind: "nested class",
        fields: {
            Kind: 0,
            TimeLeft: 0
        }
    });
    /*Boosts+DataItem end.*/

    /*BoostsPanelCtrl start.*/
    Bridge.define("BoostsPanelCtrl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            boosts: null,
            wgtBoostPrefab: null
        },
        methods: {
            /*BoostsPanelCtrl.Start start.*/
            Start: function () {
                var $t;
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.boosts.OnBoostAdded = Bridge.fn.combine(this.boosts.OnBoostAdded, Bridge.fn.cacheBind(this, this.OnBoostAdded));
                this.boosts.OnBoostRemoved = Bridge.fn.combine(this.boosts.OnBoostRemoved, Bridge.fn.cacheBind(this, this.OnBoostRemoved));
            },
            /*BoostsPanelCtrl.Start end.*/

            /*BoostsPanelCtrl.Update start.*/
            Update: function () {

            },
            /*BoostsPanelCtrl.Update end.*/

            /*BoostsPanelCtrl.OnBoostAdded start.*/
            OnBoostAdded: function (kind) {
                this.RecreateBoostWidgets();
            },
            /*BoostsPanelCtrl.OnBoostAdded end.*/

            /*BoostsPanelCtrl.OnBoostRemoved start.*/
            OnBoostRemoved: function (kind) {
                this.RecreateBoostWidgets();
            },
            /*BoostsPanelCtrl.OnBoostRemoved end.*/

            /*BoostsPanelCtrl.RecreateBoostWidgets start.*/
            RecreateBoostWidgets: function () {
                var $t, $t1;
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                $t1 = Bridge.getEnumerator(this.boosts.Data);
                try {
                    while ($t1.moveNext()) {
                        var dataItem = $t1.Current;
                        var wgtBoost = UnityEngine.Object.Instantiate$1(UnityEngine.Transform, this.wgtBoostPrefab, this.transform, false);
                        wgtBoost.GetComponent(UIActiveBoost).SetKind(dataItem.Kind);
                        wgtBoost.GetComponent(UIActiveBoost).SetTimeLeft(dataItem.TimeLeft);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*BoostsPanelCtrl.RecreateBoostWidgets end.*/


        }
    });
    /*BoostsPanelCtrl end.*/

    /*Bot start.*/
    Bridge.define("Bot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            RaceCar: null,
            SplineMove: null,
            BotWheels: null
        },
        methods: {
            /*Bot.StartMove start.*/
            StartMove: function () {
                this.SplineMove.StartMove();
                this.BotWheels.IsRotating = true;
            },
            /*Bot.StartMove end.*/

            /*Bot.StopMove start.*/
            StopMove: function () {
                this.SplineMove.StartMove();
                this.SplineMove.Stop();
                this.BotWheels.IsRotating = false;
            },
            /*Bot.StopMove end.*/


        }
    });
    /*Bot end.*/

    /*BotWheels start.*/
    Bridge.define("BotWheels", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            RotationSpeed: 0,
            IsRotating: false,
            Wheels: null
        },
        ctors: {
            init: function () {
                this.RotationSpeed = 60;
                this.IsRotating = false;
            }
        },
        methods: {
            /*BotWheels.Start start.*/
            Start: function () {

            },
            /*BotWheels.Start end.*/

            /*BotWheels.Update start.*/
            Update: function () {
                var $t;
                if (!this.IsRotating) {
                    return;
                }

                $t = Bridge.getEnumerator(this.Wheels);
                try {
                    while ($t.moveNext()) {
                        var w = $t.Current;
                        w.transform.Rotate$1(pc.Vec3.RIGHT.clone(), this.RotationSpeed * UnityEngine.Time.deltaTime);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BotWheels.Update end.*/


        }
    });
    /*BotWheels end.*/

    /*ButtonInput start.*/
    Bridge.define("ButtonInput", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            IsInteractable: false,
            OnPointerDownEvent: null,
            OnPointerUpEvent: null,
            _RectTransform: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.IsInteractable = true;
            }
        },
        methods: {
            /*ButtonInput.Start start.*/
            Start: function () {
                this._RectTransform = this.GetComponent(UnityEngine.RectTransform);
            },
            /*ButtonInput.Start end.*/

            /*ButtonInput.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                if (!this.IsInteractable) {
                    return;
                }
                !Bridge.staticEquals(this.OnPointerDownEvent, null) ? this.OnPointerDownEvent() : null;
            },
            /*ButtonInput.OnPointerDown end.*/

            /*ButtonInput.OnPointerUp start.*/
            OnPointerUp: function (eventData) {

                if (!this.IsInteractable) {
                    return;
                }

                !Bridge.staticEquals(this.OnPointerUpEvent, null) ? this.OnPointerUpEvent() : null;
            },
            /*ButtonInput.OnPointerUp end.*/


        }
    });
    /*ButtonInput end.*/

    /*CameraFollower start.*/
    Bridge.define("CameraFollower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Target: null,
            PositionOffset: null,
            RotationOffset: null,
            CameraSpeed: 0
        },
        ctors: {
            init: function () {
                this.PositionOffset = new UnityEngine.Vector3();
                this.RotationOffset = new UnityEngine.Vector3();
                this.CameraSpeed = 0.1;
            }
        },
        methods: {
            /*CameraFollower.FixedUpdate start.*/
            FixedUpdate: function () {

                //transform.position = Target.position + PositionOffset;

                var finalPosition = this.Target.position.$clone().add( this.PositionOffset );
                var lerpPosition = new pc.Vec3().lerp( this.transform.position, finalPosition, this.CameraSpeed );
                this.transform.position = lerpPosition.$clone();

                //transform.LookAt(Target);
                //transform.rotation = Quaternion.Euler(Target.rotation.eulerAngles + RotationOffset);

            },
            /*CameraFollower.FixedUpdate end.*/


        }
    });
    /*CameraFollower end.*/

    /*CameraInputDemo start.*/
    
    Bridge.define("CameraInputDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            infoText: null,
            myMove: null
        },
        ctors: {
            init: function () {
                this.infoText = "Welcome to this customized input example";
            }
        },
        methods: {
            /*CameraInputDemo.Start start.*/
            Start: function () {
                this.myMove = this.gameObject.GetComponent(SWS.splineMove);
                this.myMove.StartMove();
                this.myMove.Pause();
            },
            /*CameraInputDemo.Start end.*/

            /*CameraInputDemo.Update start.*/
            Update: function () {
                //do nothing in moving state
                if (!DG.Tweening.TweenExtensions.IsActive(this.myMove.tween) || DG.Tweening.TweenExtensions.IsPlaying(this.myMove.tween)) {
                    return;
                }

                //on up arrow, move forwards
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.UpArrow)) {
                    this.myMove.Resume();
                }
            },
            /*CameraInputDemo.Update end.*/

            /*CameraInputDemo.OnGUI start.*/
            OnGUI: function () {
                //do nothing in moving state
                if (DG.Tweening.TweenExtensions.IsActive(this.myMove.tween) && DG.Tweening.TweenExtensions.IsPlaying(this.myMove.tween)) {
                    return;
                }

                //draw top right box with info text received from messages
                //GUI.Box(new Rect(Screen.width - 150, Screen.height / 2, 150, 100), "");
                //Rect infoPos = new Rect(Screen.width - 130, Screen.height / 2 + 10, 110, 90);
                //GUI.Label(infoPos, infoText);
            },
            /*CameraInputDemo.OnGUI end.*/

            /*CameraInputDemo.ShowInformation start.*/
            
            ShowInformation: function (text) {
                this.infoText = text;
            },
            /*CameraInputDemo.ShowInformation end.*/


        }
    });
    /*CameraInputDemo end.*/

    /*CarController start.*/
    Bridge.define("CarController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                k_ReversingThreshold: 0,
                NoOfGears: 0
            },
            ctors: {
                init: function () {
                    this.k_ReversingThreshold = 0.01;
                    this.NoOfGears = 5;
                }
            },
            methods: {
                /*CarController.CurveFactor:static start.*/
                CurveFactor: function (factor) {
                    return 1 - (1 - factor) * (1 - factor);
                },
                /*CarController.CurveFactor:static end.*/

                /*CarController.ULerp:static start.*/
                ULerp: function (from, to, value) {
                    return (1.0 - value) * from + value * to;
                },
                /*CarController.ULerp:static end.*/


            }
        },
        fields: {
            m_CarDriveType: 0,
            m_WheelColliders: null,
            m_WheelMeshes: null,
            m_WheelEffects: null,
            m_CentreOfMassOffset: null,
            m_MaximumSteerAngle: 0,
            m_SteerHelper: 0,
            m_TractionControl: 0,
            m_FullTorqueOverAllWheels: 0,
            TorqueMultiplier: 0,
            m_ReverseTorque: 0,
            m_MaxHandbrakeTorque: 0,
            m_Downforce: 0,
            m_SpeedType: 0,
            m_Topspeed: 0,
            m_RevRangeBoundary: 0,
            m_SlipLimit: 0,
            m_BrakeTorque: 0,
            m_WheelMeshLocalRotations: null,
            m_Prevpos: null,
            m_Pos: null,
            m_SteerAngle: 0,
            m_GearNum: 0,
            m_GearFactor: 0,
            m_OldRotation: 0,
            m_CurrentTorque: 0,
            m_Rigidbody: null,
            Skidding: false,
            BrakeInput: 0,
            Revs: 0,
            AccelInput: 0
        },
        props: {
            GearNum: {
                get: function () {
                    return this.m_GearNum;
                },
                set: function (value) {
                    this.m_GearNum = value;
                }
            },
            CurrentSteerAngle: {
                get: function () {
                    return this.m_SteerAngle;
                }
            },
            CurrentSpeed: {
                get: function () {
                    return this.m_Rigidbody.velocity.length() * 2.23693633;
                }
            },
            MaxSpeed: {
                get: function () {
                    return this.m_Topspeed;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_CentreOfMassOffset = new UnityEngine.Vector3();
                this.m_Prevpos = new UnityEngine.Vector3();
                this.m_Pos = new UnityEngine.Vector3();
                this.m_CarDriveType = CarDriveType.FourWheelDrive;
                this.m_WheelColliders = System.Array.init(4, null, UnityEngine.WheelCollider);
                this.m_WheelMeshes = System.Array.init(4, null, UnityEngine.GameObject);
                this.m_WheelEffects = System.Array.init(4, null, WheelEffects);
                this.TorqueMultiplier = 10;
                this.m_Downforce = 100.0;
                this.m_Topspeed = 200;
                this.m_RevRangeBoundary = 1.0;
            }
        },
        methods: {
            /*CarController.Start start.*/
            Start: function () {
                this.m_Rigidbody = this.GetComponent(UnityEngine.Rigidbody);

                this.m_WheelMeshLocalRotations = System.Array.init(4, function (){
                    return new UnityEngine.Quaternion();
                }, UnityEngine.Quaternion);
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    this.m_WheelMeshLocalRotations[i] = this.m_WheelMeshes[i].transform.localRotation.$clone();
                }
                this.m_Rigidbody.centerOfMass = this.m_CentreOfMassOffset.$clone();

                this.m_MaxHandbrakeTorque = 3.40282347E+38;

                this.m_CurrentTorque = this.m_FullTorqueOverAllWheels - (this.m_TractionControl * this.m_FullTorqueOverAllWheels);

            },
            /*CarController.Start end.*/

            /*CarController.RotateWheels start.*/
            RotateWheels: function (distance, isTurningLeft, isTurningRight) {
                var turnAngle = 0.0;
                if (isTurningLeft) {
                    turnAngle = -45.0;
                } else if (isTurningRight) {
                    turnAngle = 45.0;
                }
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    var front = i < 2;
                    var eulerAngles = new pc.Vec3( distance * (front ? 24.0 : 12.0), front ? turnAngle : 0.0, 0.0 );
                    this.m_WheelMeshes[i].transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( eulerAngles.x, eulerAngles.y, eulerAngles.z );
                }
            },
            /*CarController.RotateWheels end.*/

            /*CarController.GearChanging start.*/
            GearChanging: function () {
                var f = Math.abs(this.CurrentSpeed / this.MaxSpeed);
                var upgearlimit = (1 / CarController.NoOfGears) * (((this.m_GearNum + 1) | 0));
                var downgearlimit = (1 / CarController.NoOfGears) * this.m_GearNum;

                if (this.m_GearNum > 0 && f < downgearlimit) {
                    this.m_GearNum = (this.m_GearNum - 1) | 0;
                }

                if (f > upgearlimit && (this.m_GearNum < (((CarController.NoOfGears - 1) | 0)))) {
                    this.m_GearNum = (this.m_GearNum + 1) | 0;
                }
            },
            /*CarController.GearChanging end.*/

            /*CarController.CalculateGearFactor start.*/
            CalculateGearFactor: function () {
                var $t, $t1;
                var f = (1 / CarController.NoOfGears);
                // gear factor is a normalised representation of the current speed within the current gear's range of speeds.
                // We smooth towards the 'target' gear factor, so that revs don't instantly snap up or down when changing gear.
                var targetGearFactor = ($t = f * (((this.m_GearNum + 1) | 0)), $t1 = f * this.m_GearNum, ( $t - $t1 ) === 0 ? 0 : ( ((Math.abs(this.CurrentSpeed / this.MaxSpeed) - $t1) / ($t - $t1)) ));
                this.m_GearFactor = pc.math.lerp(this.m_GearFactor, targetGearFactor, UnityEngine.Time.deltaTime * 5.0);
            },
            /*CarController.CalculateGearFactor end.*/

            /*CarController.CalculateRevs start.*/
            CalculateRevs: function () {
                // calculate engine revs (for display / sound)
                // (this is done in retrospect - revs are not used in force/power calculations)
                this.CalculateGearFactor();
                var gearNumFactor = this.m_GearNum / CarController.NoOfGears;
                var revsRangeMin = CarController.ULerp(0.0, this.m_RevRangeBoundary, CarController.CurveFactor(gearNumFactor));
                var revsRangeMax = CarController.ULerp(this.m_RevRangeBoundary, 1.0, gearNumFactor);
                this.Revs = CarController.ULerp(revsRangeMin, revsRangeMax, this.m_GearFactor);
            },
            /*CarController.CalculateRevs end.*/

            /*CarController.Move start.*/
            Move: function (steering, accel, footbrake, handbrake) {
                if (UnityEngine.GameObject.op_Equality(this.m_WheelMeshes[0], null)) {
                    var justWheelMeshes = this.gameObject.GetComponentInChildren(JustWheelMeshes);
                    if (UnityEngine.MonoBehaviour.op_Inequality(justWheelMeshes, null)) {
                        for (var i = 0; i < 4; i = (i + 1) | 0) {
                            this.m_WheelMeshes[i] = justWheelMeshes.m_WheelMeshes[i];
                        }
                    }
                }
                for (var i1 = 0; i1 < 4; i1 = (i1 + 1) | 0) {
                    var quat = { v : new UnityEngine.Quaternion() };
                    var position = { v : new UnityEngine.Vector3() };
                    this.m_WheelColliders[i1].GetWorldPose(position, quat);
                    //m_WheelMeshes[i].transform.position = position;
                    this.m_WheelMeshes[i1].transform.rotation = quat.v.$clone();
                }

                //clamp input values
                steering = Math.max(-1, Math.min(steering, 1));
                this.AccelInput = (accel = Math.max(0, Math.min(accel, 1)));
                this.BrakeInput = (footbrake = -1 * Math.max(-1, Math.min(footbrake, 0)));
                handbrake = Math.max(0, Math.min(handbrake, 1));

                //Set the steer on the front wheels.
                //Assuming that wheels 0 and 1 are the front wheels.
                this.m_SteerAngle = steering * this.m_MaximumSteerAngle;
                this.m_WheelColliders[0].steerAngle = this.m_SteerAngle;
                this.m_WheelColliders[1].steerAngle = this.m_SteerAngle;

                this.SteerHelper();
                this.ApplyDrive(accel, footbrake);
                this.CapSpeed();

                //Set the handbrake.
                //Assuming that wheels 2 and 3 are the rear wheels.
                if (handbrake > 0.0) {
                    var hbTorque = handbrake * this.m_MaxHandbrakeTorque;
                    this.m_WheelColliders[2].brakeTorque = hbTorque;
                    this.m_WheelColliders[3].brakeTorque = hbTorque;
                }


                this.CalculateRevs();
                this.GearChanging();

                this.AddDownForce();
                this.CheckForWheelSpin();
                this.TractionControl();
            },
            /*CarController.Move end.*/

            /*CarController.CapSpeed start.*/
            CapSpeed: function () {
                var speed = this.m_Rigidbody.velocity.length();
                switch (this.m_SpeedType) {
                    case SpeedType.MPH: 
                        speed *= 2.23693633;
                        if (speed > this.m_Topspeed) {
                            this.m_Rigidbody.velocity = this.m_Rigidbody.velocity.clone().normalize().$clone().scale( (this.m_Topspeed / 2.23693633) );
                        }
                        break;
                    case SpeedType.KPH: 
                        speed *= 3.6;
                        if (speed > this.m_Topspeed) {
                            this.m_Rigidbody.velocity = this.m_Rigidbody.velocity.clone().normalize().$clone().scale( (this.m_Topspeed / 3.6) );
                        }
                        break;
                }
            },
            /*CarController.CapSpeed end.*/

            /*CarController.ApplyDrive start.*/
            ApplyDrive: function (accel, footbrake) {
                var thrustTorque;
                switch (this.m_CarDriveType) {
                    case CarDriveType.FourWheelDrive: 
                        thrustTorque = accel * (this.m_CurrentTorque); //4f);
                        for (var i = 0; i < 4; i = (i + 1) | 0) {
                            this.m_WheelColliders[i].motorTorque = thrustTorque;
                        }
                        break;
                    case CarDriveType.FrontWheelDrive: 
                        thrustTorque = accel * (this.m_CurrentTorque / 2.0);
                        this.m_WheelColliders[0].motorTorque = (this.m_WheelColliders[1].motorTorque = thrustTorque, thrustTorque);
                        break;
                    case CarDriveType.RearWheelDrive: 
                        thrustTorque = accel * (this.m_CurrentTorque / 2.0);
                        this.m_WheelColliders[2].motorTorque = (this.m_WheelColliders[3].motorTorque = thrustTorque, thrustTorque);
                        break;
                }

                for (var i1 = 0; i1 < 4; i1 = (i1 + 1) | 0) {
                    if (this.CurrentSpeed > 5 && Math.acos( pc.math.clamp( this.transform.forward.clone().normalize().dot( this.m_Rigidbody.velocity.clone().normalize() ), -1, 1 ) ) * pc.math.RAD_TO_DEG < 50.0) {
                        this.m_WheelColliders[i1].brakeTorque = this.m_BrakeTorque * footbrake;
                    } else if (footbrake > 0) {
                        this.m_WheelColliders[i1].brakeTorque = 0.0;
                        this.m_WheelColliders[i1].motorTorque = -this.m_ReverseTorque * footbrake;
                    }
                }
            },
            /*CarController.ApplyDrive end.*/

            /*CarController.SteerHelper start.*/
            SteerHelper: function () {
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    var wheelhit = { v : new UnityEngine.WheelHit() };
                    this.m_WheelColliders[i].GetGroundHit(wheelhit);
                    if (pc.Vec3.equals( wheelhit.v.normal, pc.Vec3.ZERO.clone() )) {
                        return;
                    } // wheels arent on the ground so dont realign the rigidbody velocity
                }

                // this if is needed to avoid gimbal lock problems that will make the car suddenly shift direction
                if (Math.abs(this.m_OldRotation - this.transform.eulerAngles.y) < 10.0) {
                    var turnadjust = (this.transform.eulerAngles.y - this.m_OldRotation) * this.m_SteerHelper;
                    var velRotation = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), turnadjust );
                    this.m_Rigidbody.velocity = velRotation.transformVector( this.m_Rigidbody.velocity );
                }
                this.m_OldRotation = this.transform.eulerAngles.y;
            },
            /*CarController.SteerHelper end.*/

            /*CarController.RemoveTorque start.*/
            RemoveTorque: function () {
                if (this.m_WheelColliders[0].motorTorque < 0) {
                    for (var i = 0; i < 4; i = (i + 1) | 0) {
                        this.m_WheelColliders[i].brakeTorque = 0.0;
                        this.m_WheelColliders[i].motorTorque = 0;
                    }
                }
            },
            /*CarController.RemoveTorque end.*/

            /*CarController.AddDownForce start.*/
            AddDownForce: function () {
                this.m_Rigidbody.AddForce$1(this.transform.up.$clone().scale( -1 ).scale( this.m_Downforce ).scale( this.m_Rigidbody.velocity.length() ));
            },
            /*CarController.AddDownForce end.*/

            /*CarController.CheckForWheelSpin start.*/
            CheckForWheelSpin: function () {
                // loop through all wheels
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    var wheelHit = { v : new UnityEngine.WheelHit() };
                    this.m_WheelColliders[i].GetGroundHit(wheelHit);

                    // is the tire slipping above the given threshhold
                    if (Math.abs(wheelHit.v.forwardSlip) >= this.m_SlipLimit || Math.abs(wheelHit.v.sidewaysSlip) >= this.m_SlipLimit) {
                        this.m_WheelEffects[i].EmitTyreSmoke();

                        // avoiding all four tires screeching at the same time
                        // if they do it can lead to some strange audio artefacts
                        if (!this.AnySkidSoundPlaying()) {
                            this.m_WheelEffects[i].PlayAudio();
                        }
                        continue;
                    }

                    // if it wasnt slipping stop all the audio
                    if (this.m_WheelEffects[i].PlayingAudio) {
                        this.m_WheelEffects[i].StopAudio();
                    }
                    // end the trail generation
                    this.m_WheelEffects[i].EndSkidTrail();
                }
            },
            /*CarController.CheckForWheelSpin end.*/

            /*CarController.TractionControl start.*/
            TractionControl: function () {
                var wheelHit = { v : new UnityEngine.WheelHit() };
                switch (this.m_CarDriveType) {
                    case CarDriveType.FourWheelDrive: 
                        // loop through all wheels
                        for (var i = 0; i < 4; i = (i + 1) | 0) {
                            this.m_WheelColliders[i].GetGroundHit(wheelHit);

                            this.AdjustTorque(wheelHit.v.forwardSlip);
                        }
                        break;
                    case CarDriveType.RearWheelDrive: 
                        this.m_WheelColliders[2].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        this.m_WheelColliders[3].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        break;
                    case CarDriveType.FrontWheelDrive: 
                        this.m_WheelColliders[0].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        this.m_WheelColliders[1].GetGroundHit(wheelHit);
                        this.AdjustTorque(wheelHit.v.forwardSlip);
                        break;
                }
            },
            /*CarController.TractionControl end.*/

            /*CarController.AdjustTorque start.*/
            AdjustTorque: function (forwardSlip) {
                if (forwardSlip >= this.m_SlipLimit && this.m_CurrentTorque >= 0) {
                    this.m_CurrentTorque -= this.TorqueMultiplier * this.m_TractionControl;
                } else {
                    this.m_CurrentTorque += this.TorqueMultiplier * this.m_TractionControl;
                    if (this.m_CurrentTorque > this.m_FullTorqueOverAllWheels) {
                        this.m_CurrentTorque = this.m_FullTorqueOverAllWheels;
                    }
                }
            },
            /*CarController.AdjustTorque end.*/

            /*CarController.RemoveBrakeTorque start.*/
            RemoveBrakeTorque: function () {
                this.m_WheelColliders[2].brakeTorque = 0;
                this.m_WheelColliders[3].brakeTorque = 0;
            },
            /*CarController.RemoveBrakeTorque end.*/

            /*CarController.AnySkidSoundPlaying start.*/
            AnySkidSoundPlaying: function () {
                for (var i = 0; i < 4; i = (i + 1) | 0) {
                    if (this.m_WheelEffects[i].PlayingAudio) {
                        return true;
                    }
                }
                return false;
            },
            /*CarController.AnySkidSoundPlaying end.*/


        }
    });
    /*CarController end.*/

    /*CarDriveType start.*/
    Bridge.define("CarDriveType", {
        $kind: "enum",
        statics: {
            fields: {
                FrontWheelDrive: 0,
                RearWheelDrive: 1,
                FourWheelDrive: 2
            }
        }
    });
    /*CarDriveType end.*/

    /*CarTrigger start.*/
    Bridge.define("CarTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            OnTriggerEnterEvent: null,
            OnTriggerStayEvent: null,
            OnTriggerExitEvent: null
        },
        methods: {
            /*CarTrigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (UnityEngine.MonoBehaviour.op_Equality(other.gameObject.GetComponent(CarController), null)) {
                    return;
                }

                this.OnTriggerEnterEvent.Invoke();
            },
            /*CarTrigger.OnTriggerEnter end.*/

            /*CarTrigger.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
                if (UnityEngine.MonoBehaviour.op_Equality(other.gameObject.GetComponent(CarController), null)) {
                    return;
                }

                this.OnTriggerStayEvent.Invoke();
            },
            /*CarTrigger.OnTriggerStay end.*/

            /*CarTrigger.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
                if (UnityEngine.MonoBehaviour.op_Equality(other.gameObject.GetComponent(CarController), null)) {
                    return;
                }

                this.OnTriggerExitEvent.Invoke();
            },
            /*CarTrigger.OnTriggerExit end.*/


        }
    });
    /*CarTrigger end.*/

    /*CarUserControl start.*/
    Bridge.define("CarUserControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mCar: null,
            CanMove: false,
            _Handbrake: false,
            pathCreator: null,
            labRightOffset: 0,
            labRightOffsetSpeed: 0,
            maxOffsetFromCenter: 0,
            labTrackProgress: 0,
            labSpeed: 0,
            labMaxSpeed: 0,
            labPathLength: 0,
            playerCarrot: null,
            farPointInDirectionOfView: null,
            carBody: null,
            collisionParticlesLeft: null,
            collisionParticlesRight: null,
            ghostWriter: null,
            isBtnLeftPressed: false,
            isBtnRightPressed: false,
            isTurningLeft: false,
            isTurningRight: false,
            turningAngle: 0,
            turningSpeed: 0,
            maxTurningValue: 0,
            wasStartRecorded: false
        },
        props: {
            Speed: {
                get: function () {
                    return this.labSpeed;
                }
            },
            MaxSpeed: {
                get: function () {
                    return this.labMaxSpeed;
                }
            },
            TrackX: {
                get: function () {
                    return this.labTrackProgress;
                }
            },
            LabRightOffset: {
                get: function () {
                    return this.labRightOffset;
                }
            }
        },
        ctors: {
            init: function () {
                this._Handbrake = false;
                this.labRightOffset = 0.0;
                this.labRightOffsetSpeed = 8.0;
                this.maxOffsetFromCenter = 7.0;
                this.labTrackProgress = 0.0;
                this.labSpeed = 0.0;
                this.labMaxSpeed = 10.0;
                this.labPathLength = 0.0;
                this.isBtnLeftPressed = false;
                this.isBtnRightPressed = false;
                this.isTurningLeft = false;
                this.isTurningRight = false;
                this.turningAngle = 0.0;
                this.turningSpeed = 100.0;
                this.maxTurningValue = 30.0;
                this.wasStartRecorded = false;
            }
        },
        methods: {
            /*CarUserControl.CheatGoToFinish start.*/
            CheatGoToFinish: function () {
                this.labTrackProgress = this.labPathLength - 5.0;
            },
            /*CarUserControl.CheatGoToFinish end.*/

            /*CarUserControl.CheatSetMaxSpeed start.*/
            CheatSetMaxSpeed: function (value) {
                this.labMaxSpeed = value;
            },
            /*CarUserControl.CheatSetMaxSpeed end.*/

            /*CarUserControl.Start start.*/
            Start: function () {
                // get the car controller
                this.mCar = this.GetComponent(CarController);

                this.labPathLength = this.pathCreator.path.length;
                this.labTrackProgress = 0.0;

                var healthController = this.GetComponent(HealthController);
                healthController.OnDamaged = Bridge.fn.combine(healthController.OnDamaged, Bridge.fn.cacheBind(this, this.OnDamaged));

                this.ghostWriter = UnityEngine.GameObject.Find("GameManager").GetComponentInChildren(GhostWriter, true);
                this.ghostWriter.carUserControl = this;
            },
            /*CarUserControl.Start end.*/

            /*CarUserControl.TurnLeft start.*/
            TurnLeft: function () {
                this.isBtnLeftPressed = true;
            },
            /*CarUserControl.TurnLeft end.*/

            /*CarUserControl.CancelTurnLeft start.*/
            CancelTurnLeft: function () {
                this.isBtnLeftPressed = false;
            },
            /*CarUserControl.CancelTurnLeft end.*/

            /*CarUserControl.TurnRight start.*/
            TurnRight: function () {
                this.isBtnRightPressed = true;
            },
            /*CarUserControl.TurnRight end.*/

            /*CarUserControl.CancelTurnRight start.*/
            CancelTurnRight: function () {
                this.isBtnRightPressed = false;
            },
            /*CarUserControl.CancelTurnRight end.*/

            /*CarUserControl.IsRubbingFence start.*/
            IsRubbingFence: function () {
                return Math.abs(this.labRightOffset) >= this.maxOffsetFromCenter - Number.EPSILON;
            },
            /*CarUserControl.IsRubbingFence end.*/

            /*CarUserControl.OnDamaged start.*/
            OnDamaged: function () {
                this.labSpeed = UnityEngine.Mathf.Max(this.labSpeed - 5.0, this.labSpeed / 2.0);
                this.labSpeed = Math.max(0.0, Math.min(this.labSpeed, this.labMaxSpeed));
                this.ghostWriter.AddEntry(GhostWriter.EntryKind.Collision);
            },
            /*CarUserControl.OnDamaged end.*/

            /*CarUserControl.FixedUpdate start.*/
            FixedUpdate: function () {
                if (!this.wasStartRecorded) {
                    this.ghostWriter.AddEntry(GhostWriter.EntryKind.Start);
                    this.wasStartRecorded = true;
                }

                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.A) || this.isBtnLeftPressed) {
                    if (!this.isTurningLeft) {
                        this.ghostWriter.AddEntry(GhostWriter.EntryKind.LeftStarted);
                    }
                    this.isTurningLeft = true;
                } else {
                    if (this.isTurningLeft) {
                        this.ghostWriter.AddEntry(GhostWriter.EntryKind.LeftEnded);
                    }
                    this.isTurningLeft = false;
                }

                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.D) || this.isBtnRightPressed) {
                    if (!this.isTurningRight) {
                        this.ghostWriter.AddEntry(GhostWriter.EntryKind.RightStarted);
                    }
                    this.isTurningRight = true;
                } else {
                    if (this.isTurningRight) {
                        this.ghostWriter.AddEntry(GhostWriter.EntryKind.RightEnded);
                    }
                    this.isTurningRight = false;
                }

                this.labSpeed += UnityEngine.Time.deltaTime * 5.0;
                this.labSpeed = Math.max(0.0, Math.min(this.labSpeed, this.labMaxSpeed));
                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.LeftControl)) {
                    this.labSpeed = 0.0;
                }
                if (!this.CanMove || this._Handbrake) {
                    this.labSpeed = 0.0;
                }

                var wasRubbingFence = this.IsRubbingFence();

                if (this.isTurningLeft) {
                    this.labRightOffset -= UnityEngine.Time.deltaTime * this.labRightOffsetSpeed;
                } else {
                    if (this.isTurningRight) {
                        this.labRightOffset += UnityEngine.Time.deltaTime * this.labRightOffsetSpeed;
                    }
                }
                this.labRightOffset = Math.max(-this.maxOffsetFromCenter, Math.min(this.labRightOffset, this.maxOffsetFromCenter));
                if (!this.CanMove || this._Handbrake) {
                    this.labRightOffset = 0.0;
                }

                if (!wasRubbingFence && this.IsRubbingFence()) {
                    //HealthController healthController = GetComponent<HealthController>();
                    //healthController.Damage(5);
                    //������ ������ �� �������, ��� ���� ���������� � ������

                    if (this.labRightOffset < 0.0) {
                        this.collisionParticlesLeft.Play();
                    } else {
                        this.collisionParticlesRight.Play();
                    }
                } else if (wasRubbingFence && !this.IsRubbingFence()) {
                    this.collisionParticlesLeft.Stop();
                    this.collisionParticlesRight.Stop();
                }

                if (this.isTurningLeft || this.isTurningRight) {
                    this.turningAngle += UnityEngine.Time.deltaTime * this.turningSpeed * (this.isTurningRight ? 1.0 : -1.0);
                    this.turningAngle = Math.max(-this.maxTurningValue, Math.min(this.turningAngle, this.maxTurningValue));
                } else {
                    if (this.turningAngle > 0.0) {
                        this.turningAngle -= UnityEngine.Time.deltaTime * this.turningSpeed;
                        this.turningAngle = Math.max(0.0, Math.min(this.turningAngle, this.maxTurningValue));
                    } else if (this.turningAngle < 0.0) {
                        this.turningAngle += UnityEngine.Time.deltaTime * this.turningSpeed;
                        this.turningAngle = Math.max(-this.maxTurningValue, Math.min(this.turningAngle, 0.0));
                    }

                }

                var distanceDelta = UnityEngine.Time.deltaTime * this.labSpeed;
                this.labTrackProgress += distanceDelta;

                var labCurrentPoint = this.pathCreator.GetPos(this.labTrackProgress, this.labRightOffset);
                var labForwardNormalized = this.pathCreator.path.GetDirectionAtDistance(this.labTrackProgress);

                var labForwardNormalizedAndTurned = new pc.Quat().setFromEulerAngles_Unity( 0, this.turningAngle, 0 ).transformVector( labForwardNormalized );
                this.mCar.transform.position = new pc.Vec3( labCurrentPoint.x, this.mCar.transform.position.y, labCurrentPoint.z );
                this.mCar.transform.rotation = new pc.Quat().setLookAt( labForwardNormalized, pc.Vec3.UP.clone() );

                this.carBody.transform.rotation = new pc.Quat().setLookAt( labForwardNormalizedAndTurned, pc.Vec3.UP.clone() );

                var labCameraForwardNormalized = this.pathCreator.path.GetDirectionAtDistance(UnityEngine.Mathf.Max(0, this.labTrackProgress - 0.5));
                this.playerCarrot.transform.rotation = new pc.Quat().setLookAt( labCameraForwardNormalized, pc.Vec3.UP.clone() );

                this.mCar.RotateWheels(this.labTrackProgress, this.isTurningLeft, this.isTurningRight);
            },
            /*CarUserControl.FixedUpdate end.*/

            /*CarUserControl.ActivateHandbrake start.*/
            ActivateHandbrake: function () {
                this._Handbrake = true;
            },
            /*CarUserControl.ActivateHandbrake end.*/

            /*CarUserControl.DeactivateHandbrake start.*/
            DeactivateHandbrake: function () {
                this._Handbrake = false;
            },
            /*CarUserControl.DeactivateHandbrake end.*/


        }
    });
    /*CarUserControl end.*/

    /*CheatSpeedTuning start.*/
    Bridge.define("CheatSpeedTuning", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            txtSpeed: null,
            slider: null,
            carUserControl: null
        },
        methods: {
            /*CheatSpeedTuning.Start start.*/
            Start: function () {
                this.carUserControl = UnityEngine.GameObject.Find("GameManager").GetComponent(GameManager).CarUserControl;
                this.slider.value = this.carUserControl.MaxSpeed;
            },
            /*CheatSpeedTuning.Start end.*/

            /*CheatSpeedTuning.Update start.*/
            Update: function () {
                this.carUserControl.CheatSetMaxSpeed(this.slider.value);
                this.txtSpeed.text = System.String.format("{0} / {1}", System.Single.format(this.carUserControl.Speed, "00.0"), System.Single.format(this.carUserControl.MaxSpeed, "00.0"));
            },
            /*CheatSpeedTuning.Update end.*/


        }
    });
    /*CheatSpeedTuning end.*/

    /*Countdown start.*/
    Bridge.define("Countdown", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            CountdownText: null,
            Go_Image: null,
            Outline: null,
            MainWindow: null
        },
        methods: {
            /*Countdown.Start start.*/
            Start: function () {
                this.Go_Image.transform.localScale = pc.Vec3.ZERO.clone();
                this.CountdownText.transform.localScale = pc.Vec3.ZERO.clone();
            },
            /*Countdown.Start end.*/

            /*Countdown.StartCountdown start.*/
            StartCountdown: function (onCountdownEnded) {
                //MainWindow.alpha = 0;

                this.CountdownText.text = "3";
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.CountdownText.transform, 1, 1), 0), Bridge.fn.bind(this, function () {
                    this.CountdownText.text = "2";
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.CountdownText.transform, 1, 1), 0), Bridge.fn.bind(this, function () {
                        this.CountdownText.text = "1";
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.CountdownText.transform, 1, 1), 0), Bridge.fn.bind(this, function () {
                            this.CountdownText.enabled = false;
                            //MainWindow.DOFade(1, 1f).From(0);
                            //CountdownText.text = "GO";
                            //Shadow.effectColor = Color.clear;
                            !Bridge.staticEquals(onCountdownEnded, null) ? onCountdownEnded() : null;
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.Go_Image.transform, 1.5, 0.5), 0), Bridge.fn.bind(this, function () {
                                //Color color = CountdownText.color;
                                //color.a = 0;
                                //CountdownText.DOColor(color, 0.5f);
                                DG.Tweening.DOTweenModuleUI.DOFade(this.Go_Image, 0, 0.5);
                            }));
                        }));
                    }));
                }));
            },
            /*Countdown.StartCountdown end.*/


        }
    });
    /*Countdown end.*/

    /*DamagingObstacle start.*/
    Bridge.define("DamagingObstacle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            explosionParticleSystem: null,
            parts: null,
            m_damage: 0
        },
        props: {
            Damage: {
                get: function () {
                    return this.m_damage;
                },
                set: function (value) {
                    this.m_damage = value;
                }
            }
        },
        methods: {
            /*DamagingObstacle.ExplodeDueToCollision start.*/
            ExplodeDueToCollision: function (playerPos, playerSpeed) {
                var $t;
                this.explosionParticleSystem = this.GetComponent(UnityEngine.ParticleSystem);
                this.explosionParticleSystem.Play();

                this.GetComponent(UnityEngine.SphereCollider).enabled = false;

                $t = Bridge.getEnumerator(this.parts);
                try {
                    while ($t.moveNext()) {
                        var child = { v : Bridge.cast($t.Current, UnityEngine.Transform) };
                        var flyingDuration = UnityEngine.Random.Range$1(0.3, 0.6);

                        var flatSphereHalf = UnityEngine.Random.insideUnitSphere.$clone();
                        flatSphereHalf.y = Math.abs(flatSphereHalf.y) / 2.0;

                        var posDelta = (child.v.position.$clone().sub( playerPos )).clone().normalize().$clone().scale( 10.0 );

                        posDelta = posDelta.$clone().add( flatSphereHalf.$clone() );

                        posDelta.normalize();
                        posDelta = posDelta.$clone().scale( playerSpeed / 2.0 );
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(child.v, child.v.position.$clone().add( posDelta ), flyingDuration), (function ($me, child) {
                            return function () {
                                DG.Tweening.DOTween.Kill(child.v);
                                UnityEngine.MonoBehaviour.Destroy(child.v.gameObject);
                            };
                        })(this, child));
                        DG.Tweening.ShortcutExtensions.DORotate(child.v, child.v.rotation.getPositiveEulerAngles().$clone().add( UnityEngine.Random.insideUnitSphere.$clone().scale( 15.0 ).scale( playerSpeed ) ), flyingDuration);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*DamagingObstacle.ExplodeDueToCollision end.*/

            /*DamagingObstacle.Update start.*/
            Update: function () {
                if (UnityEngine.Component.op_Inequality(this.explosionParticleSystem, null) && !this.explosionParticleSystem.IsAlive() && this.parts.childCount === 0) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*DamagingObstacle.Update end.*/


        }
    });
    /*DamagingObstacle end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       strength      The shake strength
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {UnityEngine.Vector2}          strength      The shake strength on each axis
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position.$clone());
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color.$clone());
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
                    var t;
                    var rBody = tweenRigidbody ? target.GetComponent(UnityEngine.Rigidbody) : null;
                    if (tweenRigidbody && UnityEngine.Component.op_Inequality(rBody, null)) {
                        t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                    } else {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DisableIfTooFar start.*/
    Bridge.define("DisableIfTooFar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            carUserControl: null,
            trackX: 0,
            usingTrackX: false,
            meshRenderer: null,
            maxDistance: 0
        },
        ctors: {
            init: function () {
                this.trackX = 0.0;
                this.usingTrackX = false;
                this.maxDistance = 70.0;
            }
        },
        methods: {
            /*DisableIfTooFar.SetTrackX start.*/
            SetTrackX: function (value) {
                this.trackX = value;
                this.usingTrackX = true;
            },
            /*DisableIfTooFar.SetTrackX end.*/

            /*DisableIfTooFar.Start start.*/
            Start: function () {
                this.carUserControl = UnityEngine.GameObject.Find("GameManager").GetComponent(GameManager).CarUserControl;
                this.meshRenderer = this.GetComponent(UnityEngine.MeshRenderer);
                //if (meshRenderer != null)
                //    maxDistance = Vector3.Magnitude(meshRenderer.bounds.size) * 10.0f;
            },
            /*DisableIfTooFar.Start end.*/

            /*DisableIfTooFar.Update start.*/
            Update: function () {
                this.RefreshDisableness();
            },
            /*DisableIfTooFar.Update end.*/

            /*DisableIfTooFar.RefreshDisableness start.*/
            RefreshDisableness: function () {
                var $t;
                var isDisabled = false;
                if (pc.Vec3.distance( this.transform.position, this.carUserControl.transform.position ) > this.maxDistance) {
                    isDisabled = true;
                }
                if (pc.Vec3.distance( this.transform.position, this.carUserControl.farPointInDirectionOfView.position ) > this.maxDistance * 2.0) {
                    isDisabled = true;
                }
                if (this.usingTrackX && (this.trackX > this.carUserControl.TrackX + 50.0 || this.trackX < this.carUserControl.TrackX - 5.0)) {
                    isDisabled = true;
                }

                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        child.gameObject.SetActive(!isDisabled);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (UnityEngine.Component.op_Inequality(this.meshRenderer, null)) {
                    this.meshRenderer.enabled = !isDisabled;
                }
            },
            /*DisableIfTooFar.RefreshDisableness end.*/


        }
    });
    /*DisableIfTooFar end.*/

    /*DriverDescription start.*/
    Bridge.define("DriverDescription", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            driverPrefab: null
        }
    });
    /*DriverDescription end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            Interactable: false,
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handleRect: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null,
            tempInput: null
        },
        props: {
            Horizontal: {
                get: function () {
                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
                    return this.handleRange;
                },
                set: function (value) {
                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
                    return this.deadZone;
                },
                set: function (value) {
                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
                    return this.AxisOptions;
                },
                set: function (value) {
                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
                    return this.snapX;
                },
                set: function (value) {
                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
                    return this.snapY;
                },
                set: function (value) {
                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.input = new UnityEngine.Vector2();
                this.tempInput = new UnityEngine.Vector2();
                this.Interactable = true;
                this.handleRange = 1;
                this.deadZone = 0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }

                var center = new pc.Vec2( 0.5, 0.5 );

                this.background.pivot = center.$clone();
                this.handleRect.anchorMin = center.$clone();
                this.handleRect.anchorMax = center.$clone();
                this.handleRect.pivot = center.$clone();
                this.handleRect.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                this.OnDrag(eventData);

            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {


                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position.$clone());
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );

                /* if (!Interactable)
                {
                   tempInput = (eventData.position - position) / (radius * canvas.scaleFactor);

                   if (tempInput.magnitude > 1)
                   {
                       tempInput = tempInput.normalized;
                   }

                   handleRect.anchoredPosition = tempInput * radius * handleRange;
                   return;
                }*/

                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize().$clone(), radius.$clone(), this.cam);
                this.handleRect.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                /* if (!Interactable)
                {
                   tempInput = Vector2.zero;
                }*/

                this.input = pc.Vec2.ZERO.clone();
                this.handleRect.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*EndGameButton start.*/
    Bridge.define("EndGameButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _Button: null,
            GameManager: null
        },
        methods: {
            /*EndGameButton.Start start.*/
            Start: function () {
                this._Button = this.GetComponent(UnityEngine.UI.Button);

                this._Button.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this.GameManager.CallFinishWebContent();
                }));
            },
            /*EndGameButton.Start end.*/


        }
    });
    /*EndGameButton end.*/

    /*EventReceiver start.*/
    
    Bridge.define("EventReceiver", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*EventReceiver.MyMethod start.*/
            MyMethod: function () {
                //your own method!
            },
            /*EventReceiver.MyMethod end.*/

            /*EventReceiver.PrintText start.*/
            PrintText: function (text) {
                UnityEngine.Debug.Log$1(text);
            },
            /*EventReceiver.PrintText end.*/

            /*EventReceiver.RotateSprite start.*/
            RotateSprite: function (newRot) {
                var currentRot = this.transform.eulerAngles.$clone();
                currentRot.y = newRot;
                this.transform.eulerAngles = currentRot.$clone();
            },
            /*EventReceiver.RotateSprite end.*/

            /*EventReceiver.SetDestination start.*/
            SetDestination: function (target) {
                this.StartCoroutine$1(this.SetDestinationRoutine(target));
            },
            /*EventReceiver.SetDestination end.*/

            /*EventReceiver.SetDestinationRoutine start.*/
            SetDestinationRoutine: function (target) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    tar,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //get references
                                        //NavMeshAgent agent = GetComponent<NavMeshAgent>();
                                        //navMove myMove = GetComponent<navMove>();
                                        tar = Bridge.cast(target, UnityEngine.GameObject);

                                        //increase agent speed
                                        //myMove.ChangeSpeed(4);
                                        //set new destination of the navmesh agent
                                        //agent.SetDestination(tar.transform.position);

                                        //wait until the path has been calculated
                                        //while (agent.pathPending)
                                        //yield return null;
                                        //wait until agent reached its destination
                                        /* float remain = agent.remainingDistance;
                                        while (remain == Mathf.Infinity || remain - agent.stoppingDistance > float.Epsilon
                                        || agent.pathStatus != NavMeshPathStatus.PathComplete)
                                        {
                                           remain = agent.remainingDistance;
                                           yield return null;
                                        }*/

                                        //wait a few seconds at the destination,
                                        //then decrease agent speed and restart movement routine
                                        $enumerator.current = new UnityEngine.WaitForSeconds(4);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    /* myMove.ChangeSpeed(1.5f);
                                        myMove.moveToPath = true;
                                        myMove.StartMove();*/

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EventReceiver.SetDestinationRoutine end.*/

            /*EventReceiver.ActivateForTime start.*/
            ActivateForTime: function (target) {
                this.StartCoroutine$1(this.ActivateForTimeRoutine(target));
            },
            /*EventReceiver.ActivateForTime end.*/

            /*EventReceiver.ActivateForTimeRoutine start.*/
            ActivateForTimeRoutine: function (target) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    tar,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    tar = Bridge.cast(target, UnityEngine.GameObject);
                                        tar.SetActive(true);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(6);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    tar.SetActive(false);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EventReceiver.ActivateForTimeRoutine end.*/


        }
    });
    /*EventReceiver end.*/

    /*Explosion start.*/
    Bridge.define("Explosion", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            explosionStarted: false,
            explosionParticleSystem: null
        },
        ctors: {
            init: function () {
                this.explosionStarted = false;
            }
        },
        methods: {
            /*Explosion.Start start.*/
            Start: function () {
                this.explosionStarted = true;
                this.explosionParticleSystem.Play();
            },
            /*Explosion.Start end.*/

            /*Explosion.Update start.*/
            Update: function () {
                if (this.explosionStarted && UnityEngine.Component.op_Inequality(this.explosionParticleSystem, null) && !this.explosionParticleSystem.IsAlive()) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*Explosion.Update end.*/


        }
    });
    /*Explosion end.*/

    /*FinishTrigger start.*/
    Bridge.define("FinishTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            trackHandles: null
        },
        methods: {
            /*FinishTrigger.Start start.*/
            Start: function () { },
            /*FinishTrigger.Start end.*/

            /*FinishTrigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (Bridge.referenceEquals(other.tag, "Player")) {
                    this.trackHandles.OnFinishReached.Invoke();
                }
            },
            /*FinishTrigger.OnTriggerEnter end.*/


        }
    });
    /*FinishTrigger end.*/

    /*FPSWriter start.*/
    Bridge.define("FPSWriter", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_frameCounter: 0,
            m_timeCounter: 0,
            m_lastFramerate: 0,
            m_refreshTime: 0
        },
        ctors: {
            init: function () {
                this.m_frameCounter = 0;
                this.m_timeCounter = 0.0;
                this.m_lastFramerate = 0.0;
                this.m_refreshTime = 0.5;
            }
        },
        methods: {
            /*FPSWriter.Update start.*/
            Update: function () {
                if (this.m_timeCounter < this.m_refreshTime) {
                    this.m_timeCounter += UnityEngine.Time.deltaTime;
                    this.m_frameCounter = (this.m_frameCounter + 1) | 0;
                } else {
                    //This code will break if you set your m_refreshTime to 0, which makes no sense.
                    this.m_lastFramerate = this.m_frameCounter / this.m_timeCounter;
                    this.m_frameCounter = 0;
                    this.m_timeCounter = 0.0;
                }
                this.GetComponent(UnityEngine.UI.Text).text = System.String.format("{0} FPS", [System.Single.format(this.m_lastFramerate, "0.")]);
            },
            /*FPSWriter.Update end.*/


        }
    });
    /*FPSWriter end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            MainCamera: null,
            LandscapeFov: 0,
            PortraitFov: 0,
            WheatCullDistance: 0,
            CountdownWidget: null,
            TutorialWindow: null,
            MainBackroundImage: null,
            WinScreen: null,
            LoseScreen: null,
            MainScreen: null,
            btnLeft: null,
            btnRight: null,
            healthBar: null,
            Opponents: null,
            PlayerCar: null,
            CarUserControl: null,
            Position: 0,
            LastCheckpoint: null,
            trackParent: null,
            healthController: null,
            _WheatCullDistance: 0,
            trackContentGenerator: null,
            wheatGenerator: null,
            roadGenerator: null,
            ghostReader: null,
            tracktors: null,
            drivers: null,
            trackPrefabs: null,
            _PlayerDistance: 0,
            _OpponentDistance: 0,
            _WebContentProxy: null,
            track: null,
            _Wheat: null,
            trackHandles: null
        },
        ctors: {
            init: function () {
                this.LandscapeFov = 45;
                this.PortraitFov = 60;
                this.WheatCullDistance = 50;
                this.Opponents = System.Array.init(0, null, Bot);
                this.Position = 0;
                this._WheatCullDistance = 50;
                this.tracktors = System.Array.init(0, null, UnityEngine.GameObject);
                this.drivers = System.Array.init(0, null, DriverDescription);
                this.trackPrefabs = System.Array.init(0, null, UnityEngine.GameObject);
                this._WebContentProxy = new WebContentProxy();
                this._Wheat = System.Array.init(0, null, UnityEngine.Transform);
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
                var $t;
                this._WebContentProxy.DecodeInputPayload();

                var trackIndex = this.GetInputProperties().trackIndex;
                var vehicleIndex = this.GetInputProperties().vehicleIndex;
                var driverIndex = this.GetInputProperties().driverIndex;

                var tracktor = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.tracktors[vehicleIndex], pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone(), this.trackParent.transform);
                this.PlayerCar = tracktor.GetComponent(RaceCar);
                this.CarUserControl = tracktor.GetComponent(CarUserControl);
                this.wheatGenerator.carUserControl = this.CarUserControl;
                this.healthController = tracktor.GetComponent(HealthController);
                this.trackContentGenerator.healthController = this.healthController;

                trackIndex = 0;

                this.track = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.trackPrefabs[trackIndex], new pc.Vec3( 0.0, 0.0, 0.0 ), pc.Quat.IDENTITY.clone(), this.trackParent.transform);
                this.trackHandles = this.track.GetComponent(TrackHandles);

                this.healthBar.HealthProvider = this.healthController;
                this.healthController.LossScreen = this.LoseScreen;
                this.healthController.MainScreen = this.MainScreen;

                var driverRoot = this.PlayerCar.transform.Find("Body").Find("DriverRoot");
                var newDriver = UnityEngine.Object.Instantiate(UnityEngine.GameObject, ($t = this.drivers[driverIndex].driverPrefab)[vehicleIndex], driverRoot.transform);

                this.CarUserControl.pathCreator = this.trackHandles.MainPath;
                this.ghostReader.pathCreator = this.trackHandles.MainPath;
                this.trackContentGenerator.Generate(this.trackHandles.MainPath, this.trackParent.transform);
                this.wheatGenerator.Generate(this.trackHandles.MainPath, this.trackParent.transform);
                this.roadGenerator.Generate(this.trackHandles.MainPath);

                this.WinScreen.GetComponent(WinScreenWidget).RaceCar = this.PlayerCar;
                this.LoseScreen.GetComponent(WinScreenWidget).RaceCar = this.PlayerCar;

                this.TutorialWindow.transform.Find("InputPayload").GetComponent(UnityEngine.UI.Text).text = System.String.format("track:{0} driver:{1} vehicle:{2} gemCount:{3}", Bridge.box(trackIndex, System.Int32), Bridge.box(driverIndex, System.Int32), Bridge.box(vehicleIndex, System.Int32), Bridge.box(100, System.Int32));

                this.btnLeft.OnMouseDownEvent.AddListener(Bridge.fn.cacheBind(this.CarUserControl, this.CarUserControl.TurnLeft));
                this.btnLeft.OnMouseUpEvent.AddListener(Bridge.fn.cacheBind(this.CarUserControl, this.CarUserControl.CancelTurnLeft));
                this.btnRight.OnMouseDownEvent.AddListener(Bridge.fn.cacheBind(this.CarUserControl, this.CarUserControl.TurnRight));
                this.btnRight.OnMouseUpEvent.AddListener(Bridge.fn.cacheBind(this.CarUserControl, this.CarUserControl.CancelTurnRight));
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
                var $t;
                var screenRatio = (((Bridge.Int.div(UnityEngine.Screen.width, UnityEngine.Screen.height)) | 0));
                if (screenRatio >= 1) {
                    // Landscape Layout
                    this.MainCamera.fieldOfView = this.LandscapeFov;
                } else if (screenRatio < 1) {
                    // Portrait Layout
                    this.MainCamera.fieldOfView = this.PortraitFov;
                }

                //float[] distances = new float[32];
                //distances[8] = WheatCullDistance;
                //MainCamera.layerCullDistances = distances;

                Luna.Unity.LifeCycle.addOnPause(Bridge.fn.cacheBind(this, this.PauseGameplay));
                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.ResumeGameplay));

                this.CarUserControl.CanMove = false;

                this.WheatCull();

                $t = Bridge.getEnumerator(this.Opponents);
                try {
                    while ($t.moveNext()) {
                        var o = $t.Current;
                        o.StopMove();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.OnEndTutorialHandler();
            },
            /*GameManager.Start end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
                this.CountdownWidget.StartCountdown(Bridge.fn.cacheBind(this, this.OnCountdownEndedHandler));
            },
            /*GameManager.StartGame end.*/

            /*GameManager.OnCountdownEndedHandler start.*/
            OnCountdownEndedHandler: function () {
                var $t;
                this.CarUserControl.CanMove = true;
                $t = Bridge.getEnumerator(this.Opponents);
                try {
                    while ($t.moveNext()) {
                        var o = $t.Current;
                        o.StartMove();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.OnCountdownEndedHandler end.*/

            /*GameManager.Update start.*/
            Update: function () {
                this.UpdatePositions();
                this.WheatCull();

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Escape)) {
                    UnityEngine.Application.Quit();
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.UpdatePositions start.*/
            UpdatePositions: function () {
                var $t;
                var tempPosition = 0;
                $t = Bridge.getEnumerator(this.Opponents);
                try {
                    while ($t.moveNext()) {
                        var opponent = $t.Current;
                        this._PlayerDistance = pc.Vec3.distance( this.PlayerCar.transform.position, this.LastCheckpoint.position );
                        this._OpponentDistance = pc.Vec3.distance( opponent.RaceCar.transform.position, this.LastCheckpoint.position );
                        //Debug.Log($"Opp score: {opponent.RaceCar.Score} Distance: {_OpponentDistance}  ||  Player score: {PlayerCar.Score} Distance: {_PlayerDistance}");
                        if ((opponent.RaceCar.Score - this._OpponentDistance) > (this.PlayerCar.Score - this._PlayerDistance)) {
                            tempPosition = (tempPosition + 1) | 0;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.Position = tempPosition;
            },
            /*GameManager.UpdatePositions end.*/

            /*GameManager.OnEndTutorialHandler start.*/
            OnEndTutorialHandler: function () {
                Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.TutorialComplete);

                DG.Tweening.DOTweenModuleUI.DOFade$2(this.MainBackroundImage, 0, 0.5);
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), DG.Tweening.DOTweenModuleUI.DOFade(this.TutorialWindow, 0, 0.5), Bridge.fn.bind(this, function () {
                    this.StartGame();
                }));

            },
            /*GameManager.OnEndTutorialHandler end.*/

            /*GameManager.WheatCull start.*/
            WheatCull: function () {
                var $t;
                $t = Bridge.getEnumerator(this._Wheat);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        if (this._WheatCullDistance >= pc.Vec3.distance( this.PlayerCar.transform.position, t.position )) {
                            t.gameObject.SetActive(true);
                        } else {
                            t.gameObject.SetActive(false);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameManager.WheatCull end.*/

            /*GameManager.PauseGameplay start.*/
            PauseGameplay: function () {
                UnityEngine.Time.timeScale = 0;
            },
            /*GameManager.PauseGameplay end.*/

            /*GameManager.ResumeGameplay start.*/
            ResumeGameplay: function () {
                UnityEngine.Time.timeScale = 1;
            },
            /*GameManager.ResumeGameplay end.*/

            /*GameManager.ReloadScene start.*/
            ReloadScene: function () {
                UnityEngine.SceneManagement.SceneManager.LoadScene$2(UnityEngine.SceneManagement.SceneManager.GetActiveScene().name);
            },
            /*GameManager.ReloadScene end.*/

            /*GameManager.OnDestroy start.*/
            OnDestroy: function () {
                Luna.Unity.LifeCycle.removeOnPause(Bridge.fn.cacheBind(this, this.PauseGameplay));
                Luna.Unity.LifeCycle.removeOnResume(Bridge.fn.cacheBind(this, this.ResumeGameplay));
            },
            /*GameManager.OnDestroy end.*/

            /*GameManager.GetInputProperties start.*/
            GetInputProperties: function () {
                return this._WebContentProxy.inputProperties.$clone();
            },
            /*GameManager.GetInputProperties end.*/

            /*GameManager.GetOutputProperties start.*/
            GetOutputProperties: function () {
                return this._WebContentProxy.outputProperties.$clone();
            },
            /*GameManager.GetOutputProperties end.*/

            /*GameManager.SetOutputProperties start.*/
            SetOutputProperties: function (properties) {
                this._WebContentProxy.outputProperties = properties.$clone();
            },
            /*GameManager.SetOutputProperties end.*/

            /*GameManager.CallFinishWebContent start.*/
            CallFinishWebContent: function () {
                this._WebContentProxy.CallFinishWebContentFunction();
            },
            /*GameManager.CallFinishWebContent end.*/

            /*GameManager.CheatTeleportToFinish start.*/
            CheatTeleportToFinish: function () {
                this.CarUserControl.CheatGoToFinish();
            },
            /*GameManager.CheatTeleportToFinish end.*/

            /*GameManager.DestroyObstacles start.*/
            DestroyObstacles: function () {
                var $t;
                $t = Bridge.getEnumerator(this.trackContentGenerator.AlreadyGenerated);
                try {
                    while ($t.moveNext()) {
                        var trackContentItem = $t.Current;
                        UnityEngine.MonoBehaviour.Destroy(trackContentItem.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.trackContentGenerator.AlreadyGenerated.clear();
            },
            /*GameManager.DestroyObstacles end.*/

            /*GameManager.GasOnOff start.*/
            GasOnOff: function () {
                this.CarUserControl.CanMove = !this.CarUserControl.CanMove;
            },
            /*GameManager.GasOnOff end.*/


        }
    });
    /*GameManager end.*/

    /*GhostReader start.*/
    Bridge.define("GhostReader", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ghost: null,
            pathCreator: null,
            timer: 0,
            data: null,
            isTurningLeft: false,
            isTurningRight: false,
            started: false,
            speed: 0,
            distance: 0,
            sideOffset: 0,
            turningAngle: 0
        },
        ctors: {
            init: function () {
                this.timer = 0.0;
                this.data = new (System.Collections.Generic.List$1(GhostReader.Entry)).ctor();
                this.isTurningLeft = false;
                this.isTurningRight = false;
                this.started = false;
                this.speed = 0.0;
                this.distance = 0.0;
                this.sideOffset = 0.0;
                this.turningAngle = 0.0;
            }
        },
        methods: {
            /*GhostReader.Start start.*/
            Start: function () {
                //var fileName = "Dump.txt";
                //if (!File.Exists(fileName))
                //    return;
                //var file = new StreamReader("Dump.txt");
                //string line;
                //while (( line = file.ReadLine()) != null )
                //{
                //    var parts = line.Split(' ');
                //    var entry = new Entry();
                //    entry.kind = (EntryKind)System.Enum.Parse(typeof(EntryKind), parts[0]);
                //    entry.time = float.Parse(parts[1]);
                //    entry.distance = float.Parse(parts[2]);
                //    entry.sideOffset = float.Parse(parts[3]);
                //    entry.speed = float.Parse(parts[4]);
                //    data.Add(entry);
                //}
            },
            /*GhostReader.Start end.*/

            /*GhostReader.Update start.*/
            Update: function () {
                this.timer += UnityEngine.Time.deltaTime;

                while (this.data.Count > 0 && this.data.getItem(0).time <= this.timer) {
                    this.Perform(this.data.getItem(0));
                    this.data.removeAt(0);
                }

                if (!this.started) {
                    return;
                }

                this.speed += UnityEngine.Time.deltaTime * 5.0;
                this.speed = Math.max(0.0, Math.min(this.speed, 20.0));
                if (this.isTurningLeft) {
                    this.sideOffset -= UnityEngine.Time.deltaTime * 8.0;
                } else {
                    if (this.isTurningRight) {
                        this.sideOffset += UnityEngine.Time.deltaTime * 8.0;
                    }
                }
                this.sideOffset = Math.max(-7.0, Math.min(this.sideOffset, 7.0));
                this.distance += UnityEngine.Time.deltaTime * this.speed;


                if (this.isTurningLeft || this.isTurningRight) {
                    this.turningAngle += UnityEngine.Time.deltaTime * 100.0 * (this.isTurningRight ? 1.0 : -1.0);
                    this.turningAngle = Math.max(-30.0, Math.min(this.turningAngle, 30.0));
                } else {
                    if (this.turningAngle > 0.0) {
                        this.turningAngle -= UnityEngine.Time.deltaTime * 100.0;
                        this.turningAngle = Math.max(0.0, Math.min(this.turningAngle, 30.0));
                    } else if (this.turningAngle < 0.0) {
                        this.turningAngle += UnityEngine.Time.deltaTime * 100.0;
                        this.turningAngle = Math.max(-30.0, Math.min(this.turningAngle, 0.0));
                    }

                }

                var labCurrentPoint = this.pathCreator.path.GetPointAtDistance(this.distance);
                var labForwardNormalized = this.pathCreator.path.GetDirectionAtDistance(this.distance);
                var labRightNormalized = new pc.Vec3().cross( labForwardNormalized, pc.Vec3.UP.clone() ).clone().normalize().$clone().scale( -1 );
                labCurrentPoint = labCurrentPoint.$clone().add( labRightNormalized.$clone().scale( this.sideOffset ) );
                var labForwardNormalizedAndTurned = new pc.Quat().setFromEulerAngles_Unity( 0, this.turningAngle, 0 ).transformVector( labForwardNormalized );

                this.ghost.position = labCurrentPoint.$clone();
                this.ghost.rotation = new pc.Quat().setLookAt( labForwardNormalizedAndTurned, pc.Vec3.UP.clone() );

            },
            /*GhostReader.Update end.*/

            /*GhostReader.Perform start.*/
            Perform: function (entry) {
                if (entry.kind === GhostReader.EntryKind.Start) {
                    this.started = true;
                } else {
                    if (entry.kind === GhostReader.EntryKind.LeftStarted) {
                        this.isTurningLeft = true;
                    } else {
                        if (entry.kind === GhostReader.EntryKind.LeftEnded) {
                            this.isTurningLeft = false;
                        } else {
                            if (entry.kind === GhostReader.EntryKind.RightStarted) {
                                this.isTurningRight = true;
                            } else {
                                if (entry.kind === GhostReader.EntryKind.RightEnded) {
                                    this.isTurningRight = false;
                                }
                            }
                        }
                    }
                }

                this.speed = entry.speed;
                this.distance = entry.distance;
                this.sideOffset = entry.sideOffset;
            },
            /*GhostReader.Perform end.*/


        }
    });
    /*GhostReader end.*/

    /*GhostReader+Entry start.*/
    Bridge.define("GhostReader.Entry", {
        $kind: "nested class",
        fields: {
            kind: 0,
            time: 0,
            distance: 0,
            sideOffset: 0,
            speed: 0
        }
    });
    /*GhostReader+Entry end.*/

    /*GhostReader+EntryKind start.*/
    Bridge.define("GhostReader.EntryKind", {
        $kind: "nested enum",
        statics: {
            fields: {
                Start: 0,
                LeftStarted: 1,
                LeftEnded: 2,
                RightStarted: 3,
                RightEnded: 4,
                Collision: 5,
                Pew: 6
            }
        }
    });
    /*GhostReader+EntryKind end.*/

    /*GhostWriter start.*/
    Bridge.define("GhostWriter", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timer: 0,
            data: null,
            carUserControl: null
        },
        ctors: {
            init: function () {
                this.timer = 0.0;
                this.data = new (System.Collections.Generic.List$1(GhostWriter.Entry)).ctor();
            }
        },
        methods: {
            /*GhostWriter.AddEntry start.*/
            AddEntry: function (kind) {
                var entry = new GhostWriter.Entry();
                entry.kind = kind;
                entry.time = this.timer;
                entry.distance = this.carUserControl.TrackX;
                entry.sideOffset = this.carUserControl.LabRightOffset;
                entry.speed = this.carUserControl.Speed;
                this.data.add(entry);
            },
            /*GhostWriter.AddEntry end.*/

            /*GhostWriter.Dump start.*/
            Dump: function () {
                //while (File.Exists(string.Format("Dump{0}.txt", fileDigit) ) )
                //    fileDigit += 1;
                //var file = File.CreateText(string.Format("Dump{0}.txt", fileDigit));
                //var fileName = "Dump.txt";
                //if (File.Exists(fileName))
                //    File.Delete(fileName);
                //var file = File.CreateText(fileName);
                //foreach (var entry in data)
                //    file.WriteLine(string.Format("{0} {1} {2} {3} {4}", entry.kind, entry.time, entry.distance, entry.sideOffset, entry.speed));
                //file.Close();
            },
            /*GhostWriter.Dump end.*/

            /*GhostWriter.Start start.*/
            Start: function () {

            },
            /*GhostWriter.Start end.*/

            /*GhostWriter.Update start.*/
            Update: function () {
                this.timer += UnityEngine.Time.deltaTime;
            },
            /*GhostWriter.Update end.*/


        }
    });
    /*GhostWriter end.*/

    /*GhostWriter+Entry start.*/
    Bridge.define("GhostWriter.Entry", {
        $kind: "nested class",
        fields: {
            kind: 0,
            time: 0,
            distance: 0,
            sideOffset: 0,
            speed: 0
        }
    });
    /*GhostWriter+Entry end.*/

    /*GhostWriter+EntryKind start.*/
    Bridge.define("GhostWriter.EntryKind", {
        $kind: "nested enum",
        statics: {
            fields: {
                Start: 0,
                LeftStarted: 1,
                LeftEnded: 2,
                RightStarted: 3,
                RightEnded: 4,
                Collision: 5,
                Pew: 6
            }
        }
    });
    /*GhostWriter+EntryKind end.*/

    /*Gun start.*/
    Bridge.define("Gun", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rocketPrefab: null,
            carUserControl: null,
            products: null,
            shootTimeout: 0,
            shootTimeoutTimer: 0
        },
        methods: {
            /*Gun.Shoot start.*/
            Shoot: function () {
                if (this.shootTimeoutTimer > 0.0) {
                    return;
                }

                if (this.products.Count(Products.Kind.Rocket) === 0) {
                    return;
                }
                this.products.Transfer(Products.Kind.Rocket, -1);

                var rocket = UnityEngine.Object.Instantiate(UnityEngine.Transform, this.rocketPrefab);

                rocket.GetComponent(Rocket).Fly(this.carUserControl.pathCreator, this.carUserControl.TrackX, this.carUserControl.LabRightOffset, this.carUserControl.MaxSpeed);
                this.shootTimeoutTimer = this.shootTimeout;
            },
            /*Gun.Shoot end.*/

            /*Gun.Awake start.*/
            Awake: function () {
                var managerObject = UnityEngine.GameObject.Find("GameManager");
                this.products = managerObject.GetComponentInChildren(Products);
                this.shootTimeout = 1.0;
            },
            /*Gun.Awake end.*/

            /*Gun.Update start.*/
            Update: function () {
                if (this.shootTimeoutTimer > 0.0) {
                    this.shootTimeoutTimer -= UnityEngine.Time.deltaTime;
                }
            },
            /*Gun.Update end.*/


        }
    });
    /*Gun end.*/

    /*HealthBar start.*/
    Bridge.define("HealthBar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            progressImage: null,
            BarIconImage: null,
            HealthProvider: null
        },
        methods: {
            /*HealthBar.Start start.*/
            Start: function () {
                this.HealthProvider = UnityEngine.GameObject.Find("GameManager").GetComponent(GameManager).healthController;

                this.HealthProvider.OnDamaged = Bridge.fn.combine(this.HealthProvider.OnDamaged, Bridge.fn.cacheBind(this, this.OnHealthChangedHandler));
                this.HealthProvider.OnHealed = Bridge.fn.combine(this.HealthProvider.OnHealed, Bridge.fn.cacheBind(this, this.OnHealthChangedHandler));
            },
            /*HealthBar.Start end.*/

            /*HealthBar.OnHealthChangedHandler start.*/
            OnHealthChangedHandler: function () {
                if (!UnityEngine.Object.op_Implicit(this.HealthProvider)) {
                    return;
                }
                DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.BarIconImage.transform, 1.0, 0.25), 1.3);
                this.progressImage.fillAmount = this.HealthProvider.Health / this.HealthProvider.MaxHealth;
            },
            /*HealthBar.OnHealthChangedHandler end.*/


        }
    });
    /*HealthBar end.*/

    /*HealthController start.*/
    Bridge.define("HealthController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Health: 0,
            MaxHealth: 0,
            Shield: 0,
            MaxShield: 0,
            MainScreen: null,
            LossScreen: null,
            OnDamaged: null,
            OnHealed: null,
            OnShieldDamaged: null,
            OnShieldRaised: null,
            OnShieldLowered: null,
            boosts: null
        },
        ctors: {
            init: function () {
                this.Health = 0.0;
                this.MaxHealth = 100.0;
                this.Shield = 0.0;
                this.MaxShield = 50.0;
            }
        },
        methods: {
            /*HealthController.Awake start.*/
            Awake: function () {
                var managerObject = UnityEngine.GameObject.Find("GameManager");
                this.boosts = managerObject.GetComponentInChildren(Boosts);
            },
            /*HealthController.Awake end.*/

            /*HealthController.Start start.*/
            Start: function () {
                this.Health = this.MaxHealth;
                this.boosts.OnBoostAdded = Bridge.fn.combine(this.boosts.OnBoostAdded, Bridge.fn.cacheBind(this, this.OnBoostAdded));
                this.boosts.OnBoostRemoved = Bridge.fn.combine(this.boosts.OnBoostRemoved, Bridge.fn.cacheBind(this, this.OnBoostRemoved));
            },
            /*HealthController.Start end.*/

            /*HealthController.Heal start.*/
            Heal: function (value) {
                this.Health += value;
                this.Health = Math.max(0, Math.min(this.Health, this.MaxHealth));
                !Bridge.staticEquals(this.OnHealed, null) ? this.OnHealed() : null;
            },
            /*HealthController.Heal end.*/

            /*HealthController.Damage start.*/
            Damage: function (value) {
                UnityEngine.Debug.Assert$1(value > 0.0);
                var damageToShield = UnityEngine.Mathf.Min(this.Shield, value);
                if (damageToShield > 0.0) {
                    this.Shield -= damageToShield;
                    value -= damageToShield;
                    !Bridge.staticEquals(this.OnShieldDamaged, null) ? this.OnShieldDamaged() : null;

                    if (this.Shield <= 0.0) {
                        this.boosts.Deactivate(Products.Kind.Shield);
                    }
                    if (value === 0.0) {
                        return;
                    }
                }
                this.Health -= value;
                this.Health = Math.max(0, Math.min(this.Health, this.MaxHealth));
                !Bridge.staticEquals(this.OnDamaged, null) ? this.OnDamaged() : null;
                this.PerformHealthCheck();
            },
            /*HealthController.Damage end.*/

            /*HealthController.OnBoostAdded start.*/
            OnBoostAdded: function (kind) {
                if (kind !== Products.Kind.Shield) {
                    return;
                }
                this.Shield = this.MaxShield;
                !Bridge.staticEquals(this.OnShieldRaised, null) ? this.OnShieldRaised() : null;
            },
            /*HealthController.OnBoostAdded end.*/

            /*HealthController.OnBoostRemoved start.*/
            OnBoostRemoved: function (kind) {
                if (kind !== Products.Kind.Shield) {
                    return;
                }
                this.Shield = 0.0;
                !Bridge.staticEquals(this.OnShieldLowered, null) ? this.OnShieldLowered() : null;
            },
            /*HealthController.OnBoostRemoved end.*/

            /*HealthController.PerformHealthCheck start.*/
            PerformHealthCheck: function () {
                if (this.Health <= 0) {
                    var control = this.GetComponent(CarUserControl);
                    control.ActivateHandbrake();
                    DG.Tweening.DOTweenModuleUI.DOFade(this.MainScreen, 0, 0.25);
                    DG.Tweening.TweenSettingsExtensions.From$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions, DG.Tweening.DOTweenModuleUI.DOFade(this.LossScreen, 1, 0.25), 0);
                    this.LossScreen.gameObject.SetActive(true);
                }
            },
            /*HealthController.PerformHealthCheck end.*/


        }
    });
    /*HealthController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*JoystickPlayerExample start.*/
    Bridge.define("JoystickPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            variableJoystick: null,
            rb: null
        },
        methods: {
            /*JoystickPlayerExample.FixedUpdate start.*/
            FixedUpdate: function () {
                var direction = new pc.Vec3( 0, 0, 1 ).scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().scale( this.variableJoystick.Horizontal ) );
                this.rb.AddForce$1(direction.$clone().scale( this.speed ).scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.VelocityChange);
            },
            /*JoystickPlayerExample.FixedUpdate end.*/


        }
    });
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    Bridge.define("JoystickSetterExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            variableJoystick: null,
            valueText: null,
            background: null,
            axisSprites: null
        },
        methods: {
            /*JoystickSetterExample.ModeChanged start.*/
            ModeChanged: function (index) {
                switch (index) {
                    case 0: 
                        this.variableJoystick.SetMode(JoystickType.Fixed);
                        break;
                    case 1: 
                        this.variableJoystick.SetMode(JoystickType.Floating);
                        break;
                    case 2: 
                        this.variableJoystick.SetMode(JoystickType.Dynamic);
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.ModeChanged end.*/

            /*JoystickSetterExample.AxisChanged start.*/
            AxisChanged: function (index) {
                switch (index) {
                    case 0: 
                        this.variableJoystick.AxisOptions = AxisOptions.Both;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 1: 
                        this.variableJoystick.AxisOptions = AxisOptions.Horizontal;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 2: 
                        this.variableJoystick.AxisOptions = AxisOptions.Vertical;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.AxisChanged end.*/

            /*JoystickSetterExample.SnapX start.*/
            SnapX: function (value) {
                this.variableJoystick.SnapX = value;
            },
            /*JoystickSetterExample.SnapX end.*/

            /*JoystickSetterExample.SnapY start.*/
            SnapY: function (value) {
                this.variableJoystick.SnapY = value;
            },
            /*JoystickSetterExample.SnapY end.*/

            /*JoystickSetterExample.Update start.*/
            Update: function () {
                this.valueText.text = "Current Value: " + this.variableJoystick.Direction;
            },
            /*JoystickSetterExample.Update end.*/


        }
    });
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: "enum",
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*JustWheelMeshes start.*/
    Bridge.define("JustWheelMeshes", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_WheelMeshes: null
        },
        ctors: {
            init: function () {
                this.m_WheelMeshes = System.Array.init(4, null, UnityEngine.GameObject);
            }
        },
        methods: {
            /*JustWheelMeshes.Start start.*/
            Start: function () {

            },
            /*JustWheelMeshes.Start end.*/

            /*JustWheelMeshes.Update start.*/
            Update: function () {

            },
            /*JustWheelMeshes.Update end.*/


        }
    });
    /*JustWheelMeshes end.*/

    /*LightPole start.*/
    Bridge.define("LightPole", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scaleWidth: 0,
            scaleHeight: 0
        },
        ctors: {
            init: function () {
                this.scaleWidth = 0.0;
                this.scaleHeight = 0.0;
            }
        },
        methods: {
            /*LightPole.Start start.*/
            Start: function () {
                this.scaleWidth = this.transform.localScale.x;
                this.scaleHeight = this.transform.localScale.z;
            },
            /*LightPole.Start end.*/

            /*LightPole.Update start.*/
            Update: function () {
                var alpha = 0.15 + Math.sin(UnityEngine.Time.time * 6.0) * 0.1;
                //GetComponent<Renderer>().material.color = new Color(1.0f, 1.0f, 1.0f, alpha);

                this.GetComponent(UnityEngine.Renderer).material.SetColor$1("_TintColor", new pc.Color( 1.0, 1.0, 1.0, alpha ));

                var scaleValue1 = 1.0 + Math.sin(UnityEngine.Time.time * 5.0 + 1.0) * 0.1;
                var scaleValue2 = 1.0 + Math.sin(UnityEngine.Time.time * 7.0 + 5.0) * 0.1;
                this.transform.localScale = new pc.Vec3( this.scaleWidth * scaleValue1, this.scaleWidth * scaleValue1, this.scaleHeight * scaleValue2 );
            },
            /*LightPole.Update end.*/


        }
    });
    /*LightPole end.*/

    /*Localization start.*/
    Bridge.define("Localization", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            englishAsset: null,
            russianAsset: null,
            locals: null
        },
        ctors: {
            init: function () {
                this.locals = new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor();
            }
        },
        methods: {
            /*Localization.Awake start.*/
            Awake: function () {
                this.SetLanguage();
            },
            /*Localization.Awake end.*/

            /*Localization.SetLanguage start.*/
            SetLanguage: function () {
                var $t;
                var data;
                if (UnityEngine.Application.systemLanguage === UnityEngine.SystemLanguage.English) {
                    data = this.englishAsset;
                } else if (UnityEngine.Application.systemLanguage === UnityEngine.SystemLanguage.Russian) {
                    data = this.russianAsset;
                } else {
                    data = this.englishAsset;
                }

                if (UnityEngine.Object.op_Implicit(data) && data.text != null) {
                    var localizations = Newtonsoft.Json.JsonConvert.DeserializeObject(data.text, Localization.LocalizationData).$clone();

                    $t = Bridge.getEnumerator(localizations.locals);
                    try {
                        while ($t.moveNext()) {
                            var str = $t.Current.$clone();
                            this.locals.add(str.id, str.localText);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                } else {
                    UnityEngine.Debug.Log$1("Localization loading was failed");
                }
            },
            /*Localization.SetLanguage end.*/

            /*Localization.GetLocalsById start.*/
            GetLocalsById: function (id) {
                if (this.locals.containsKey(id)) {
                    return this.locals.getItem(id);
                } else {
                    return id;
                }
            },
            /*Localization.GetLocalsById end.*/


        }
    });
    /*Localization end.*/

    /*Localization+LocalizationData start.*/
    Bridge.define("Localization.LocalizationData", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Localization.LocalizationData(); }
            }
        },
        fields: {
            locals: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([6757131120, this.locals]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Localization.LocalizationData)) {
                    return false;
                }
                return Bridge.equals(this.locals, o.locals);
            },
            $clone: function (to) {
                var s = to || new Localization.LocalizationData();
                s.locals = this.locals;
                return s;
            }
        }
    });
    /*Localization+LocalizationData end.*/

    /*Localization+LocalizationString start.*/
    Bridge.define("Localization.LocalizationString", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new Localization.LocalizationString(); }
            }
        },
        fields: {
            id: null,
            localText: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([6891249133, this.id, this.localText]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Localization.LocalizationString)) {
                    return false;
                }
                return Bridge.equals(this.id, o.id) && Bridge.equals(this.localText, o.localText);
            },
            $clone: function (to) {
                var s = to || new Localization.LocalizationString();
                s.id = this.id;
                s.localText = this.localText;
                return s;
            }
        }
    });
    /*Localization+LocalizationString end.*/

    /*LongTapButton start.*/
    Bridge.define("LongTapButton", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            OnMouseDownEvent: null,
            OnMouseUpEvent: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*LongTapButton.Start start.*/
            Start: function () {

            },
            /*LongTapButton.Start end.*/

            /*LongTapButton.Update start.*/
            Update: function () {

            },
            /*LongTapButton.Update end.*/

            /*LongTapButton.OnMouseDown start.*/
            OnMouseDown: function () { },
            /*LongTapButton.OnMouseDown end.*/

            /*LongTapButton.OnMouseUp start.*/
            OnMouseUp: function () { },
            /*LongTapButton.OnMouseUp end.*/

            /*LongTapButton.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                this.OnMouseDownEvent.Invoke();
            },
            /*LongTapButton.OnPointerDown end.*/

            /*LongTapButton.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                this.OnMouseUpEvent.Invoke();
            },
            /*LongTapButton.OnPointerUp end.*/


        }
    });
    /*LongTapButton end.*/

    /*LootableItem start.*/
    Bridge.define("LootableItem", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            item: null,
            kind: 0,
            angle: 0,
            rotationDegreesPerSecond: 0,
            OnLootableItemCollected: null
        },
        ctors: {
            init: function () {
                this.kind = Products.Kind.Fuel;
                this.angle = 0.0;
                this.rotationDegreesPerSecond = 360.0;
            }
        },
        methods: {
            /*LootableItem.Start start.*/
            Start: function () {

            },
            /*LootableItem.Start end.*/

            /*LootableItem.Update start.*/
            Update: function () {
                this.angle += UnityEngine.Time.deltaTime * this.rotationDegreesPerSecond;
                var rotation = new pc.Quat().setFromEulerAngles_Unity( this.item.eulerAngles.x, this.angle, this.item.eulerAngles.z );
                ;
                this.item.rotation = rotation.$clone();
            },
            /*LootableItem.Update end.*/

            /*LootableItem.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (Bridge.referenceEquals(other.tag, "Player")) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                    this.OnLootableItemCollected.Invoke(this.kind);
                }
            },
            /*LootableItem.OnTriggerEnter end.*/


        }
    });
    /*LootableItem end.*/

    /*Products+Kind start.*/
    Bridge.define("Products.Kind", {
        $kind: "nested enum",
        statics: {
            fields: {
                Rocket: 0,
                Shield: 1,
                Double: 2,
                Fuel: 3,
                Heart: 4,
                Wheat: 5,
                Gem: 6
            }
        }
    });
    /*Products+Kind end.*/

    /*LunaUIFields start.*/
    Bridge.define("LunaUIFields", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ObjectiveHintText: null,
            ObjectiveHintString: null,
            LevelFailedButtonText: null,
            LevelFailedButtonString: null,
            LevelCompleteButtonText: null,
            LevelCompleteButtonString: null
        },
        methods: {
            /*LunaUIFields.Start start.*/
            Start: function () {
                //GasHintText.text = GasHintString;
                //SteerHintText.text = SteerHintString;
                //ObjectiveHintText.text = ObjectiveHintString;

                this.LevelFailedButtonText.text = this.LevelFailedButtonString;
                this.LevelCompleteButtonText.text = this.LevelCompleteButtonString;

            },
            /*LunaUIFields.Start end.*/


        }
    });
    /*LunaUIFields end.*/

    /*PathCreation.BezierPath start.*/
    /** @namespace PathCreation */

    /**
     * @public
     * @class PathCreation.BezierPath
     */
    Bridge.define("PathCreation.BezierPath", {
        fields: {
            points: null,
            isClosed: false,
            space: 0,
            controlMode: 0,
            autoControlLength: 0,
            boundsUpToDate: false,
            bounds: null,
            perAnchorNormalsAngle: null,
            globalNormalsAngle: 0,
            flipNormals: false
        },
        events: {
            OnModified: null
        },
        props: {
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function NumPoints
             * @type number
             */
            NumPoints: {
                get: function () {
                    return this.points.Count;
                }
            },
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function NumAnchorPoints
             * @type number
             */
            NumAnchorPoints: {
                get: function () {
                    return (this.IsClosed) ? ((Bridge.Int.div(this.points.Count, 3)) | 0) : ((Bridge.Int.div((((this.points.Count + 2) | 0)), 3)) | 0);
                }
            },
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function NumSegments
             * @type number
             */
            NumSegments: {
                get: function () {
                    return ((Bridge.Int.div(this.points.Count, 3)) | 0);
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function Space
             * @type PathCreation.PathSpace
             */
            Space: {
                get: function () {
                    return this.space;
                },
                set: function (value) {
                    if (value !== this.space) {
                        var previousSpace = this.space;
                        this.space = value;
                        this.UpdateToNewPathSpace(previousSpace);
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function IsClosed
             * @type boolean
             */
            IsClosed: {
                get: function () {
                    return this.isClosed;
                },
                set: function (value) {
                    if (this.isClosed !== value) {
                        this.isClosed = value;
                        this.UpdateClosedState();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function ControlPointMode
             * @type number
             */
            ControlPointMode: {
                get: function () {
                    return this.controlMode;
                },
                set: function (value) {
                    if (this.controlMode !== value) {
                        this.controlMode = value;
                        if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                            this.AutoSetAllControlPoints();
                            this.NotifyPathModified();
                        }
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function AutoControlLength
             * @type number
             */
            AutoControlLength: {
                get: function () {
                    return this.autoControlLength;
                },
                set: function (value) {
                    value = UnityEngine.Mathf.Max(value, 0.01);
                    if (this.autoControlLength !== value) {
                        this.autoControlLength = value;
                        this.AutoSetAllControlPoints();
                        this.NotifyPathModified();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function FlipNormals
             * @type boolean
             */
            FlipNormals: {
                get: function () {
                    return this.flipNormals;
                },
                set: function (value) {
                    if (this.flipNormals !== value) {
                        this.flipNormals = value;
                        this.NotifyPathModified();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @memberof PathCreation.BezierPath
             * @function GlobalNormalsAngle
             * @type number
             */
            GlobalNormalsAngle: {
                get: function () {
                    return this.globalNormalsAngle;
                },
                set: function (value) {
                    if (value !== this.globalNormalsAngle) {
                        this.globalNormalsAngle = value;
                        this.NotifyPathModified();
                    }
                }
            },
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.BezierPath
             * @function PathBounds
             * @type UnityEngine.Bounds
             */
            PathBounds: {
                get: function () {
                    if (!this.boundsUpToDate) {
                        this.UpdateBounds();
                    }
                    return this.bounds;
                }
            }
        },
        ctors: {
            init: function () {
                this.bounds = new UnityEngine.Bounds();
                this.autoControlLength = 0.3;
            },
            /**
             * Creates a two-anchor path centred around the given centre point
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}       centre      
             * @param   {boolean}                   isClosed    Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}    space       Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            $ctor4: function (centre, isClosed, space) {
                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 0; }

                this.$initialize();

                var dir = (space === PathCreation.PathSpace.xz) ? new pc.Vec3( 0, 0, 1 ) : pc.Vec3.UP.clone();
                var width = 2;
                var controlHeight = 0.5;
                var controlWidth = 1.0;
                this.points = function (_o1) {
                        _o1.add(centre.$clone().add( pc.Vec3.LEFT.clone().scale( width ) ));
                        _o1.add(centre.$clone().add( pc.Vec3.LEFT.clone().scale( controlWidth ) ).add( dir.$clone().scale( controlHeight ) ));
                        _o1.add(centre.$clone().add( pc.Vec3.RIGHT.clone().scale( controlWidth ) ).sub( dir.$clone().scale( controlHeight ) ));
                        _o1.add(centre.$clone().add( pc.Vec3.RIGHT.clone().scale( width ) ));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor());

                this.perAnchorNormalsAngle = function (_o2) {
                        _o2.add(0);
                        _o2.add(0);
                        return _o2;
                    }(new (System.Collections.Generic.List$1(System.Single)).ctor());

                this.Space = space;
                this.IsClosed = isClosed;
            },
            /**
             * Creates a path from the supplied 3D points
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    points      List or array of points to create the path from.
             * @param   {boolean}                                     isClosed    Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}                      space       Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            $ctor3: function (points, isClosed, space) {
                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 0; }
                var $t;

                this.$initialize();
                var pointsArray = ($t = UnityEngine.Vector3, System.Linq.Enumerable.from(points, $t).ToArray($t));

                if (pointsArray.length < 2) {
                    UnityEngine.Debug.LogError$2("Path requires at least 2 anchor points.");
                } else {
                    this.controlMode = PathCreation.BezierPath.ControlMode.Automatic;
                    this.points = function (_o3) {
                            _o3.add(pointsArray[0].$clone());
                            _o3.add(pc.Vec3.ZERO.clone());
                            _o3.add(pc.Vec3.ZERO.clone());
                            _o3.add(pointsArray[1].$clone());
                            return _o3;
                        }(new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor());
                    this.perAnchorNormalsAngle = new (System.Collections.Generic.List$1(System.Single)).$ctor1(System.Array.init([0, 0], System.Single));

                    for (var i = 2; i < pointsArray.length; i = (i + 1) | 0) {
                        this.AddSegmentToEnd(pointsArray[i].$clone());
                        this.perAnchorNormalsAngle.add(0);
                    }
                }

                this.Space = space;
                this.IsClosed = isClosed;
            },
            /**
             * Creates a path from the positions of the supplied 2D points
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    transforms    List or array of transforms to create the path from.
             * @param   {boolean}                                     isClosed      Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}                      space         Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            $ctor2: function (transforms, isClosed, space) {
                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 1; }

                PathCreation.BezierPath.$ctor3.call(this, System.Linq.Enumerable.from(transforms, UnityEngine.Vector2).select(function (p) {
                        return new pc.Vec3( p.x, p.y, 0 );
                    }), isClosed, space);
            },
            /**
             * Creates a path from the positions of the supplied transforms
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    transforms    List or array of transforms to create the path from.
             * @param   {boolean}                                     isClosed      Should the end point connect back to the start point?
             * @param   {PathCreation.PathSpace}                      space         Determines if the path is in 3d space, or clamped to the xy/xz plane
             * @return  {void}
             */
            ctor: function (transforms, isClosed, space) {
                if (isClosed === void 0) { isClosed = false; }
                if (space === void 0) { space = 1; }

                PathCreation.BezierPath.$ctor3.call(this, System.Linq.Enumerable.from(transforms, UnityEngine.Transform).select(function (t) {
                        return t.position;
                    }), isClosed, space);
            },
            /**
             * Creates a path from the supplied 2D points
             *
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {System.Collections.Generic.IEnumerable$1}    points      List or array of 2d points to create the path from.
             * @param   {PathCreation.PathSpace}                      space       
             * @param   {boolean}                                     isClosed    Should the end point connect back to the start point?
             * @return  {void}
             */
            $ctor1: function (points, space, isClosed) {
                if (space === void 0) { space = 0; }
                if (isClosed === void 0) { isClosed = false; }

                PathCreation.BezierPath.$ctor3.call(this, System.Linq.Enumerable.from(points, UnityEngine.Vector2).select(function (p) {
                        return new pc.Vec3( p.x, p.y, 0 );
                    }), isClosed, space);
            }
        },
        methods: {
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i
             * @return  {UnityEngine.Vector3}
             */
            getItem: function (i) {
                return this.GetPoint(i);
            },
            /*PathCreation.BezierPath.GetPoint start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i
             * @return  {UnityEngine.Vector3}
             */
            GetPoint: function (i) {
                return this.points.getItem(i).$clone();
            },
            /*PathCreation.BezierPath.GetPoint end.*/

            /*PathCreation.BezierPath.SetPoint start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i                            
             * @param   {UnityEngine.Vector3}    localPosition                
             * @param   {boolean}                suppressPathModifiedEvent
             * @return  {void}
             */
            SetPoint: function (i, localPosition, suppressPathModifiedEvent) {
                if (suppressPathModifiedEvent === void 0) { suppressPathModifiedEvent = false; }
                this.points.setItem(i, localPosition.$clone());
                if (!suppressPathModifiedEvent) {
                    this.NotifyPathModified();
                }
            },
            /*PathCreation.BezierPath.SetPoint end.*/

            /*PathCreation.BezierPath.AddSegmentToEnd start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}    anchorPos
             * @return  {void}
             */
            AddSegmentToEnd: function (anchorPos) {
                if (this.isClosed) {
                    return;
                }

                var lastAnchorIndex = (this.points.Count - 1) | 0;
                // Set position for new control to be mirror of its counterpart
                var secondControlForOldLastAnchorOffset = (this.points.getItem(lastAnchorIndex).$clone().sub( this.points.getItem(((lastAnchorIndex - 1) | 0)) ));
                if (this.controlMode !== PathCreation.BezierPath.ControlMode.Mirrored && this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                    // Set position for new control to be aligned with its counterpart, but with a length of half the distance from prev to new anchor
                    var dstPrevToNewAnchor = (this.points.getItem(lastAnchorIndex).$clone().sub( anchorPos )).length();
                    secondControlForOldLastAnchorOffset = (this.points.getItem(lastAnchorIndex).$clone().sub( this.points.getItem(((lastAnchorIndex - 1) | 0)) )).clone().normalize().$clone().scale( dstPrevToNewAnchor ).scale( 0.5 );
                }
                var secondControlForOldLastAnchor = this.points.getItem(lastAnchorIndex).$clone().add( secondControlForOldLastAnchorOffset );
                var controlForNewAnchor = (anchorPos.$clone().add( secondControlForOldLastAnchor )).scale( 0.5 );

                this.points.add(secondControlForOldLastAnchor.$clone());
                this.points.add(controlForNewAnchor.$clone());
                this.points.add(anchorPos.$clone());
                this.perAnchorNormalsAngle.add(this.perAnchorNormalsAngle.getItem(((this.perAnchorNormalsAngle.Count - 1) | 0)));

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.AutoSetAllAffectedControlPoints(((this.points.Count - 1) | 0));
                }

                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.AddSegmentToEnd end.*/

            /*PathCreation.BezierPath.AddSegmentToStart start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}    anchorPos
             * @return  {void}
             */
            AddSegmentToStart: function (anchorPos) {
                if (this.isClosed) {
                    return;
                }

                // Set position for new control to be mirror of its counterpart
                var secondControlForOldFirstAnchorOffset = (this.points.getItem(0).$clone().sub( this.points.getItem(1) ));
                if (this.controlMode !== PathCreation.BezierPath.ControlMode.Mirrored && this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                    // Set position for new control to be aligned with its counterpart, but with a length of half the distance from prev to new anchor
                    var dstPrevToNewAnchor = (this.points.getItem(0).$clone().sub( anchorPos )).length();
                    secondControlForOldFirstAnchorOffset = secondControlForOldFirstAnchorOffset.clone().normalize().$clone().scale( dstPrevToNewAnchor ).scale( 0.5 );
                }

                var secondControlForOldFirstAnchor = this.points.getItem(0).$clone().add( secondControlForOldFirstAnchorOffset );
                var controlForNewAnchor = (anchorPos.$clone().add( secondControlForOldFirstAnchor )).scale( 0.5 );
                this.points.insert(0, anchorPos.$clone());
                this.points.insert(1, controlForNewAnchor.$clone());
                this.points.insert(2, secondControlForOldFirstAnchor.$clone());
                this.perAnchorNormalsAngle.insert(0, this.perAnchorNormalsAngle.getItem(0));

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.AutoSetAllAffectedControlPoints(0);
                }
                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.AddSegmentToStart end.*/

            /*PathCreation.BezierPath.SplitSegment start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Vector3}    anchorPos       
             * @param   {number}                 segmentIndex    
             * @param   {number}                 splitTime
             * @return  {void}
             */
            SplitSegment: function (anchorPos, segmentIndex, splitTime) {
                var $t, $t1, $t2, $t3, $t4, $t5, $t6, $t7;
                splitTime = Math.max(0, Math.min(1, splitTime));

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.points.InsertRange(((Bridge.Int.mul(segmentIndex, 3) + 2) | 0), System.Array.init([pc.Vec3.ZERO.clone(), anchorPos.$clone(), pc.Vec3.ZERO.clone()], UnityEngine.Vector3));
                    this.AutoSetAllAffectedControlPoints(((Bridge.Int.mul(segmentIndex, 3) + 3) | 0));
                } else {
                    // Split the curve to find where control points can be inserted to least affect shape of curve
                    // Curve will probably be deformed slightly since splitTime is only an estimate (for performance reasons, and so doesn't correspond exactly with anchorPos)
                    var splitSegment = PathCreation.Utility.CubicBezierUtility.SplitCurve(this.GetPointsInSegment(segmentIndex), splitTime);
                    this.points.InsertRange(((Bridge.Int.mul(segmentIndex, 3) + 2) | 0), System.Array.init([($t = splitSegment[0])[2].$clone(), ($t1 = splitSegment[1])[0].$clone(), ($t2 = splitSegment[1])[1].$clone()], UnityEngine.Vector3));
                    var newAnchorIndex = (Bridge.Int.mul(segmentIndex, 3) + 3) | 0;
                    this.MovePoint(((newAnchorIndex - 2) | 0), ($t3 = splitSegment[0])[1].$clone(), true);
                    this.MovePoint(((newAnchorIndex + 2) | 0), ($t4 = splitSegment[1])[2].$clone(), true);
                    this.MovePoint(newAnchorIndex, anchorPos.$clone(), true);

                    if (this.controlMode === PathCreation.BezierPath.ControlMode.Mirrored) {
                        var avgDst = ((($t5 = splitSegment[0])[2].$clone().sub( anchorPos )).length() + (($t6 = splitSegment[1])[1].$clone().sub( anchorPos )).length()) / 2;
                        this.MovePoint(((newAnchorIndex + 1) | 0), anchorPos.$clone().add( (($t7 = splitSegment[1])[1].$clone().sub( anchorPos )).clone().normalize().$clone().scale( avgDst ) ), true);
                    }
                }

                // Insert angle for new anchor (value should be set inbetween neighbour anchor angles)
                var newAnchorAngleIndex = (((segmentIndex + 1) | 0)) % this.perAnchorNormalsAngle.Count;
                var numAngles = this.perAnchorNormalsAngle.Count;
                var anglePrev = this.perAnchorNormalsAngle.getItem(segmentIndex);
                var angleNext = this.perAnchorNormalsAngle.getItem(newAnchorAngleIndex);
                var splitAngle = UnityEngine.Mathf.LerpAngle(anglePrev, angleNext, splitTime);
                this.perAnchorNormalsAngle.insert(newAnchorAngleIndex, splitAngle);

                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.SplitSegment end.*/

            /*PathCreation.BezierPath.DeleteSegment start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex
             * @return  {void}
             */
            DeleteSegment: function (anchorIndex) {
                // Don't delete segment if its the last one remaining (or if only two segments in a closed path)
                if (this.NumSegments > 2 || !this.isClosed && this.NumSegments > 1) {
                    if (anchorIndex === 0) {
                        if (this.isClosed) {
                            this.points.setItem(((this.points.Count - 1) | 0), this.points.getItem(2).$clone());
                        }
                        this.points.RemoveRange(0, 3);
                    } else if (anchorIndex === ((this.points.Count - 1) | 0) && !this.isClosed) {
                        this.points.RemoveRange(((anchorIndex - 2) | 0), 3);
                    } else {
                        this.points.RemoveRange(((anchorIndex - 1) | 0), 3);
                    }

                    this.perAnchorNormalsAngle.removeAt(((Bridge.Int.div(anchorIndex, 3)) | 0));

                    if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                        this.AutoSetAllControlPoints();
                    }

                    this.NotifyPathModified();
                }
            },
            /*PathCreation.BezierPath.DeleteSegment end.*/

            /*PathCreation.BezierPath.GetPointsInSegment start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                         segmentIndex
             * @return  {Array.<UnityEngine.Vector3>}
             */
            GetPointsInSegment: function (segmentIndex) {
                segmentIndex = Math.max(0, Math.min(segmentIndex, ((this.NumSegments - 1) | 0)));
                return System.Array.init([this.getItem(Bridge.Int.mul(segmentIndex, 3)).$clone(), this.getItem(((Bridge.Int.mul(segmentIndex, 3) + 1) | 0)).$clone(), this.getItem(((Bridge.Int.mul(segmentIndex, 3) + 2) | 0)).$clone(), this.getItem(this.LoopIndex(((Bridge.Int.mul(segmentIndex, 3) + 3) | 0))).$clone()], UnityEngine.Vector3);
            },
            /*PathCreation.BezierPath.GetPointsInSegment end.*/

            /*PathCreation.BezierPath.MovePoint start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}                 i                            
             * @param   {UnityEngine.Vector3}    pointPos                     
             * @param   {boolean}                suppressPathModifiedEvent
             * @return  {void}
             */
            MovePoint: function (i, pointPos, suppressPathModifiedEvent) {
                if (suppressPathModifiedEvent === void 0) { suppressPathModifiedEvent = false; }

                if (this.space === PathCreation.PathSpace.xy) {
                    pointPos.z = 0;
                } else if (this.space === PathCreation.PathSpace.xz) {
                    pointPos.y = 0;
                }
                var deltaMove = pointPos.$clone().sub( this.points.getItem(i) );
                var isAnchorPoint = i % 3 === 0;

                // Don't process control point if control mode is set to automatic
                if (isAnchorPoint || this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                    this.points.setItem(i, pointPos.$clone());

                    if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                        this.AutoSetAllAffectedControlPoints(i);
                    } else {
                        // Move control points with anchor point
                        if (isAnchorPoint) {
                            if (((i + 1) | 0) < this.points.Count || this.isClosed) {
                                this.points.setItem(this.LoopIndex(((i + 1) | 0)), this.points.getItem(this.LoopIndex(((i + 1) | 0))).$clone().add( deltaMove.$clone() ));
                            }
                            if (((i - 1) | 0) >= 0 || this.isClosed) {
                                this.points.setItem(this.LoopIndex(((i - 1) | 0)), this.points.getItem(this.LoopIndex(((i - 1) | 0))).$clone().add( deltaMove.$clone() ));
                            }
                        } else if (this.controlMode !== PathCreation.BezierPath.ControlMode.Free) {
                            var nextPointIsAnchor = (((i + 1) | 0)) % 3 === 0;
                            var attachedControlIndex = (nextPointIsAnchor) ? ((i + 2) | 0) : ((i - 2) | 0);
                            var anchorIndex = (nextPointIsAnchor) ? ((i + 1) | 0) : ((i - 1) | 0);

                            if (attachedControlIndex >= 0 && attachedControlIndex < this.points.Count || this.isClosed) {
                                var distanceFromAnchor = 0;
                                // If in aligned mode, then attached control's current distance from anchor point should be maintained
                                if (this.controlMode === PathCreation.BezierPath.ControlMode.Aligned) {
                                    distanceFromAnchor = (this.points.getItem(this.LoopIndex(anchorIndex)).$clone().sub( this.points.getItem(this.LoopIndex(attachedControlIndex)) )).length();
                                } else if (this.controlMode === PathCreation.BezierPath.ControlMode.Mirrored) {
                                    distanceFromAnchor = (this.points.getItem(this.LoopIndex(anchorIndex)).$clone().sub( this.points.getItem(i) )).length();

                                }
                                var dir = (this.points.getItem(this.LoopIndex(anchorIndex)).$clone().sub( pointPos )).clone().normalize().$clone();
                                this.points.setItem(this.LoopIndex(attachedControlIndex), this.points.getItem(this.LoopIndex(anchorIndex)).$clone().add( dir.$clone().scale( distanceFromAnchor ) ));
                            }
                        }
                    }

                    if (!suppressPathModifiedEvent) {
                        this.NotifyPathModified();
                    }
                }
            },
            /*PathCreation.BezierPath.MovePoint end.*/

            /*PathCreation.BezierPath.CalculateBoundsWithTransform start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {UnityEngine.Transform}    transform
             * @return  {UnityEngine.Bounds}
             */
            CalculateBoundsWithTransform: function (transform) {
                var $t;
                // Loop through all segments and keep track of the minmax points of all their bounding boxes
                var minMax = new PathCreation.MinMax3D();

                for (var i = 0; i < this.NumSegments; i = (i + 1) | 0) {
                    var p = this.GetPointsInSegment(i);
                    for (var j = 0; j < p.length; j = (j + 1) | 0) {
                        p[j] = PathCreation.Utility.MathUtility.TransformPoint(p[j].$clone(), transform, this.space);
                    }

                    minMax.AddValue(p[0].$clone());
                    minMax.AddValue(p[3].$clone());

                    var extremePointTimes = PathCreation.Utility.CubicBezierUtility.ExtremePointTimes(p[0].$clone(), p[1].$clone(), p[2].$clone(), p[3].$clone());
                    $t = Bridge.getEnumerator(extremePointTimes);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            minMax.AddValue(PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(p, t));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                return new pc.BoundingBox( (minMax.Min.$clone().add( minMax.Max )).scale( 1.0 / ( 2 ) ), minMax.Max.$clone().sub( minMax.Min ).scale( 0.5 ) );
            },
            /*PathCreation.BezierPath.CalculateBoundsWithTransform end.*/

            /*PathCreation.BezierPath.GetAnchorNormalAngle start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex
             * @return  {number}
             */
            GetAnchorNormalAngle: function (anchorIndex) {
                return this.perAnchorNormalsAngle.getItem(anchorIndex) % 360;
            },
            /*PathCreation.BezierPath.GetAnchorNormalAngle end.*/

            /*PathCreation.BezierPath.SetAnchorNormalAngle start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex    
             * @param   {number}    angle
             * @return  {void}
             */
            SetAnchorNormalAngle: function (anchorIndex, angle) {
                angle = (angle + 360) % 360;
                if (this.perAnchorNormalsAngle.getItem(anchorIndex) !== angle) {
                    this.perAnchorNormalsAngle.setItem(anchorIndex, angle);
                    this.NotifyPathModified();
                }
            },
            /*PathCreation.BezierPath.SetAnchorNormalAngle end.*/

            /*PathCreation.BezierPath.ResetNormalAngles start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            ResetNormalAngles: function () {
                for (var i = 0; i < this.perAnchorNormalsAngle.Count; i = (i + 1) | 0) {
                    this.perAnchorNormalsAngle.setItem(i, 0);
                }
                this.globalNormalsAngle = 0;
                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.ResetNormalAngles end.*/

            /*PathCreation.BezierPath.UpdateBounds start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            UpdateBounds: function () {
                var $t;
                if (this.boundsUpToDate) {
                    return;
                }

                // Loop through all segments and keep track of the minmax points of all their bounding boxes
                var minMax = new PathCreation.MinMax3D();

                for (var i = 0; i < this.NumSegments; i = (i + 1) | 0) {
                    var p = this.GetPointsInSegment(i);
                    minMax.AddValue(p[0].$clone());
                    minMax.AddValue(p[3].$clone());

                    var extremePointTimes = PathCreation.Utility.CubicBezierUtility.ExtremePointTimes(p[0].$clone(), p[1].$clone(), p[2].$clone(), p[3].$clone());
                    $t = Bridge.getEnumerator(extremePointTimes);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            minMax.AddValue(PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(p, t));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }

                this.boundsUpToDate = true;
                this.bounds = new pc.BoundingBox( (minMax.Min.$clone().add( minMax.Max )).scale( 1.0 / ( 2 ) ), minMax.Max.$clone().sub( minMax.Min ).scale( 0.5 ) );
            },
            /*PathCreation.BezierPath.UpdateBounds end.*/

            /*PathCreation.BezierPath.AutoSetAllAffectedControlPoints start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    updatedAnchorIndex
             * @return  {void}
             */
            AutoSetAllAffectedControlPoints: function (updatedAnchorIndex) {
                for (var i = (updatedAnchorIndex - 3) | 0; i <= ((updatedAnchorIndex + 3) | 0); i = (i + 3) | 0) {
                    if (i >= 0 && i < this.points.Count || this.isClosed) {
                        this.AutoSetAnchorControlPoints(this.LoopIndex(i));
                    }
                }

                this.AutoSetStartAndEndControls();
            },
            /*PathCreation.BezierPath.AutoSetAllAffectedControlPoints end.*/

            /*PathCreation.BezierPath.AutoSetAllControlPoints start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            AutoSetAllControlPoints: function () {
                if (this.NumAnchorPoints > 2) {
                    for (var i = 0; i < this.points.Count; i = (i + 3) | 0) {
                        this.AutoSetAnchorControlPoints(i);
                    }
                }

                this.AutoSetStartAndEndControls();
            },
            /*PathCreation.BezierPath.AutoSetAllControlPoints end.*/

            /*PathCreation.BezierPath.AutoSetAnchorControlPoints start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    anchorIndex
             * @return  {void}
             */
            AutoSetAnchorControlPoints: function (anchorIndex) {
                // Calculate a vector that is perpendicular to the vector bisecting the angle between this anchor and its two immediate neighbours
                // The control points will be placed along that vector
                var anchorPos = this.points.getItem(anchorIndex).$clone();
                var dir = pc.Vec3.ZERO.clone();
                var neighbourDistances = System.Array.init(2, 0, System.Single);

                if (((anchorIndex - 3) | 0) >= 0 || this.isClosed) {
                    var offset = this.points.getItem(this.LoopIndex(((anchorIndex - 3) | 0))).$clone().sub( anchorPos );
                    dir = dir.$clone().add( offset.clone().normalize().$clone() );
                    neighbourDistances[0] = offset.length();
                }
                if (((anchorIndex + 3) | 0) >= 0 || this.isClosed) {
                    var offset1 = this.points.getItem(this.LoopIndex(((anchorIndex + 3) | 0))).$clone().sub( anchorPos );
                    dir = dir.$clone().sub( offset1.clone().normalize().$clone() );
                    neighbourDistances[1] = -offset1.length();
                }

                dir.normalize();

                // Set the control points along the calculated direction, with a distance proportional to the distance to the neighbouring control point
                for (var i = 0; i < 2; i = (i + 1) | 0) {
                    var controlIndex = (((anchorIndex + Bridge.Int.mul(i, 2)) | 0) - 1) | 0;
                    if (controlIndex >= 0 && controlIndex < this.points.Count || this.isClosed) {
                        this.points.setItem(this.LoopIndex(controlIndex), anchorPos.$clone().add( dir.$clone().scale( neighbourDistances[i] ).scale( this.autoControlLength ) ));
                    }
                }
            },
            /*PathCreation.BezierPath.AutoSetAnchorControlPoints end.*/

            /*PathCreation.BezierPath.AutoSetStartAndEndControls start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            AutoSetStartAndEndControls: function () {
                if (this.isClosed) {
                    // Handle case with only 2 anchor points separately, as will otherwise result in straight line ()
                    if (this.NumAnchorPoints === 2) {
                        var dirAnchorAToB = (this.points.getItem(3).$clone().sub( this.points.getItem(0) )).clone().normalize().$clone();
                        var dstBetweenAnchors = (this.points.getItem(0).$clone().sub( this.points.getItem(3) )).length();
                        var perp = new pc.Vec3().cross( dirAnchorAToB, (this.space === PathCreation.PathSpace.xy) ? new pc.Vec3( 0, 0, 1 ) : pc.Vec3.UP.clone() );
                        this.points.setItem(1, this.points.getItem(0).$clone().add( perp.$clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));
                        this.points.setItem(5, this.points.getItem(0).$clone().sub( perp.$clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));
                        this.points.setItem(2, this.points.getItem(3).$clone().add( perp.$clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));
                        this.points.setItem(4, this.points.getItem(3).$clone().sub( perp.$clone().scale( dstBetweenAnchors ).scale( 1.0 / ( 2.0 ) ) ));

                    } else {
                        this.AutoSetAnchorControlPoints(0);
                        this.AutoSetAnchorControlPoints(((this.points.Count - 3) | 0));
                    }
                } else {
                    // Handle case with 2 anchor points separately, as otherwise minor adjustments cause path to constantly flip
                    if (this.NumAnchorPoints === 2) {
                        this.points.setItem(1, this.points.getItem(0).$clone().add( (this.points.getItem(3).$clone().sub( this.points.getItem(0) )).scale( 0.25 ) ));
                        this.points.setItem(2, this.points.getItem(3).$clone().add( (this.points.getItem(0).$clone().sub( this.points.getItem(3) )).scale( 0.25 ) ));
                    } else {
                        this.points.setItem(1, (this.points.getItem(0).$clone().add( this.points.getItem(2) )).scale( 0.5 ));
                        this.points.setItem(((this.points.Count - 2) | 0), (this.points.getItem(((this.points.Count - 1) | 0)).$clone().add( this.points.getItem(((this.points.Count - 3) | 0)) )).scale( 0.5 ));
                    }
                }
            },
            /*PathCreation.BezierPath.AutoSetStartAndEndControls end.*/

            /*PathCreation.BezierPath.UpdateToNewPathSpace start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {PathCreation.PathSpace}    previousSpace
             * @return  {void}
             */
            UpdateToNewPathSpace: function (previousSpace) {
                // If changing from 3d to 2d space, first find the bounds of the 3d path.
                // The axis with the smallest bounds will be discarded.
                if (previousSpace === PathCreation.PathSpace.xyz) {
                    var boundsSize = this.PathBounds.halfExtents.$clone().scale( 2 ).$clone();
                    var minBoundsSize = UnityEngine.Mathf.Min(boundsSize.x, boundsSize.y, boundsSize.z);

                    for (var i = 0; i < this.NumPoints; i = (i + 1) | 0) {
                        if (this.space === PathCreation.PathSpace.xy) {
                            var x = (minBoundsSize === boundsSize.x) ? this.points.getItem(i).$clone().z : this.points.getItem(i).$clone().x;
                            var y = (minBoundsSize === boundsSize.y) ? this.points.getItem(i).$clone().z : this.points.getItem(i).$clone().y;
                            this.points.setItem(i, new pc.Vec3( x, y, 0 ));
                        } else if (this.space === PathCreation.PathSpace.xz) {
                            var x1 = (minBoundsSize === boundsSize.x) ? this.points.getItem(i).$clone().y : this.points.getItem(i).$clone().x;
                            var z = (minBoundsSize === boundsSize.z) ? this.points.getItem(i).$clone().y : this.points.getItem(i).$clone().z;
                            this.points.setItem(i, new pc.Vec3( x1, 0, z ));
                        }
                    }
                } else {
                    // Nothing needs to change when going to 3d space
                    if (this.space !== PathCreation.PathSpace.xyz) {
                        for (var i1 = 0; i1 < this.NumPoints; i1 = (i1 + 1) | 0) {
                            // from xz to xy
                            if (this.space === PathCreation.PathSpace.xy) {
                                this.points.setItem(i1, new pc.Vec3( this.points.getItem(i1).$clone().x, this.points.getItem(i1).$clone().z, 0 ));
                            } else if (this.space === PathCreation.PathSpace.xz) {
                                this.points.setItem(i1, new pc.Vec3( this.points.getItem(i1).$clone().x, 0, this.points.getItem(i1).$clone().y ));
                            }
                        }
                    }
                }

                this.NotifyPathModified();
            },
            /*PathCreation.BezierPath.UpdateToNewPathSpace end.*/

            /*PathCreation.BezierPath.UpdateClosedState start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @return  {void}
             */
            UpdateClosedState: function () {
                if (this.isClosed) {
                    // Set positions for new controls to mirror their counterparts
                    var lastAnchorSecondControl = this.points.getItem(((this.points.Count - 1) | 0)).$clone().scale( 2 ).sub( this.points.getItem(((this.points.Count - 2) | 0)) );
                    var firstAnchorSecondControl = this.points.getItem(0).$clone().scale( 2 ).sub( this.points.getItem(1) );
                    if (this.controlMode !== PathCreation.BezierPath.ControlMode.Mirrored && this.controlMode !== PathCreation.BezierPath.ControlMode.Automatic) {
                        // Set positions for new controls to be aligned with their counterparts, but with a length of half the distance between start/end anchor
                        var dstBetweenStartAndEndAnchors = (this.points.getItem(((this.points.Count - 1) | 0)).$clone().sub( this.points.getItem(0) )).length();
                        lastAnchorSecondControl = this.points.getItem(((this.points.Count - 1) | 0)).$clone().add( (this.points.getItem(((this.points.Count - 1) | 0)).$clone().sub( this.points.getItem(((this.points.Count - 2) | 0)) )).clone().normalize().$clone().scale( dstBetweenStartAndEndAnchors ).scale( 0.5 ) );
                        firstAnchorSecondControl = this.points.getItem(0).$clone().add( (this.points.getItem(0).$clone().sub( this.points.getItem(1) )).clone().normalize().$clone().scale( dstBetweenStartAndEndAnchors ).scale( 0.5 ) );
                    }
                    this.points.add(lastAnchorSecondControl.$clone());
                    this.points.add(firstAnchorSecondControl.$clone());
                } else {
                    this.points.RemoveRange(((this.points.Count - 2) | 0), 2);

                }

                if (this.controlMode === PathCreation.BezierPath.ControlMode.Automatic) {
                    this.AutoSetStartAndEndControls();
                }

                if (!Bridge.staticEquals(this.OnModified, null)) {
                    this.OnModified();
                }
            },
            /*PathCreation.BezierPath.UpdateClosedState end.*/

            /*PathCreation.BezierPath.LoopIndex start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.BezierPath
             * @memberof PathCreation.BezierPath
             * @param   {number}    i
             * @return  {number}
             */
            LoopIndex: function (i) {
                return (((i + this.points.Count) | 0)) % this.points.Count;
            },
            /*PathCreation.BezierPath.LoopIndex end.*/

            /*PathCreation.BezierPath.NotifyPathModified start.*/
            NotifyPathModified: function () {
                this.boundsUpToDate = false;
                if (!Bridge.staticEquals(this.OnModified, null)) {
                    this.OnModified();
                }
            },
            /*PathCreation.BezierPath.NotifyPathModified end.*/


        }
    });
    /*PathCreation.BezierPath end.*/

    /*PathCreation.BezierPath+ControlMode start.*/
    Bridge.define("PathCreation.BezierPath.ControlMode", {
        $kind: "nested enum",
        statics: {
            fields: {
                Aligned: 0,
                Mirrored: 1,
                Free: 2,
                Automatic: 3
            }
        }
    });
    /*PathCreation.BezierPath+ControlMode end.*/

    /*PathCreation.EndOfPathInstruction start.*/
    Bridge.define("PathCreation.EndOfPathInstruction", {
        $kind: "enum",
        statics: {
            fields: {
                Loop: 0,
                Reverse: 1,
                Stop: 2
            }
        }
    });
    /*PathCreation.EndOfPathInstruction end.*/

    /*PathCreation.GlobalDisplaySettings start.*/
    Bridge.define("PathCreation.GlobalDisplaySettings", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            anchorSize: 0,
            controlSize: 0,
            visibleBehindObjects: false,
            visibleWhenNotSelected: false,
            hideAutoControls: false,
            anchorShape: 0,
            controlShape: 0,
            anchor: null,
            anchorHighlighted: null,
            anchorSelected: null,
            control: null,
            controlHighlighted: null,
            controlSelected: null,
            handleDisabled: null,
            controlLine: null,
            bezierPath: null,
            highlightedPath: null,
            bounds: null,
            segmentBounds: null,
            vertexPath: null,
            normals: null,
            normalsLength: 0
        },
        ctors: {
            init: function () {
                this.anchor = new UnityEngine.Color();
                this.anchorHighlighted = new UnityEngine.Color();
                this.anchorSelected = new UnityEngine.Color();
                this.control = new UnityEngine.Color();
                this.controlHighlighted = new UnityEngine.Color();
                this.controlSelected = new UnityEngine.Color();
                this.handleDisabled = new UnityEngine.Color();
                this.controlLine = new UnityEngine.Color();
                this.bezierPath = new UnityEngine.Color();
                this.highlightedPath = new UnityEngine.Color();
                this.bounds = new UnityEngine.Color();
                this.segmentBounds = new UnityEngine.Color();
                this.vertexPath = new UnityEngine.Color();
                this.normals = new UnityEngine.Color();
                this.anchorSize = 10;
                this.controlSize = 7.0;
                this.visibleBehindObjects = true;
                this.visibleWhenNotSelected = true;
                this.hideAutoControls = true;
                this.anchor = new pc.Color( 0.95, 0.25, 0.25, 0.85 );
                this.anchorHighlighted = new pc.Color( 1, 0.57, 0.4, 1 );
                this.anchorSelected = new pc.Color( 1, 1, 1, 1 );
                this.control = new pc.Color( 0.35, 0.6, 1, 0.85 );
                this.controlHighlighted = new pc.Color( 0.8, 0.67, 0.97, 1 );
                this.controlSelected = new pc.Color( 1, 1, 1, 1 );
                this.handleDisabled = new pc.Color( 1, 1, 1, 0.2 );
                this.controlLine = new pc.Color( 0, 0, 0, 0.35 );
                this.bezierPath = new pc.Color( 0, 1, 0, 1 );
                this.highlightedPath = new pc.Color( 1, 0.6, 0, 1 );
                this.bounds = new pc.Color( 1, 1, 1, 0.4 );
                this.segmentBounds = new pc.Color( 1, 1, 1, 0.4 );
                this.vertexPath = new pc.Color( 1, 1, 1, 1 );
                this.normals = new pc.Color( 1, 1, 0, 1 );
                this.normalsLength = 0.1;
            }
        }
    });
    /*PathCreation.GlobalDisplaySettings end.*/

    /*PathCreation.GlobalDisplaySettings+HandleType start.*/
    Bridge.define("PathCreation.GlobalDisplaySettings.HandleType", {
        $kind: "nested enum",
        statics: {
            fields: {
                Sphere: 0,
                Circle: 1,
                Square: 2
            }
        }
    });
    /*PathCreation.GlobalDisplaySettings+HandleType end.*/

    /*PathCreation.MinMax3D start.*/
    Bridge.define("PathCreation.MinMax3D", {
        fields: {
            Min: null,
            Max: null
        },
        ctors: {
            init: function () {
                this.Min = new UnityEngine.Vector3();
                this.Max = new UnityEngine.Vector3();
            },
            ctor: function () {
                this.$initialize();
                this.Min = new pc.Vec3( 1, 1, 1 ).scale( 3.40282347E+38 );
                this.Max = new pc.Vec3( 1, 1, 1 ).scale( -3.40282347E+38 );
            }
        },
        methods: {
            /*PathCreation.MinMax3D.AddValue start.*/
            AddValue: function (v) {
                this.Min = new pc.Vec3( UnityEngine.Mathf.Min(this.Min.x, v.x), UnityEngine.Mathf.Min(this.Min.y, v.y), UnityEngine.Mathf.Min(this.Min.z, v.z) );
                this.Max = new pc.Vec3( UnityEngine.Mathf.Max(this.Max.x, v.x), UnityEngine.Mathf.Max(this.Max.y, v.y), UnityEngine.Mathf.Max(this.Max.z, v.z) );
            },
            /*PathCreation.MinMax3D.AddValue end.*/


        }
    });
    /*PathCreation.MinMax3D end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @return  {void}
     */


    /*PathCreation.PathCreator start.*/
    Bridge.define("PathCreation.PathCreator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            editorData: null,
            initialized: false,
            globalEditorDisplaySettings: null
        },
        events: {
            /**
             * @instance
             * @public
             * @this PathCreation.PathCreator
             * @memberof PathCreation.PathCreator
             * @function addpathUpdated
             * @param   {System.Action}    value
             * @return  {void}
             */
            /**
             * @instance
             * @public
             * @this PathCreation.PathCreator
             * @memberof PathCreation.PathCreator
             * @function removepathUpdated
             * @param   {System.Action}    value
             * @return  {void}
             */
            pathUpdated: null
        },
        props: {
            path: {
                get: function () {
                    if (!this.initialized) {
                        this.InitializeEditorData(false);
                    }
                    return this.editorData.GetVertexPath(this.transform);
                }
            },
            bezierPath: {
                get: function () {
                    if (!this.initialized) {
                        this.InitializeEditorData(false);
                    }
                    return this.editorData.bezierPath;
                },
                set: function (value) {
                    if (!this.initialized) {
                        this.InitializeEditorData(false);
                    }
                    this.editorData.bezierPath = value;
                }
            },
            EditorData: {
                get: function () {
                    return this.editorData;
                }
            }
        },
        methods: {
            /*PathCreation.PathCreator.GetPos start.*/
            GetPos: function (distance, perpendicularOffset) {
                var pointOnPath = this.path.GetPointAtDistance(distance);
                var pathParallel = this.path.GetDirectionAtDistance(distance);
                var pathPerpendicular = new pc.Vec3().cross( pathParallel, pc.Vec3.UP.clone() ).clone().normalize().$clone().scale( -1 );
                return pointOnPath.$clone().add( pathPerpendicular.$clone().scale( perpendicularOffset ) );
            },
            /*PathCreation.PathCreator.GetPos end.*/

            /*PathCreation.PathCreator.InitializeEditorData start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.PathCreator
             * @memberof PathCreation.PathCreator
             * @param   {boolean}    in2DMode
             * @return  {void}
             */
            InitializeEditorData: function (in2DMode) {
                if (this.editorData == null) {
                    this.editorData = new PathCreation.PathCreatorData();
                }
                this.editorData.removebezierOrVertexPathModified(Bridge.fn.cacheBind(this, this.TriggerPathUpdate));
                this.editorData.addbezierOrVertexPathModified(Bridge.fn.cacheBind(this, this.TriggerPathUpdate));

                this.editorData.Initialize(in2DMode);
                this.initialized = true;
            },
            /*PathCreation.PathCreator.InitializeEditorData end.*/

            /*PathCreation.PathCreator.TriggerPathUpdate start.*/
            TriggerPathUpdate: function () {
                if (!Bridge.staticEquals(this.pathUpdated, null)) {
                    this.pathUpdated();
                }
            },
            /*PathCreation.PathCreator.TriggerPathUpdate end.*/


        }
    });
    /*PathCreation.PathCreator end.*/

    /*PathCreation.PathCreatorData start.*/
    /**
     * @public
     * @class PathCreation.PathCreatorData
     */
    Bridge.define("PathCreation.PathCreatorData", {
        fields: {
            _bezierPath: null,
            _vertexPath: null,
            vertexPathUpToDate: false,
            vertexPathMaxAngleError: 0,
            vertexPathMinVertexSpacing: 0,
            showTransformTool: false,
            showPathBounds: false,
            showPerSegmentBounds: false,
            displayAnchorPoints: false,
            displayControlPoints: false,
            bezierHandleScale: 0,
            globalDisplaySettingsFoldout: false,
            keepConstantHandleSize: false,
            showNormalsInVertexMode: false,
            showBezierPathInVertexMode: false,
            showDisplayOptions: false,
            showPathOptions: false,
            showVertexPathDisplayOptions: false,
            showVertexPathOptions: false,
            showNormals: false,
            showNormalsHelpInfo: false,
            tabIndex: 0
        },
        events: {
            bezierOrVertexPathModified: null,
            bezierCreated: null
        },
        props: {
            bezierPath: {
                get: function () {
                    return this._bezierPath;
                },
                set: function (value) {
                    this._bezierPath.removeOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                    this.vertexPathUpToDate = false;
                    this._bezierPath = value;
                    this._bezierPath.addOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));

                    if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                        this.bezierOrVertexPathModified();
                    }
                    if (!Bridge.staticEquals(this.bezierCreated, null)) {
                        this.bezierCreated();
                    }

                }
            }
        },
        ctors: {
            init: function () {
                this.vertexPathMaxAngleError = 0.3;
                this.vertexPathMinVertexSpacing = 0.01;
                this.showTransformTool = true;
                this.displayAnchorPoints = true;
                this.displayControlPoints = true;
                this.bezierHandleScale = 1;
                this.showPathOptions = true;
                this.showVertexPathOptions = true;
            }
        },
        methods: {
            /*PathCreation.PathCreatorData.Initialize start.*/
            Initialize: function (defaultIs2D) {
                if (this._bezierPath == null) {
                    this.CreateBezier(pc.Vec3.ZERO.clone(), defaultIs2D);
                }
                this.vertexPathUpToDate = false;
                this._bezierPath.removeOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                this._bezierPath.addOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
            },
            /*PathCreation.PathCreatorData.Initialize end.*/

            /*PathCreation.PathCreatorData.ResetBezierPath start.*/
            ResetBezierPath: function (centre, defaultIs2D) {
                if (defaultIs2D === void 0) { defaultIs2D = false; }
                this.CreateBezier(centre.$clone(), defaultIs2D);
            },
            /*PathCreation.PathCreatorData.ResetBezierPath end.*/

            /*PathCreation.PathCreatorData.CreateBezier start.*/
            CreateBezier: function (centre, defaultIs2D) {
                if (defaultIs2D === void 0) { defaultIs2D = false; }
                if (this._bezierPath != null) {
                    this._bezierPath.removeOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                }

                var space = (defaultIs2D) ? PathCreation.PathSpace.xy : PathCreation.PathSpace.xyz;
                this._bezierPath = new PathCreation.BezierPath.$ctor4(centre.$clone(), false, space);

                this._bezierPath.addOnModified(Bridge.fn.cacheBind(this, this.BezierPathEdited));
                this.vertexPathUpToDate = false;

                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
                if (!Bridge.staticEquals(this.bezierCreated, null)) {
                    this.bezierCreated();
                }
            },
            /*PathCreation.PathCreatorData.CreateBezier end.*/

            /*PathCreation.PathCreatorData.GetVertexPath start.*/
            GetVertexPath: function (transform) {
                // create new vertex path if path was modified since this vertex path was created
                if (!this.vertexPathUpToDate || this._vertexPath == null) {
                    this.vertexPathUpToDate = true;
                    this._vertexPath = new PathCreation.VertexPath.$ctor2(this.bezierPath, transform, this.vertexPathMaxAngleError, this.vertexPathMinVertexSpacing);
                }
                return this._vertexPath;
            },
            /*PathCreation.PathCreatorData.GetVertexPath end.*/

            /*PathCreation.PathCreatorData.PathTransformed start.*/
            PathTransformed: function () {
                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.PathTransformed end.*/

            /*PathCreation.PathCreatorData.VertexPathSettingsChanged start.*/
            VertexPathSettingsChanged: function () {
                this.vertexPathUpToDate = false;
                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.VertexPathSettingsChanged end.*/

            /*PathCreation.PathCreatorData.PathModifiedByUndo start.*/
            PathModifiedByUndo: function () {
                this.vertexPathUpToDate = false;
                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.PathModifiedByUndo end.*/

            /*PathCreation.PathCreatorData.BezierPathEdited start.*/
            BezierPathEdited: function () {
                this.vertexPathUpToDate = false;
                if (!Bridge.staticEquals(this.bezierOrVertexPathModified, null)) {
                    this.bezierOrVertexPathModified();
                }
            },
            /*PathCreation.PathCreatorData.BezierPathEdited end.*/


        }
    });
    /*PathCreation.PathCreatorData end.*/

    /*PathCreation.PathSpace start.*/
    Bridge.define("PathCreation.PathSpace", {
        $kind: "enum",
        statics: {
            fields: {
                xyz: 0,
                xy: 1,
                xz: 2
            }
        }
    });
    /*PathCreation.PathSpace end.*/

    /*PathCreation.Utility.CubicBezierUtility start.*/
    /** @namespace PathCreation.Utility */

    /**
     * @static
     * @abstract
     * @public
     * @class PathCreation.Utility.CubicBezierUtility
     */
    Bridge.define("PathCreation.Utility.CubicBezierUtility", {
        statics: {
            methods: {
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurve$1: function (points, t) {
                    return PathCreation.Utility.CubicBezierUtility.EvaluateCurve(points[0].$clone(), points[1].$clone(), points[2].$clone(), points[3].$clone(), t);
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurve: function (a1, c1, c2, a2, t) {
                    t = Math.max(0, Math.min(1, t));
                    return a1.$clone().scale( (1 - t) * (1 - t) * (1 - t) ).add( c1.$clone().scale( 3 * (1 - t) * (1 - t) * t ) ).add( c2.$clone().scale( 3 * (1 - t) * t * t ) ).add( a2.$clone().scale( t * t * t ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurve:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveDerivative$1: function (points, t) {
                    return PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative(points[0].$clone(), points[1].$clone(), points[2].$clone(), points[3].$clone(), t);
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveDerivative: function (a1, c1, c2, a2, t) {
                    t = Math.max(0, Math.min(1, t));
                    return (c1.$clone().sub( a1 )).scale( 3 * (1 - t) * (1 - t) ).add( (c2.$clone().sub( c1 )).scale( 6 * (1 - t) * t ) ).add( (a2.$clone().sub( c2 )).scale( 3 * t * t ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveSecondDerivative$1: function (points, t) {
                    return PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative(points[0].$clone(), points[1].$clone(), points[2].$clone(), points[3].$clone(), t);
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                EvaluateCurveSecondDerivative: function (a1, c1, c2, a2, t) {
                    t = Math.max(0, Math.min(1, t));
                    return (c2.$clone().sub( c1.$clone().scale( 2 ) ).add( a1 )).scale( 6 * (1 - t) ).add( (a2.$clone().sub( c2.$clone().scale( 2 ) ).add( c1 )).scale( 6 * t ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.Normal$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}    points    
                 * @param   {number}                         t
                 * @return  {UnityEngine.Vector3}
                 */
                Normal$1: function (points, t) {
                    return PathCreation.Utility.CubicBezierUtility.Normal(points[0].$clone(), points[1].$clone(), points[2].$clone(), points[3].$clone(), t);
                },
                /*PathCreation.Utility.CubicBezierUtility.Normal$1:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.Normal:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}    a1    
                 * @param   {UnityEngine.Vector3}    c1    
                 * @param   {UnityEngine.Vector3}    c2    
                 * @param   {UnityEngine.Vector3}    a2    
                 * @param   {number}                 t
                 * @return  {UnityEngine.Vector3}
                 */
                Normal: function (a1, c1, c2, a2, t) {
                    var tangent = PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative(a1.$clone(), c1.$clone(), c2.$clone(), a2.$clone(), t);
                    var nextTangent = PathCreation.Utility.CubicBezierUtility.EvaluateCurveSecondDerivative(a1.$clone(), c1.$clone(), c2.$clone(), a2.$clone(), t);
                    var c = new pc.Vec3().cross( nextTangent, tangent );
                    return new pc.Vec3().cross( c, tangent ).clone().normalize().$clone();
                },
                /*PathCreation.Utility.CubicBezierUtility.Normal:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.CalculateSegmentBounds:static start.*/
                CalculateSegmentBounds: function (p0, p1, p2, p3) {
                    var $t;
                    var minMax = new PathCreation.MinMax3D();
                    minMax.AddValue(p0.$clone());
                    minMax.AddValue(p3.$clone());

                    var extremePointTimes = PathCreation.Utility.CubicBezierUtility.ExtremePointTimes(p0.$clone(), p1.$clone(), p2.$clone(), p3.$clone());
                    $t = Bridge.getEnumerator(extremePointTimes);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            minMax.AddValue(PathCreation.Utility.CubicBezierUtility.EvaluateCurve(p0.$clone(), p1.$clone(), p2.$clone(), p3.$clone(), t));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    return new pc.BoundingBox( (minMax.Min.$clone().add( minMax.Max )).scale( 1.0 / ( 2 ) ), minMax.Max.$clone().sub( minMax.Min ).scale( 0.5 ) );
                },
                /*PathCreation.Utility.CubicBezierUtility.CalculateSegmentBounds:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.SplitCurve:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {Array.<UnityEngine.Vector3>}            points    
                 * @param   {number}                                 t
                 * @return  {Array.<Array.<UnityEngine.Vector3>>}
                 */
                SplitCurve: function (points, t) {
                    var a1 = new pc.Vec3().lerp( points[0], points[1], t );
                    var a2 = new pc.Vec3().lerp( points[1], points[2], t );
                    var a3 = new pc.Vec3().lerp( points[2], points[3], t );
                    var b1 = new pc.Vec3().lerp( a1, a2, t );
                    var b2 = new pc.Vec3().lerp( a2, a3, t );
                    var pointOnCurve = new pc.Vec3().lerp( b1, b2, t );

                    return System.Array.init([System.Array.init([points[0].$clone(), a1.$clone(), b1.$clone(), pointOnCurve.$clone()], UnityEngine.Vector3), System.Array.init([pointOnCurve.$clone(), b2.$clone(), a3.$clone(), points[3].$clone()], UnityEngine.Vector3)], System.Array.type(UnityEngine.Vector3));
                },
                /*PathCreation.Utility.CubicBezierUtility.SplitCurve:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.EstimateCurveLength:static start.*/
                EstimateCurveLength: function (p0, p1, p2, p3) {
                    var controlNetLength = (p0.$clone().sub( p1 )).length() + (p1.$clone().sub( p2 )).length() + (p2.$clone().sub( p3 )).length();
                    var estimatedCurveLength = (p0.$clone().sub( p3 )).length() + controlNetLength / 2.0;
                    return estimatedCurveLength;
                },
                /*PathCreation.Utility.CubicBezierUtility.EstimateCurveLength:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.ExtremePointTimes:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.CubicBezierUtility
                 * @memberof PathCreation.Utility.CubicBezierUtility
                 * @param   {UnityEngine.Vector3}                  p0    
                 * @param   {UnityEngine.Vector3}                  p1    
                 * @param   {UnityEngine.Vector3}                  p2    
                 * @param   {UnityEngine.Vector3}                  p3
                 * @return  {System.Collections.Generic.List$1}
                 */
                ExtremePointTimes: function (p0, p1, p2, p3) {
                    // coefficients of derivative function
                    var a = (p0.$clone().scale( -1 ).add( p1.$clone().scale( 3 ) ).sub( p2.$clone().scale( 3 ) ).add( p3 )).scale( 3 );
                    var b = (p0.$clone().sub( p1.$clone().scale( 2 ) ).add( p2 )).scale( 6 );
                    var c = (p1.$clone().sub( p0 )).scale( 3 );

                    var times = new (System.Collections.Generic.List$1(System.Single)).ctor();
                    times.AddRange(PathCreation.Utility.CubicBezierUtility.StationaryPointTimes(a.x, b.x, c.x));
                    times.AddRange(PathCreation.Utility.CubicBezierUtility.StationaryPointTimes(a.y, b.y, c.y));
                    times.AddRange(PathCreation.Utility.CubicBezierUtility.StationaryPointTimes(a.z, b.z, c.z));
                    return times;
                },
                /*PathCreation.Utility.CubicBezierUtility.ExtremePointTimes:static end.*/

                /*PathCreation.Utility.CubicBezierUtility.StationaryPointTimes:static start.*/
                StationaryPointTimes: function (a, b, c) {
                    var times = new (System.Collections.Generic.List$1(System.Single)).ctor();

                    // from quadratic equation: y = [-b +- sqrt(b^2 - 4ac)]/2a
                    if (a !== 0) {
                        var discriminant = b * b - 4 * a * c;
                        if (discriminant >= 0) {
                            var s = Math.sqrt(discriminant);
                            var t1 = (-b + s) / (2 * a);
                            if (t1 >= 0 && t1 <= 1) {
                                times.add(t1);
                            }

                            if (discriminant !== 0) {
                                var t2 = (-b - s) / (2 * a);

                                if (t2 >= 0 && t2 <= 1) {
                                    times.add(t2);
                                }
                            }
                        }
                    }
                    return times;
                },
                /*PathCreation.Utility.CubicBezierUtility.StationaryPointTimes:static end.*/


            }
        }
    });
    /*PathCreation.Utility.CubicBezierUtility end.*/

    /*PathCreation.Utility.MathUtility start.*/
    Bridge.define("PathCreation.Utility.MathUtility", {
        statics: {
            methods: {
                /*PathCreation.Utility.MathUtility.LockTransformToSpace:static start.*/
                LockTransformToSpace: function (t, space) {
                    var original = new PathCreation.Utility.MathUtility.PosRotScale(t);
                    if (space === PathCreation.PathSpace.xy) {
                        t.eulerAngles = new pc.Vec3( 0, 0, t.eulerAngles.z );
                        t.position = new pc.Vec3( t.position.x, t.position.y, 0 );
                    } else if (space === PathCreation.PathSpace.xz) {
                        t.eulerAngles = new pc.Vec3( 0, t.eulerAngles.y, 0 );
                        t.position = new pc.Vec3( t.position.x, 0, t.position.z );
                    }

                    //float maxScale = Mathf.Max (t.localScale.x * t.parent.localScale.x, t.localScale.y * t.parent.localScale.y, t.localScale.z * t.parent.localScale.z);
                    var maxScale = UnityEngine.Mathf.Max(t.lossyScale.x, t.lossyScale.y, t.lossyScale.z);

                    t.localScale = new pc.Vec3( 1, 1, 1 ).scale( maxScale );

                    return original;
                },
                /*PathCreation.Utility.MathUtility.LockTransformToSpace:static end.*/

                /*PathCreation.Utility.MathUtility.TransformPoint:static start.*/
                TransformPoint: function (p, t, space) {
                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.TransformPoint$1(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.TransformPoint:static end.*/

                /*PathCreation.Utility.MathUtility.InverseTransformPoint:static start.*/
                InverseTransformPoint: function (p, t, space) {
                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.InverseTransformPoint(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.InverseTransformPoint:static end.*/

                /*PathCreation.Utility.MathUtility.TransformVector:static start.*/
                TransformVector: function (p, t, space) {
                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.TransformVector(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.TransformVector:static end.*/

                /*PathCreation.Utility.MathUtility.InverseTransformVector:static start.*/
                InverseTransformVector: function (p, t, space) {
                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.InverseTransformVector(p);
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.InverseTransformVector:static end.*/

                /*PathCreation.Utility.MathUtility.TransformDirection:static start.*/
                TransformDirection: function (p, t, space) {
                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.TransformDirection(p.$clone());
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.TransformDirection:static end.*/

                /*PathCreation.Utility.MathUtility.InverseTransformDirection:static start.*/
                InverseTransformDirection: function (p, t, space) {
                    var original = PathCreation.Utility.MathUtility.LockTransformToSpace(t, space);
                    var transformedPoint = t.InverseTransformDirection(p.$clone());
                    original.SetTransform(t);
                    return transformedPoint.$clone();
                },
                /*PathCreation.Utility.MathUtility.InverseTransformDirection:static end.*/

                /*PathCreation.Utility.MathUtility.LineSegmentsIntersect:static start.*/
                LineSegmentsIntersect: function (a1, a2, b1, b2) {
                    var d = (b2.x - b1.x) * (a1.y - a2.y) - (a1.x - a2.x) * (b2.y - b1.y);
                    if (d === 0) {
                        return false;
                    }
                    var t = ((b1.y - b2.y) * (a1.x - b1.x) + (b2.x - b1.x) * (a1.y - b1.y)) / d;
                    var u = ((a1.y - a2.y) * (a1.x - b1.x) + (a2.x - a1.x) * (a1.y - b1.y)) / d;

                    return t >= 0 && t <= 1 && u >= 0 && u <= 1;
                },
                /*PathCreation.Utility.MathUtility.LineSegmentsIntersect:static end.*/

                /*PathCreation.Utility.MathUtility.LinesIntersect:static start.*/
                LinesIntersect: function (a1, a2, a3, a4) {
                    return (a1.x - a2.x) * (a3.y - a4.y) - (a1.y - a2.y) * (a3.x - a4.x) !== 0;
                },
                /*PathCreation.Utility.MathUtility.LinesIntersect:static end.*/

                /*PathCreation.Utility.MathUtility.PointOfLineLineIntersection:static start.*/
                PointOfLineLineIntersection: function (a1, a2, a3, a4) {
                    var d = (a1.x - a2.x) * (a3.y - a4.y) - (a1.y - a2.y) * (a3.x - a4.x);
                    if (d === 0) {
                        UnityEngine.Debug.LogError$2("Lines are parallel, please check that this is not the case before calling line intersection method");
                        return pc.Vec2.ZERO.clone();
                    } else {
                        var n = (a1.x - a3.x) * (a3.y - a4.y) - (a1.y - a3.y) * (a3.x - a4.x);
                        var t = n / d;
                        return a1.$clone().add( (a2.$clone().sub( a1 )).scale( t ) );
                    }
                },
                /*PathCreation.Utility.MathUtility.PointOfLineLineIntersection:static end.*/

                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment:static start.*/
                ClosestPointOnLineSegment: function (p, a, b) {
                    var aB = b.$clone().sub( a );
                    var aP = p.$clone().sub( a );
                    var sqrLenAB = aB.lengthSq();

                    if (sqrLenAB === 0) {
                        return a.$clone();
                    }

                    var t = Math.max(0, Math.min(1, aP.dot( aB ) / sqrLenAB));
                    return a.$clone().add( aB.$clone().scale( t ) );
                },
                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment:static end.*/

                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment$1:static start.*/
                ClosestPointOnLineSegment$1: function (p, a, b) {
                    var aB = b.$clone().sub( a );
                    var aP = p.$clone().sub( a );
                    var sqrLenAB = aB.lengthSq();

                    if (sqrLenAB === 0) {
                        return a.$clone();
                    }

                    var t = Math.max(0, Math.min(1, aP.dot( aB ) / sqrLenAB));
                    return a.$clone().add( aB.$clone().scale( t ) );
                },
                /*PathCreation.Utility.MathUtility.ClosestPointOnLineSegment$1:static end.*/

                /*PathCreation.Utility.MathUtility.SideOfLine:static start.*/
                SideOfLine: function (a, b, c) {
                    var $t;
                    return Bridge.Int.clip32(($t = (c.x - a.x) * (-b.y + a.y) + (c.y - a.y) * (b.x - a.x), ($t === 0 ? 1 : Math.sign($t))));
                },
                /*PathCreation.Utility.MathUtility.SideOfLine:static end.*/

                /*PathCreation.Utility.MathUtility.MinAngle:static start.*/
                /**
                 * @static
                 * @public
                 * @this PathCreation.Utility.MathUtility
                 * @memberof PathCreation.Utility.MathUtility
                 * @param   {UnityEngine.Vector3}    a    
                 * @param   {UnityEngine.Vector3}    b    
                 * @param   {UnityEngine.Vector3}    c
                 * @return  {number}
                 */
                MinAngle: function (a, b, c) {
                    return Math.acos( pc.math.clamp( (a.$clone().sub( b )).clone().normalize().dot( (c.$clone().sub( b )).clone().normalize() ), -1, 1 ) ) * pc.math.RAD_TO_DEG;
                },
                /*PathCreation.Utility.MathUtility.MinAngle:static end.*/

                /*PathCreation.Utility.MathUtility.PointInTriangle:static start.*/
                PointInTriangle: function (a, b, c, p) {
                    var area = 0.5 * (-b.y * c.x + a.y * (-b.x + c.x) + a.x * (b.y - c.y) + b.x * c.y);
                    var s = 1 / (2 * area) * (a.y * c.x - a.x * c.y + (c.y - a.y) * p.x + (a.x - c.x) * p.y);
                    var t = 1 / (2 * area) * (a.x * b.y - a.y * b.x + (a.y - b.y) * p.x + (b.x - a.x) * p.y);
                    return s >= 0 && t >= 0 && (s + t) <= 1;
                },
                /*PathCreation.Utility.MathUtility.PointInTriangle:static end.*/

                /*PathCreation.Utility.MathUtility.PointsAreClockwise:static start.*/
                PointsAreClockwise: function (points) {
                    var signedArea = 0;
                    for (var i = 0; i < points.length; i = (i + 1) | 0) {
                        var nextIndex = (((i + 1) | 0)) % points.length;
                        signedArea += (points[nextIndex].x - points[i].x) * (points[nextIndex].y + points[i].y);
                    }

                    return signedArea >= 0;
                },
                /*PathCreation.Utility.MathUtility.PointsAreClockwise:static end.*/


            }
        }
    });
    /*PathCreation.Utility.MathUtility end.*/

    /*PathCreation.Utility.MathUtility+PosRotScale start.*/
    Bridge.define("PathCreation.Utility.MathUtility.PosRotScale", {
        $kind: "nested class",
        fields: {
            position: null,
            rotation: null,
            scale: null
        },
        ctors: {
            init: function () {
                this.position = new UnityEngine.Vector3();
                this.rotation = new UnityEngine.Quaternion();
                this.scale = new UnityEngine.Vector3();
            },
            ctor: function (t) {
                this.$initialize();
                this.position = t.position.$clone();
                this.rotation = t.rotation.$clone();
                this.scale = t.localScale.$clone();
            }
        },
        methods: {
            /*PathCreation.Utility.MathUtility+PosRotScale.SetTransform start.*/
            SetTransform: function (t) {
                t.position = this.position.$clone();
                t.rotation = this.rotation.$clone();
                t.localScale = this.scale.$clone();

            },
            /*PathCreation.Utility.MathUtility+PosRotScale.SetTransform end.*/


        }
    });
    /*PathCreation.Utility.MathUtility+PosRotScale end.*/

    /*PathCreation.Utility.VertexPathUtility start.*/
    Bridge.define("PathCreation.Utility.VertexPathUtility", {
        statics: {
            methods: {
                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathByAngleError:static start.*/
                SplitBezierPathByAngleError: function (bezierPath, maxAngleError, minVertexDst, accuracy) {
                    var splitData = new PathCreation.Utility.VertexPathUtility.PathSplitData();

                    splitData.vertices.add(bezierPath.getItem(0).$clone());
                    splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(bezierPath.GetPointsInSegment(0), 0).clone().normalize().$clone());
                    splitData.cumulativeLength.add(0);
                    splitData.anchorVertexMap.add(0);
                    splitData.minMax.AddValue(bezierPath.getItem(0).$clone());

                    var prevPointOnPath = bezierPath.getItem(0).$clone();
                    var lastAddedPoint = bezierPath.getItem(0).$clone();

                    var currentPathLength = 0;
                    var dstSinceLastVertex = 0;

                    // Go through all segments and split up into vertices
                    for (var segmentIndex = 0; segmentIndex < bezierPath.NumSegments; segmentIndex = (segmentIndex + 1) | 0) {
                        var segmentPoints = bezierPath.GetPointsInSegment(segmentIndex);
                        var estimatedSegmentLength = PathCreation.Utility.CubicBezierUtility.EstimateCurveLength(segmentPoints[0].$clone(), segmentPoints[1].$clone(), segmentPoints[2].$clone(), segmentPoints[3].$clone());
                        var divisions = Math.ceil(estimatedSegmentLength * accuracy);
                        var increment = 1.0 / divisions;

                        for (var t = increment; t <= 1; t += increment) {
                            var isLastPointOnPath = (t + increment > 1 && segmentIndex === ((bezierPath.NumSegments - 1) | 0));
                            if (isLastPointOnPath) {
                                t = 1;
                            }
                            var pointOnPath = PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(segmentPoints, t);
                            var nextPointOnPath = PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(segmentPoints, t + increment);

                            // angle at current point on path
                            var localAngle = 180 - PathCreation.Utility.MathUtility.MinAngle(prevPointOnPath.$clone(), pointOnPath.$clone(), nextPointOnPath.$clone());
                            // angle between the last added vertex, the current point on the path, and the next point on the path
                            var angleFromPrevVertex = 180 - PathCreation.Utility.MathUtility.MinAngle(lastAddedPoint.$clone(), pointOnPath.$clone(), nextPointOnPath.$clone());
                            var angleError = UnityEngine.Mathf.Max(localAngle, angleFromPrevVertex);


                            if ((angleError > maxAngleError && dstSinceLastVertex >= minVertexDst) || isLastPointOnPath) {

                                currentPathLength += (lastAddedPoint.$clone().sub( pointOnPath )).length();
                                splitData.cumulativeLength.add(currentPathLength);
                                splitData.vertices.add(pointOnPath.$clone());
                                splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(segmentPoints, t).clone().normalize().$clone());
                                splitData.minMax.AddValue(pointOnPath.$clone());
                                dstSinceLastVertex = 0;
                                lastAddedPoint = pointOnPath.$clone();
                            } else {
                                dstSinceLastVertex += (pointOnPath.$clone().sub( prevPointOnPath )).length();
                            }
                            prevPointOnPath = pointOnPath.$clone();
                        }
                        splitData.anchorVertexMap.add(((splitData.vertices.Count - 1) | 0));
                    }
                    return splitData;
                },
                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathByAngleError:static end.*/

                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathEvenly:static start.*/
                SplitBezierPathEvenly: function (bezierPath, spacing, accuracy) {
                    var splitData = new PathCreation.Utility.VertexPathUtility.PathSplitData();

                    splitData.vertices.add(bezierPath.getItem(0).$clone());
                    splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(bezierPath.GetPointsInSegment(0), 0).clone().normalize().$clone());
                    splitData.cumulativeLength.add(0);
                    splitData.anchorVertexMap.add(0);
                    splitData.minMax.AddValue(bezierPath.getItem(0).$clone());

                    var prevPointOnPath = bezierPath.getItem(0).$clone();
                    var lastAddedPoint = bezierPath.getItem(0).$clone();

                    var currentPathLength = 0;
                    var dstSinceLastVertex = 0;

                    // Go through all segments and split up into vertices
                    for (var segmentIndex = 0; segmentIndex < bezierPath.NumSegments; segmentIndex = (segmentIndex + 1) | 0) {
                        var segmentPoints = bezierPath.GetPointsInSegment(segmentIndex);
                        var estimatedSegmentLength = PathCreation.Utility.CubicBezierUtility.EstimateCurveLength(segmentPoints[0].$clone(), segmentPoints[1].$clone(), segmentPoints[2].$clone(), segmentPoints[3].$clone());
                        var divisions = Math.ceil(estimatedSegmentLength * accuracy);
                        var increment = 1.0 / divisions;

                        for (var t = increment; t <= 1; t += increment) {
                            var isLastPointOnPath = (t + increment > 1 && segmentIndex === ((bezierPath.NumSegments - 1) | 0));
                            if (isLastPointOnPath) {
                                t = 1;
                            }
                            var pointOnPath = PathCreation.Utility.CubicBezierUtility.EvaluateCurve$1(segmentPoints, t);
                            dstSinceLastVertex += (pointOnPath.$clone().sub( prevPointOnPath )).length();

                            // If vertices are now too far apart, go back by amount we overshot by
                            if (dstSinceLastVertex > spacing) {
                                var overshootDst = dstSinceLastVertex - spacing;
                                pointOnPath = pointOnPath.$clone().add( (prevPointOnPath.$clone().sub( pointOnPath )).clone().normalize().$clone().scale( overshootDst ) );
                                t -= increment;
                            }

                            if (dstSinceLastVertex >= spacing || isLastPointOnPath) {
                                currentPathLength += (lastAddedPoint.$clone().sub( pointOnPath )).length();
                                splitData.cumulativeLength.add(currentPathLength);
                                splitData.vertices.add(pointOnPath.$clone());
                                splitData.tangents.add(PathCreation.Utility.CubicBezierUtility.EvaluateCurveDerivative$1(segmentPoints, t).clone().normalize().$clone());
                                splitData.minMax.AddValue(pointOnPath.$clone());
                                dstSinceLastVertex = 0;
                                lastAddedPoint = pointOnPath.$clone();
                            }
                            prevPointOnPath = pointOnPath.$clone();
                        }
                        splitData.anchorVertexMap.add(((splitData.vertices.Count - 1) | 0));
                    }
                    return splitData;
                },
                /*PathCreation.Utility.VertexPathUtility.SplitBezierPathEvenly:static end.*/


            }
        }
    });
    /*PathCreation.Utility.VertexPathUtility end.*/

    /*PathCreation.Utility.VertexPathUtility+PathSplitData start.*/
    Bridge.define("PathCreation.Utility.VertexPathUtility.PathSplitData", {
        $kind: "nested class",
        fields: {
            vertices: null,
            tangents: null,
            cumulativeLength: null,
            anchorVertexMap: null,
            minMax: null
        },
        ctors: {
            init: function () {
                this.vertices = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                this.tangents = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                this.cumulativeLength = new (System.Collections.Generic.List$1(System.Single)).ctor();
                this.anchorVertexMap = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.minMax = new PathCreation.MinMax3D();
            }
        }
    });
    /*PathCreation.Utility.VertexPathUtility+PathSplitData end.*/

    /*PathCreation.VertexPath start.*/
    /**
     * @public
     * @class PathCreation.VertexPath
     */
    Bridge.define("PathCreation.VertexPath", {
        statics: {
            fields: {
                accuracy: 0,
                minVertexSpacing: 0
            },
            ctors: {
                init: function () {
                    this.accuracy = 10;
                    this.minVertexSpacing = 0.01;
                }
            }
        },
        fields: {
            space: 0,
            isClosedLoop: false,
            localPoints: null,
            localTangents: null,
            localNormals: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type Array.<number>
             */
            times: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type number
             */
            length: 0,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type Array.<number>
             */
            cumulativeLengthAtEachVertex: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type UnityEngine.Bounds
             */
            bounds: null,
            /**
             * @instance
             * @public
             * @readonly
             * @memberof PathCreation.VertexPath
             * @type UnityEngine.Vector3
             */
            up: null,
            transform: null
        },
        props: {
            NumPoints: {
                get: function () {
                    return this.localPoints.length;
                }
            }
        },
        ctors: {
            init: function () {
                this.bounds = new UnityEngine.Bounds();
                this.up = new UnityEngine.Vector3();
            },
            /**
             * Splits bezier path into array of vertices along the path.
             *
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {PathCreation.BezierPath}    bezierPath       
             * @param   {UnityEngine.Transform}      transform        
             * @param   {number}                     maxAngleError    How much can the angle of the path change before a vertex is added. This allows fewer vertices to be generated in straighter sections.
             * @param   {number}                     minVertexDst     Vertices won't be added closer together than this distance, regardless of angle error.
             * @return  {void}
             */
            $ctor2: function (bezierPath, transform, maxAngleError, minVertexDst) {
                if (maxAngleError === void 0) { maxAngleError = 0.3; }
                if (minVertexDst === void 0) { minVertexDst = 0.0; }

                PathCreation.VertexPath.ctor.call(this, bezierPath, PathCreation.Utility.VertexPathUtility.SplitBezierPathByAngleError(bezierPath, maxAngleError, minVertexDst, PathCreation.VertexPath.accuracy), transform);
            },
            /**
             * Splits bezier path into array of vertices along the path.
             *
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {PathCreation.BezierPath}    bezierPath       
             * @param   {UnityEngine.Transform}      transform        
             * @param   {number}                     vertexSpacing
             * @return  {void}
             */
            $ctor1: function (bezierPath, transform, vertexSpacing) {
                PathCreation.VertexPath.ctor.call(this, bezierPath, PathCreation.Utility.VertexPathUtility.SplitBezierPathEvenly(bezierPath, UnityEngine.Mathf.Max(vertexSpacing, PathCreation.VertexPath.minVertexSpacing), PathCreation.VertexPath.accuracy), transform);
            },
            /**
             * @instance
             * @private
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {PathCreation.BezierPath}                                 bezierPath       
             * @param   {PathCreation.Utility.VertexPathUtility.PathSplitData}    pathSplitData    
             * @param   {UnityEngine.Transform}                                   transform
             * @return  {void}
             */
            ctor: function (bezierPath, pathSplitData, transform) {
                this.$initialize();
                this.transform = transform;
                this.space = bezierPath.Space;
                this.isClosedLoop = bezierPath.IsClosed;
                var numVerts = pathSplitData.vertices.Count;
                this.length = pathSplitData.cumulativeLength.getItem(((numVerts - 1) | 0));

                this.localPoints = System.Array.init(numVerts, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.localNormals = System.Array.init(numVerts, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.localTangents = System.Array.init(numVerts, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.cumulativeLengthAtEachVertex = System.Array.init(numVerts, 0, System.Single);
                this.times = System.Array.init(numVerts, 0, System.Single);
                this.bounds = new pc.BoundingBox( (pathSplitData.minMax.Min.$clone().add( pathSplitData.minMax.Max )).scale( 1.0 / ( 2 ) ), pathSplitData.minMax.Max.$clone().sub( pathSplitData.minMax.Min ).scale( 0.5 ) );

                // Figure out up direction for path
                this.up = (this.bounds.halfExtents.$clone().scale( 2 ).z > this.bounds.halfExtents.$clone().scale( 2 ).y) ? pc.Vec3.UP.clone() : new pc.Vec3( 0, 0, 1 ).scale( -1 );
                var lastRotationAxis = this.up.$clone();

                // Loop through the data and assign to arrays.
                for (var i = 0; i < this.localPoints.length; i = (i + 1) | 0) {
                    this.localPoints[i] = pathSplitData.vertices.getItem(i).$clone();
                    this.localTangents[i] = pathSplitData.tangents.getItem(i).$clone();
                    this.cumulativeLengthAtEachVertex[i] = pathSplitData.cumulativeLength.getItem(i);
                    this.times[i] = this.cumulativeLengthAtEachVertex[i] / this.length;

                    // Calculate normals
                    if (this.space === PathCreation.PathSpace.xyz) {
                        if (i === 0) {
                            this.localNormals[0] = new pc.Vec3().cross( lastRotationAxis, pathSplitData.tangents.getItem(0) ).clone().normalize().$clone();
                        } else {
                            // First reflection
                            var offset = (this.localPoints[i].$clone().sub( this.localPoints[((i - 1) | 0)] ));
                            var sqrDst = offset.lengthSq();
                            var r = lastRotationAxis.$clone().sub( offset.$clone().scale( 2 ).scale( 1.0 / ( sqrDst ) ).scale( offset.dot( lastRotationAxis ) ) );
                            var t = this.localTangents[((i - 1) | 0)].$clone().sub( offset.$clone().scale( 2 ).scale( 1.0 / ( sqrDst ) ).scale( offset.dot( this.localTangents[((i - 1) | 0)] ) ) );

                            // Second reflection
                            var v2 = this.localTangents[i].$clone().sub( t );
                            var c2 = v2.dot( v2 );

                            var finalRot = r.$clone().sub( v2.$clone().scale( 2 ).scale( 1.0 / ( c2 ) ).scale( v2.dot( r ) ) );
                            var n = new pc.Vec3().cross( finalRot, this.localTangents[i] ).clone().normalize().$clone();
                            this.localNormals[i] = n.$clone();
                            lastRotationAxis = finalRot.$clone();
                        }
                    } else {
                        this.localNormals[i] = new pc.Vec3().cross( this.localTangents[i], this.up ).scale( ((bezierPath.FlipNormals) ? 1 : -1) );
                    }
                }

                // Apply correction for 3d normals along a closed path
                if (this.space === PathCreation.PathSpace.xyz && this.isClosedLoop) {
                    // Get angle between first and last normal (if zero, they're already lined up, otherwise we need to correct)
                    var normalsAngleErrorAcrossJoin = pc.Vec3.signedAngle( this.localNormals[((this.localNormals.length - 1) | 0)], this.localNormals[0], this.localTangents[0] );
                    // Gradually rotate the normals along the path to ensure start and end normals line up correctly
                    if (Math.abs(normalsAngleErrorAcrossJoin) > 0.1) {
                        for (var i1 = 1; i1 < this.localNormals.length; i1 = (i1 + 1) | 0) {
                            var t1 = (i1 / (this.localNormals.length - 1.0));
                            var angle = normalsAngleErrorAcrossJoin * t1;
                            var rot = new pc.Quat().setFromAxisAngle( this.localTangents[i1], angle );
                            this.localNormals[i1] = rot.transformVector( this.localNormals[i1] ).scale( ((bezierPath.FlipNormals) ? -1 : 1) );
                        }
                    }
                }

                // Rotate normals to match up with user-defined anchor angles
                if (this.space === PathCreation.PathSpace.xyz) {
                    for (var anchorIndex = 0; anchorIndex < ((pathSplitData.anchorVertexMap.Count - 1) | 0); anchorIndex = (anchorIndex + 1) | 0) {
                        var nextAnchorIndex = (this.isClosedLoop) ? (((anchorIndex + 1) | 0)) % bezierPath.NumSegments : ((anchorIndex + 1) | 0);

                        var startAngle = bezierPath.GetAnchorNormalAngle(anchorIndex) + bezierPath.GlobalNormalsAngle;
                        var endAngle = bezierPath.GetAnchorNormalAngle(nextAnchorIndex) + bezierPath.GlobalNormalsAngle;
                        var deltaAngle = UnityEngine.Mathf.DeltaAngle(startAngle, endAngle);

                        var startVertIndex = pathSplitData.anchorVertexMap.getItem(anchorIndex);
                        var endVertIndex = pathSplitData.anchorVertexMap.getItem(((anchorIndex + 1) | 0));

                        var num = (endVertIndex - startVertIndex) | 0;
                        if (anchorIndex === ((pathSplitData.anchorVertexMap.Count - 2) | 0)) {
                            num = (num + 1) | 0;
                        }
                        for (var i2 = 0; i2 < num; i2 = (i2 + 1) | 0) {
                            var vertIndex = (startVertIndex + i2) | 0;
                            var t2 = i2 / (num - 1.0);
                            var angle1 = startAngle + deltaAngle * t2;
                            var rot1 = new pc.Quat().setFromAxisAngle( this.localTangents[vertIndex], angle1 );
                            this.localNormals[vertIndex] = (rot1.transformVector( this.localNormals[vertIndex] )).scale( ((bezierPath.FlipNormals) ? -1 : 1) );
                        }
                    }
                }
            }
        },
        methods: {
            /*PathCreation.VertexPath.UpdateTransform start.*/
            UpdateTransform: function (transform) {
                this.transform = transform;
            },
            /*PathCreation.VertexPath.UpdateTransform end.*/

            /*PathCreation.VertexPath.GetTangent start.*/
            GetTangent: function (index) {
                return PathCreation.Utility.MathUtility.TransformDirection(this.localTangents[index].$clone(), this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetTangent end.*/

            /*PathCreation.VertexPath.GetNormal start.*/
            GetNormal: function (index) {
                return PathCreation.Utility.MathUtility.TransformDirection(this.localNormals[index].$clone(), this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetNormal end.*/

            /*PathCreation.VertexPath.GetNormal$1 start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetNormal$1: function (t, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                var normal = new pc.Vec3().lerp( this.localNormals[data.previousIndex], this.localNormals[data.nextIndex], data.percentBetweenIndices );
                return PathCreation.Utility.MathUtility.TransformDirection(normal.$clone(), this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetNormal$1 end.*/

            /*PathCreation.VertexPath.GetPoint start.*/
            GetPoint: function (index) {
                return PathCreation.Utility.MathUtility.TransformPoint(this.localPoints[index].$clone(), this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetPoint end.*/

            /*PathCreation.VertexPath.GetPointAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetPointAtDistance: function (dst, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetPointAtTime(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetPointAtDistance end.*/

            /*PathCreation.VertexPath.GetDirectionAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetDirectionAtDistance: function (dst, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetDirection(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetDirectionAtDistance end.*/

            /*PathCreation.VertexPath.GetNormalAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetNormalAtDistance: function (dst, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetNormal$1(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetNormalAtDistance end.*/

            /*PathCreation.VertexPath.GetRotationAtDistance start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               dst                     
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Quaternion}
             */
            GetRotationAtDistance: function (dst, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var t = dst / this.length;
                return this.GetRotation(t, endOfPathInstruction);
            },
            /*PathCreation.VertexPath.GetRotationAtDistance end.*/

            /*PathCreation.VertexPath.GetPointAtTime start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetPointAtTime: function (t, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                return new pc.Vec3().lerp( this.GetPoint(data.previousIndex), this.GetPoint(data.nextIndex), data.percentBetweenIndices );
            },
            /*PathCreation.VertexPath.GetPointAtTime end.*/

            /*PathCreation.VertexPath.GetDirection start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Vector3}
             */
            GetDirection: function (t, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                var dir = new pc.Vec3().lerp( this.localTangents[data.previousIndex], this.localTangents[data.nextIndex], data.percentBetweenIndices );
                return PathCreation.Utility.MathUtility.TransformDirection(dir.$clone(), this.transform, this.space);
            },
            /*PathCreation.VertexPath.GetDirection end.*/

            /*PathCreation.VertexPath.GetRotation start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                               t                       
             * @param   {PathCreation.EndOfPathInstruction}    endOfPathInstruction
             * @return  {UnityEngine.Quaternion}
             */
            GetRotation: function (t, endOfPathInstruction) {
                if (endOfPathInstruction === void 0) { endOfPathInstruction = 0; }
                var data = this.CalculatePercentOnPathData(t, endOfPathInstruction);
                var direction = new pc.Vec3().lerp( this.localTangents[data.previousIndex], this.localTangents[data.nextIndex], data.percentBetweenIndices );
                var normal = new pc.Vec3().lerp( this.localNormals[data.previousIndex], this.localNormals[data.nextIndex], data.percentBetweenIndices );
                return new pc.Quat().setLookAt( PathCreation.Utility.MathUtility.TransformDirection(direction.$clone(), this.transform, this.space), PathCreation.Utility.MathUtility.TransformDirection(normal.$clone(), this.transform, this.space) );
            },
            /*PathCreation.VertexPath.GetRotation end.*/

            /*PathCreation.VertexPath.GetClosestPointOnPath start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}    worldPoint
             * @return  {UnityEngine.Vector3}
             */
            GetClosestPointOnPath: function (worldPoint) {
                var data = this.CalculateClosestPointOnPathData(worldPoint.$clone());
                return new pc.Vec3().lerp( this.GetPoint(data.previousIndex), this.GetPoint(data.nextIndex), data.percentBetweenIndices );
            },
            /*PathCreation.VertexPath.GetClosestPointOnPath end.*/

            /*PathCreation.VertexPath.GetClosestTimeOnPath start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}    worldPoint
             * @return  {number}
             */
            GetClosestTimeOnPath: function (worldPoint) {
                var data = this.CalculateClosestPointOnPathData(worldPoint.$clone());
                return pc.math.lerp(this.times[data.previousIndex], this.times[data.nextIndex], data.percentBetweenIndices);
            },
            /*PathCreation.VertexPath.GetClosestTimeOnPath end.*/

            /*PathCreation.VertexPath.GetClosestDistanceAlongPath start.*/
            /**
             * @instance
             * @public
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}    worldPoint
             * @return  {number}
             */
            GetClosestDistanceAlongPath: function (worldPoint) {
                var data = this.CalculateClosestPointOnPathData(worldPoint.$clone());
                return pc.math.lerp(this.cumulativeLengthAtEachVertex[data.previousIndex], this.cumulativeLengthAtEachVertex[data.nextIndex], data.percentBetweenIndices);
            },
            /*PathCreation.VertexPath.GetClosestDistanceAlongPath end.*/

            /*PathCreation.VertexPath.CalculatePercentOnPathData start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {number}                                    t                       
             * @param   {PathCreation.EndOfPathInstruction}         endOfPathInstruction
             * @return  {PathCreation.VertexPath.TimeOnPathData}
             */
            CalculatePercentOnPathData: function (t, endOfPathInstruction) {
                var $t, $t1;
                // Constrain t based on the end of path instruction
                switch (endOfPathInstruction) {
                    case PathCreation.EndOfPathInstruction.Loop: 
                        // If t is negative, make it the equivalent value between 0 and 1
                        if (t < 0) {
                            t += Math.ceil(Math.abs(t));
                        }
                        t %= 1;
                        break;
                    case PathCreation.EndOfPathInstruction.Reverse: 
                        t = UnityEngine.Mathf.PingPong(t, 1);
                        break;
                    case PathCreation.EndOfPathInstruction.Stop: 
                        t = Math.max(0, Math.min(1, t));
                        break;
                }

                var prevIndex = 0;
                var nextIndex = (this.NumPoints - 1) | 0;
                var i = Math.round(t * (((this.NumPoints - 1) | 0))); // starting guess

                // Starts by looking at middle vertex and determines if t lies to the left or to the right of that vertex.
                // Continues dividing in half until closest surrounding vertices have been found.
                while (true) {
                    // t lies to left
                    if (t <= this.times[i]) {
                        nextIndex = i;
                    } else {
                        prevIndex = i;
                    }
                    i = (Bridge.Int.div((((nextIndex + prevIndex) | 0)), 2)) | 0;

                    if (((nextIndex - prevIndex) | 0) <= 1) {
                        break;
                    }
                }

                var abPercent = ($t = this.times[nextIndex], $t1 = this.times[prevIndex], ( $t - $t1 ) === 0 ? 0 : ( ((t - $t1) / ($t - $t1)) ));
                return new PathCreation.VertexPath.TimeOnPathData.$ctor1(prevIndex, nextIndex, abPercent);
            },
            /*PathCreation.VertexPath.CalculatePercentOnPathData end.*/

            /*PathCreation.VertexPath.CalculateClosestPointOnPathData start.*/
            /**
             * @instance
             * @private
             * @this PathCreation.VertexPath
             * @memberof PathCreation.VertexPath
             * @param   {UnityEngine.Vector3}                       worldPoint
             * @return  {PathCreation.VertexPath.TimeOnPathData}
             */
            CalculateClosestPointOnPathData: function (worldPoint) {
                var minSqrDst = 3.40282347E+38;
                var closestPoint = pc.Vec3.ZERO.clone();
                var closestSegmentIndexA = 0;
                var closestSegmentIndexB = 0;

                for (var i = 0; i < this.localPoints.length; i = (i + 1) | 0) {
                    var nextI = (i + 1) | 0;
                    if (nextI >= this.localPoints.length) {
                        if (this.isClosedLoop) {
                            nextI = nextI % this.localPoints.length;
                        } else {
                            break;
                        }
                    }

                    var closestPointOnSegment = PathCreation.Utility.MathUtility.ClosestPointOnLineSegment$1(worldPoint.$clone(), this.GetPoint(i), this.GetPoint(nextI));
                    var sqrDst = (worldPoint.$clone().sub( closestPointOnSegment )).lengthSq();
                    if (sqrDst < minSqrDst) {
                        minSqrDst = sqrDst;
                        closestPoint = closestPointOnSegment.$clone();
                        closestSegmentIndexA = i;
                        closestSegmentIndexB = nextI;
                    }

                }
                var closestSegmentLength = (this.GetPoint(closestSegmentIndexA).sub( this.GetPoint(closestSegmentIndexB) )).length();
                var t = (closestPoint.$clone().sub( this.GetPoint(closestSegmentIndexA) )).length() / closestSegmentLength;
                return new PathCreation.VertexPath.TimeOnPathData.$ctor1(closestSegmentIndexA, closestSegmentIndexB, t);
            },
            /*PathCreation.VertexPath.CalculateClosestPointOnPathData end.*/


        },
        overloads: {
            "GetNormal(float, EndOfPathInstruction)": "GetNormal$1"
        }
    });
    /*PathCreation.VertexPath end.*/

    /*PathCreation.VertexPath+TimeOnPathData start.*/
    Bridge.define("PathCreation.VertexPath.TimeOnPathData", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new PathCreation.VertexPath.TimeOnPathData(); }
            }
        },
        fields: {
            previousIndex: 0,
            nextIndex: 0,
            percentBetweenIndices: 0
        },
        ctors: {
            $ctor1: function (prev, next, percentBetweenIndices) {
                this.$initialize();
                this.previousIndex = prev;
                this.nextIndex = next;
                this.percentBetweenIndices = percentBetweenIndices;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([4966228363, this.previousIndex, this.nextIndex, this.percentBetweenIndices]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, PathCreation.VertexPath.TimeOnPathData)) {
                    return false;
                }
                return Bridge.equals(this.previousIndex, o.previousIndex) && Bridge.equals(this.nextIndex, o.nextIndex) && Bridge.equals(this.percentBetweenIndices, o.percentBetweenIndices);
            },
            $clone: function (to) {
                var s = to || new PathCreation.VertexPath.TimeOnPathData();
                s.previousIndex = this.previousIndex;
                s.nextIndex = this.nextIndex;
                s.percentBetweenIndices = this.percentBetweenIndices;
                return s;
            }
        }
    });
    /*PathCreation.VertexPath+TimeOnPathData end.*/

    /*PathInputDemo start.*/
    
    Bridge.define("PathInputDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            speedMultiplier: 0,
            
            progress: 0,
            move: null,
            animator: null
        },
        ctors: {
            init: function () {
                this.speedMultiplier = 10.0;
                this.progress = 0.0;
            }
        },
        methods: {
            /*PathInputDemo.Start start.*/
            Start: function () {
                this.animator = this.GetComponent(UnityEngine.Animator);
                this.move = this.GetComponent(SWS.splineMove);
                this.move.StartMove();
                this.move.Pause();
                this.progress = 0.0;
            },
            /*PathInputDemo.Start end.*/

            /*PathInputDemo.Update start.*/
            Update: function () {
                var speed = this.speedMultiplier / 100.0;
                var duration = DG.Tweening.TweenExtensions.Duration(this.move.tween);

                //right arrow key
                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.D)) {
                    //add a value based on time and speed to the progress to start moving right
                    this.progress += UnityEngine.Time.deltaTime * 10 * speed;
                    this.progress = Math.max(0, Math.min(this.progress, duration));
                    this.move.tween.fullPosition = this.progress;
                }

                //left arrow key
                //same as above, but here we invert the progress direction
                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.A)) {
                    this.progress -= UnityEngine.Time.deltaTime * 10 * speed;
                    this.progress = Math.max(0, Math.min(this.progress, duration));
                    this.move.tween.fullPosition = this.progress;
                }

                //let Mecanim animate our object when moving,
                //otherwise set speed to zero
                if ((UnityEngine.Input.GetKey(UnityEngine.KeyCode.D) || UnityEngine.Input.GetKey(UnityEngine.KeyCode.A)) && this.progress !== 0 && this.progress !== duration) {
                    this.animator.SetFloat$1("Speed", this.move.speed);
                } else {
                    this.animator.SetFloat$1("Speed", 0.0);
                }
            },
            /*PathInputDemo.Update end.*/

            /*PathInputDemo.LateUpdate start.*/
            LateUpdate: function () {
                //if we are moving backwards, rotate our walker by 180 degrees
                //this happens after the tween has updated the transform
                if (UnityEngine.Input.GetKey(UnityEngine.KeyCode.A)) {
                    var rot = this.transform.localEulerAngles.$clone();
                    rot.y += 180;
                    this.transform.localEulerAngles = rot.$clone();
                }
            },
            /*PathInputDemo.LateUpdate end.*/


        }
    });
    /*PathInputDemo end.*/

    /*PositionWidget start.*/
    Bridge.define("PositionWidget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            GameManager: null,
            Image: null,
            Numbers: null,
            _LastPosition: 0
        },
        ctors: {
            init: function () {
                this.Numbers = System.Array.init(0, null, UnityEngine.Sprite);
                this._LastPosition = 0;
            }
        },
        methods: {
            /*PositionWidget.Start start.*/
            Start: function () {
                this._LastPosition = this.GameManager.Position;
            },
            /*PositionWidget.Start end.*/

            /*PositionWidget.Update start.*/
            Update: function () {
                //Image.sprite = Numbers[GameManager.Position];
                this.UpdateImage();
            },
            /*PositionWidget.Update end.*/

            /*PositionWidget.UpdateImage start.*/
            UpdateImage: function () {
                if (this._LastPosition === this.GameManager.Position) {
                    return;
                }

                this._LastPosition = this.GameManager.Position;
                this.Image.sprite = this.Numbers[this.GameManager.Position];
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.Image.transform, 1.5, 0.25), 0), DG.Tweening.Ease.InCubic), Bridge.fn.bind(this, function () {
                    DG.Tweening.ShortcutExtensions.DOScale(this.Image.transform, 1.0, 0.15);
                }));

            },
            /*PositionWidget.UpdateImage end.*/


        }
    });
    /*PositionWidget end.*/

    /*Products start.*/
    Bridge.define("Products", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*Products.IsBoost:static start.*/
                IsBoost: function (value) {
                    return value === Products.Kind.Shield || value === Products.Kind.Double;
                },
                /*Products.IsBoost:static end.*/


            }
        },
        fields: {
            data: null,
            OnProductsNumberChanged: null
        },
        ctors: {
            init: function () {
                this.data = new (System.Collections.Generic.Dictionary$2(Products.Kind,System.Int32)).ctor();
            }
        },
        methods: {
            /*Products.Transfer start.*/
            Transfer: function (kind, value) {
                if (!this.data.containsKey(kind)) {
                    this.data.add(kind, 0);
                }
                this.data.setItem(kind, (this.data.getItem(kind) + value) | 0);
                this.OnProductsNumberChanged.Invoke(kind);
            },
            /*Products.Transfer end.*/

            /*Products.Count start.*/
            Count: function (kind) {
                if (!this.data.containsKey(kind)) {
                    return 0;
                }
                return this.data.getItem(kind);
            },
            /*Products.Count end.*/

            /*Products.Start start.*/
            Start: function () {
                this.Transfer(Products.Kind.Rocket, 3);
                this.Transfer(Products.Kind.Gem, this.GetComponentInParent(GameManager).GetInputProperties().gemCount);
            },
            /*Products.Start end.*/


        }
    });
    /*Products end.*/

    /*RaceCar start.*/
    Bridge.define("RaceCar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Owner: 0,
            Score: 0,
            OnWheatCollected: null,
            boosts: null,
            products: null,
            boostsEffectPosition: null,
            effectSheildPrefab: null,
            effectDoublePrefab: null,
            activeBoostEffects: null
        },
        ctors: {
            init: function () {
                this.Score = 0;
                this.activeBoostEffects = new (System.Collections.Generic.Dictionary$2(Products.Kind,UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*RaceCar.Awake start.*/
            Awake: function () {
                var managerObject = UnityEngine.GameObject.Find("GameManager");
                this.boosts = managerObject.GetComponentInChildren(Boosts);
                this.products = managerObject.GetComponentInChildren(Products);
            },
            /*RaceCar.Awake end.*/

            /*RaceCar.Start start.*/
            Start: function () {
                this.boosts.OnBoostAdded = Bridge.fn.combine(this.boosts.OnBoostAdded, Bridge.fn.cacheBind(this, this.OnBoostAdded));
                this.boosts.OnBoostRemoved = Bridge.fn.combine(this.boosts.OnBoostRemoved, Bridge.fn.cacheBind(this, this.OnBoostRemoved));
            },
            /*RaceCar.Start end.*/

            /*RaceCar.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (other.gameObject.CompareTag("Wheat")) {
                    var number = 1;
                    if (this.boosts.Data.Find(function (w) {
                        return w.Kind === Products.Kind.Double;
                    }) != null) {
                        number = 2;
                    }
                    this.products.Transfer(Products.Kind.Wheat, number);
                    !Bridge.staticEquals(this.OnWheatCollected, null) ? this.OnWheatCollected(number) : null;
                    other.GetComponent(WheatPieceDestroyer).PlayFXThenDestroy();
                } else if (Bridge.referenceEquals(other.gameObject.tag, "Obstacle")) {
                    var obstacle = other.GetComponent(DamagingObstacle);
                    obstacle.ExplodeDueToCollision(this.transform.position.$clone(), this.GetComponent(CarUserControl).Speed);
                    var healthController = this.GetComponent(HealthController);
                    // get damage from obstacle property?
                    healthController.Damage(obstacle.Damage);
                }
            },
            /*RaceCar.OnTriggerEnter end.*/

            /*RaceCar.OnBoostAdded start.*/
            OnBoostAdded: function (kind) {
                if (this.activeBoostEffects.containsKey(kind)) {
                    return;
                }

                if (kind === Products.Kind.Shield) {
                    this.activeBoostEffects.add(kind, UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.effectSheildPrefab, this.boostsEffectPosition));
                } else {
                    if (kind === Products.Kind.Double) {
                        this.activeBoostEffects.add(kind, UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.effectDoublePrefab, this.boostsEffectPosition));
                    }
                }
            },
            /*RaceCar.OnBoostAdded end.*/

            /*RaceCar.OnBoostRemoved start.*/
            OnBoostRemoved: function (kind) {
                if (!this.activeBoostEffects.containsKey(kind)) {
                    return;
                }

                UnityEngine.MonoBehaviour.Destroy(this.activeBoostEffects.getItem(kind));
                this.activeBoostEffects.remove(kind);
            },
            /*RaceCar.OnBoostRemoved end.*/


        }
    });
    /*RaceCar end.*/

    /*RaceCar+OwnerType start.*/
    Bridge.define("RaceCar.OwnerType", {
        $kind: "nested enum",
        statics: {
            fields: {
                PLAYER: 0,
                OPPONENT: 1
            }
        }
    });
    /*RaceCar+OwnerType end.*/

    /*RapidInputDemo start.*/
    
    Bridge.define("RapidInputDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            speedDisplay: null,
            
            timeDisplay: null,
            
            topSpeed: 0,
            
            addSpeed: 0,
            
            delay: 0,
            
            slowTime: 0,
            
            minPitch: 0,
            
            maxPitch: 0,
            move: null,
            currentSpeed: 0,
            timeCounter: 0
        },
        ctors: {
            init: function () {
                this.topSpeed = 15;
                this.addSpeed = 2;
                this.delay = 0.05;
                this.slowTime = 0.5;
                this.minPitch = 0;
                this.maxPitch = 2;
                this.timeCounter = 0.0;
            }
        },
        methods: {
            /*RapidInputDemo.Start start.*/
            Start: function () {
                this.move = this.GetComponent(SWS.splineMove);
                if (!UnityEngine.Object.op_Implicit(this.move)) {
                    UnityEngine.Debug.LogWarning$1((this.gameObject.name || "") + " missing movement script!");
                    return;
                }

                //set speed to an arbitrary small value
                //otherwise the tween can't be initialized
                this.move.speed = 0.01;
                //initialize movement but don't start it yet
                this.move.StartMove();
                this.move.Pause();
                this.move.speed = 0.0;
            },
            /*RapidInputDemo.Start end.*/

            /*RapidInputDemo.Update start.*/
            Update: function () {
                //do not continue if the tween reached its end
                if (this.move.tween == null || !DG.Tweening.TweenExtensions.IsActive(this.move.tween) || DG.Tweening.TweenExtensions.IsComplete(this.move.tween)) {
                    return;
                }

                //check for user input
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.UpArrow)) {
                    //resume tween the first time the game starts
                    if (!DG.Tweening.TweenExtensions.IsPlaying(this.move.tween)) {
                        this.move.Resume();
                    }

                    //get desired speed after pressing the button
                    //we add the desired value to the current speed for acceleration
                    var speed = this.currentSpeed + this.addSpeed;
                    //limit the speed value by the maximum value
                    if (speed >= this.topSpeed) {
                        speed = this.topSpeed;
                    }

                    //change the speed of the tween by the calculated value
                    this.move.ChangeSpeed(speed);

                    //restart slow down
                    this.StopAllCoroutines();
                    this.StartCoroutine$2("SlowDown");
                }

                //display values and increase timer
                this.speedDisplay.text = "YOUR SPEED: " + System.Single.format(Math.round(this.move.speed * 100.0) / 100.0);
                this.timeCounter += UnityEngine.Time.deltaTime;
                this.timeDisplay.text = "YOUR TIME: " + System.Single.format(Math.round(this.timeCounter * 100.0) / 100.0);
            },
            /*RapidInputDemo.Update end.*/

            /*RapidInputDemo.SlowDown start.*/
            SlowDown: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    rate,
                    speed,
                    pitchFactor,
                    pitch,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //wait desired delay before affecting speed
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    //temp time value (0-1)
                                        t = 0.0;
                                        //time rate based on slowTime
                                        rate = 1.0 / this.slowTime;
                                        //cache actual current speed
                                        speed = this.move.speed;

                                        //slow down until slowTime is elapsed
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( t < 1 ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    //increase time value over time
                                        t += UnityEngine.Time.deltaTime * rate;
                                        //smoothly slow down speed value to zero over time
                                        //cache smoothed current speed value
                                        this.currentSpeed = pc.math.lerp(speed, 0, t);
                                        //apply current speed to the tween
                                        this.move.ChangeSpeed(this.currentSpeed);

                                        //get pitch factor as difference between min and max pitch
                                        pitchFactor = this.maxPitch - this.minPitch;
                                        //calculate pitch based on the current speed multiplied by the pitch factor
                                        pitch = this.minPitch + (this.move.speed / this.topSpeed) * pitchFactor;
                                        //smooth pitch value over 0.2 seconds and assign it to the audio clip 
                                        if (UnityEngine.Object.op_Implicit(this.GetComponent(UnityEngine.AudioSource))) {
                                            this.GetComponent(UnityEngine.AudioSource).pitch = pc.math.smoothstep(this.GetComponent(UnityEngine.AudioSource).pitch, pitch, 0.2);
                                        }

                                        //yield loop
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*RapidInputDemo.SlowDown end.*/


        }
    });
    /*RapidInputDemo end.*/

    /*RoadGenerator start.*/
    Bridge.define("RoadGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            fencePiece: null,
            width: 0
        },
        ctors: {
            init: function () {
                this.width = 16.5;
            }
        },
        methods: {
            /*RoadGenerator.Generate start.*/
            Generate: function (pathCreator) {
                var distance = 0.0;
                while (distance < pathCreator.path.length) {
                    var pathPosition = pathCreator.path.GetPointAtDistance(distance);
                    var pathRotation = pathCreator.path.GetRotationAtDistance(distance);
                    var pathDirection = pathCreator.path.GetNormalAtDistance(distance);
                    var leftPosition = pathPosition.$clone().add( pathDirection.$clone().scale( (-this.width / 2.0) ) );
                    var rightPosition = pathPosition.$clone().add( pathDirection.$clone().scale( (this.width / 2.0) ) );

                    var leftPiece = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.fencePiece, new pc.Vec3( leftPosition.x, 1.0, leftPosition.z ), pathRotation.$clone());
                    leftPiece.transform.Rotate(0.0, -90.0, 0.0);
                    //leftPiece.transform.Rotate(90.0f, -90.0f, 0.0f);
                    leftPiece.GetComponent(DisableIfTooFar).SetTrackX(distance);
                    var rightPiece = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.fencePiece, new pc.Vec3( rightPosition.x, 1.0, rightPosition.z ), pathRotation.$clone());
                    //rightPiece.transform.Rotate(90.0f, -90.0f, 0.0f);
                    rightPiece.transform.Rotate(0.0, -90.0, 0.0);
                    rightPiece.GetComponent(DisableIfTooFar).SetTrackX(distance);

                    distance += 4.0;
                }
            },
            /*RoadGenerator.Generate end.*/

            /*RoadGenerator.Start start.*/
            Start: function () {

            },
            /*RoadGenerator.Start end.*/

            /*RoadGenerator.Update start.*/
            Update: function () {

            },
            /*RoadGenerator.Update end.*/


        }
    });
    /*RoadGenerator end.*/

    /*Rocket start.*/
    Bridge.define("Rocket", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            jetStream: null,
            explosionPrefab: null,
            selfSpeed: 0,
            additionalSpeed: 0,
            path: null,
            trackX: 0,
            trackY: 0
        },
        ctors: {
            init: function () {
                this.selfSpeed = 10.0;
                this.additionalSpeed = 0.0;
            }
        },
        methods: {
            /*Rocket.Fly start.*/
            Fly: function (_path, _trackX, _trackY, _additionalSpeed) {
                this.path = _path;
                this.trackX = _trackX;
                this.trackY = _trackY;
                this.additionalSpeed = _additionalSpeed;
                this.RefreshPosition();
            },
            /*Rocket.Fly end.*/

            /*Rocket.Start start.*/
            Start: function () {
                this.jetStream.Play();
            },
            /*Rocket.Start end.*/

            /*Rocket.FixedUpdate start.*/
            FixedUpdate: function () {
                this.trackX += UnityEngine.Time.deltaTime * (this.selfSpeed + this.additionalSpeed);
                this.RefreshPosition();
                if (this.trackX >= this.path.path.length) {
                    this.Explode();
                }
            },
            /*Rocket.FixedUpdate end.*/

            /*Rocket.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (Bridge.referenceEquals(other.tag, "Obstacle")) {
                    other.GetComponent(DamagingObstacle).ExplodeDueToCollision(this.path.GetPos(this.trackX, this.trackY), this.selfSpeed + this.additionalSpeed);
                    this.Explode();
                }
            },
            /*Rocket.OnTriggerEnter end.*/

            /*Rocket.Explode start.*/
            Explode: function () {
                UnityEngine.Object.Instantiate$2(UnityEngine.Transform, this.explosionPrefab, this.transform.position.$clone(), pc.Quat.IDENTITY.clone());
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*Rocket.Explode end.*/

            /*Rocket.RefreshPosition start.*/
            RefreshPosition: function () {
                var direction = this.path.path.GetDirectionAtDistance(this.trackX);
                this.transform.position = this.path.GetPos(this.trackX, this.trackY).add( new pc.Vec3( 0, 2.0, 0 ) );
                this.transform.rotation = new pc.Quat().setLookAt( direction, pc.Vec3.UP.clone() );
                this.transform.Rotate(90.0, 0, 0);
            },
            /*Rocket.RefreshPosition end.*/


        }
    });
    /*Rocket end.*/

    /*RocketsPanelCtrl start.*/
    Bridge.define("RocketsPanelCtrl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            products: null,
            rocketPrefab: null
        },
        methods: {
            /*RocketsPanelCtrl.Start start.*/
            Start: function () {
                var $t;
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.products.OnProductsNumberChanged.AddListener(Bridge.fn.cacheBind(this, this.RefreshRocketsNumber));
                this.RefreshRocketsNumber(Products.Kind.Rocket);
            },
            /*RocketsPanelCtrl.Start end.*/

            /*RocketsPanelCtrl.RefreshRocketsNumber start.*/
            RefreshRocketsNumber: function (kind) {
                var $t;
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                for (var i = 0; i < this.products.Count(Products.Kind.Rocket); i = (i + 1) | 0) {
                    UnityEngine.Object.Instantiate(UnityEngine.Transform, this.rocketPrefab, this.transform);
                }

            },
            /*RocketsPanelCtrl.RefreshRocketsNumber end.*/

            /*RocketsPanelCtrl.Update start.*/
            Update: function () { },
            /*RocketsPanelCtrl.Update end.*/


        }
    });
    /*RocketsPanelCtrl end.*/

    /*RotationHelper start.*/
    
    Bridge.define("RotationHelper", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            duration: 0,
            
            rotation: 0
        },
        methods: {
            /*RotationHelper.Start start.*/
            Start: function () {
                DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.transform, new pc.Vec3( this.rotation, 0, 0 ), this.duration, DG.Tweening.RotateMode.LocalAxisAdd), DG.Tweening.Ease.Linear), -1);
            },
            /*RotationHelper.Start end.*/


        }
    });
    /*RotationHelper end.*/

    /*RuntimeDemo start.*/
    
    Bridge.define("RuntimeDemo", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            example1: null,
            
            example2: null,
            
            example3: null,
            
            example4: null,
            
            example5: null,
            
            example6: null,
            
            example7: null
        },
        methods: {
            /*RuntimeDemo.OnGUI start.*/
            OnGUI: function () {
                this.DrawExample1();
                this.DrawExample2();
                this.DrawExample3();
                this.DrawExample4();
                this.DrawExample5();
                this.DrawExample6();
                this.DrawExample7();
            },
            /*RuntimeDemo.OnGUI end.*/

            /*RuntimeDemo.DrawExample1 start.*/
            DrawExample1: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 10, 20, 20), "1:");

                var walkerName = "Walker (Path1)";
                var pos = new pc.Vec3( -25, 0, 10 );

                //instantiation
                if (!this.example1.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 10, 100, 20), "Instantiate")) {
                    //instantiate walker prefab
                    var walker = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.example1.walkerPrefab, pos.$clone(), pc.Quat.IDENTITY.clone());
                    walker.name = walkerName;

                    //instantiate path prefab
                    var path = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.example1.pathPrefab, pos.$clone(), pc.Quat.IDENTITY.clone());

                    //start movement on the new path
                    walker.GetComponent(SWS.splineMove).SetPath(SWS.WaypointManager.Paths.getItem(path.name));

                    //example only
                    this.example1.done = true;
                }

                //destruction
                if (this.example1.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 10, 100, 20), "Destroy")) {
                    UnityEngine.MonoBehaviour.Destroy(UnityEngine.GameObject.Find(walkerName));
                    UnityEngine.MonoBehaviour.Destroy(UnityEngine.GameObject.Find(this.example1.pathPrefab.name));

                    //example only
                    this.example1.done = false;
                }
            },
            /*RuntimeDemo.DrawExample1 end.*/

            /*RuntimeDemo.DrawExample2 start.*/
            DrawExample2: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 30, 20, 20), "2:");

                //change path from path1 to path2 or vice versa
                if (UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 30, 100, 20), "Switch Path")) {
                    //get current path name
                    var currentPath = this.example2.moveRef.pathContainer.name;
                    //toggle movement to the path on the movement script
                    this.example2.moveRef.moveToPath = true;

                    //switch paths based on the name,
                    //actual path switching by calling SetPath(...)
                    if (Bridge.referenceEquals(currentPath, this.example2.pathName1)) {
                        this.example2.moveRef.SetPath(SWS.WaypointManager.Paths.getItem(this.example2.pathName2));
                    } else {
                        this.example2.moveRef.SetPath(SWS.WaypointManager.Paths.getItem(this.example2.pathName1));
                    }
                }
            },
            /*RuntimeDemo.DrawExample2 end.*/

            /*RuntimeDemo.DrawExample3 start.*/
            DrawExample3: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 50, 20, 20), "3:");

                if (this.example3.moveRef.tween == null && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 50, 100, 20), "Start")) {
                    this.example3.moveRef.StartMove();
                }

                if (this.example3.moveRef.tween != null && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 50, 100, 20), "Stop")) {
                    this.example3.moveRef.Stop();
                }

                if (this.example3.moveRef.tween != null && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 70, 100, 20), "Reset")) {
                    this.example3.moveRef.ResetToStart();
                }
            },
            /*RuntimeDemo.DrawExample3 end.*/

            /*RuntimeDemo.DrawExample4 start.*/
            DrawExample4: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 90, 20, 20), "4:");

                if (this.example4.moveRef.tween != null && DG.Tweening.TweenExtensions.IsPlaying(this.example4.moveRef.tween) && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 90, 100, 20), "Pause")) {
                    this.example4.moveRef.Pause();
                }

                if (this.example4.moveRef.tween != null && !DG.Tweening.TweenExtensions.IsPlaying(this.example4.moveRef.tween) && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 90, 100, 20), "Resume")) {
                    this.example4.moveRef.Resume();
                }
            },
            /*RuntimeDemo.DrawExample4 end.*/

            /*RuntimeDemo.DrawExample5 start.*/
            DrawExample5: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 110, 20, 20), "5:");

                if (UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 110, 100, 20), "Change Speed")) {
                    //get current speed and increase/decrease new speed
                    var currentSpeed = this.example5.moveRef.speed;
                    var newSpeed = 1.5;
                    if (currentSpeed === newSpeed) {
                        newSpeed = 4.0;
                    }

                    this.example5.moveRef.ChangeSpeed(newSpeed);
                }
            },
            /*RuntimeDemo.DrawExample5 end.*/

            /*RuntimeDemo.DrawExample6 start.*/
            DrawExample6: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 130, 20, 20), "6:");

                if (!this.example6.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 130, 100, 20), "Add Event")) {
                    //get receiving script
                    var receiver = this.example6.moveRef.GetComponent(EventReceiver);
                    //get event at the first waypoint to call our methods with an argument
                    var myEvent = this.example6.moveRef.events.getItem(1);
                    myEvent.RemoveAllListeners();
                    myEvent.AddListener(Bridge.fn.bind(this, function () {
                        receiver.ActivateForTime(this.example6.target);
                    }));

                    //example only
                    this.example6.done = true;
                }
            },
            /*RuntimeDemo.DrawExample6 end.*/

            /*RuntimeDemo.DrawExample7 start.*/
            DrawExample7: function () {
                UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(10, 150, 20, 20), "7:");

                if (!this.example7.done && UnityEngine.GUI.Button(new UnityEngine.Rect.$ctor1(30, 150, 100, 20), "Create Path")) {
                    //create path manager game object
                    var newPath = new UnityEngine.GameObject.$ctor2("Path7 (Runtime Creation)");
                    var path = newPath.AddComponent(SWS.PathManager);

                    //declare waypoint positions
                    var positions = System.Array.init([new pc.Vec3( -25, 0, -20 ), new pc.Vec3( -15, 3, -20 ), new pc.Vec3( -4, 0, -20 )], UnityEngine.Vector3);
                    var waypoints = System.Array.init(positions.length, null, UnityEngine.Transform);

                    //instantiate waypoints
                    for (var i = 0; i < positions.length; i = (i + 1) | 0) {
                        var newPoint = new UnityEngine.GameObject.$ctor2("Waypoint " + i);
                        waypoints[i] = newPoint.transform;
                        waypoints[i].position = positions[i].$clone();
                    }

                    //assign waypoints to path
                    path.Create$1(waypoints, true);

                    //optional for visibility in the build
                    newPath.AddComponent(SWS.PathRenderer);
                    newPath.GetComponent(UnityEngine.LineRenderer).material = new UnityEngine.Material.$ctor2(UnityEngine.Shader.Find("Sprites/Default"));

                    //example only
                    this.example7.done = true;
                }
            },
            /*RuntimeDemo.DrawExample7 end.*/


        }
    });
    /*RuntimeDemo end.*/

    /*RuntimeDemo+ExampleClass1 start.*/
    Bridge.define("RuntimeDemo.ExampleClass1", {
        $kind: "nested class",
        fields: {
            walkerPrefab: null,
            pathPrefab: null,
            done: false
        },
        ctors: {
            init: function () {
                this.done = false;
            }
        }
    });
    /*RuntimeDemo+ExampleClass1 end.*/

    /*RuntimeDemo+ExampleClass2 start.*/
    Bridge.define("RuntimeDemo.ExampleClass2", {
        $kind: "nested class",
        fields: {
            moveRef: null,
            pathName1: null,
            pathName2: null
        }
    });
    /*RuntimeDemo+ExampleClass2 end.*/

    /*RuntimeDemo+ExampleClass3 start.*/
    Bridge.define("RuntimeDemo.ExampleClass3", {
        $kind: "nested class",
        fields: {
            moveRef: null
        }
    });
    /*RuntimeDemo+ExampleClass3 end.*/

    /*RuntimeDemo+ExampleClass4 start.*/
    Bridge.define("RuntimeDemo.ExampleClass4", {
        $kind: "nested class",
        fields: {
            moveRef: null
        }
    });
    /*RuntimeDemo+ExampleClass4 end.*/

    /*RuntimeDemo+ExampleClass5 start.*/
    Bridge.define("RuntimeDemo.ExampleClass5", {
        $kind: "nested class",
        fields: {
            moveRef: null
        }
    });
    /*RuntimeDemo+ExampleClass5 end.*/

    /*RuntimeDemo+ExampleClass6 start.*/
    Bridge.define("RuntimeDemo.ExampleClass6", {
        $kind: "nested class",
        fields: {
            moveRef: null,
            target: null,
            done: false
        },
        ctors: {
            init: function () {
                this.done = false;
            }
        }
    });
    /*RuntimeDemo+ExampleClass6 end.*/

    /*RuntimeDemo+ExampleClass7 start.*/
    Bridge.define("RuntimeDemo.ExampleClass7", {
        $kind: "nested class",
        fields: {
            done: false
        },
        ctors: {
            init: function () {
                this.done = false;
            }
        }
    });
    /*RuntimeDemo+ExampleClass7 end.*/

    /*ScenePreloader start.*/
    Bridge.define("ScenePreloader", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*ScenePreloader.Start start.*/
            Start: function () {
                UnityEngine.SceneManagement.SceneManager.LoadSceneAsync$2("MyMain");
            },
            /*ScenePreloader.Start end.*/


        }
    });
    /*ScenePreloader end.*/

    /*ShieldBar start.*/
    Bridge.define("ShieldBar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            progressImage: null,
            barIconImage: null,
            root: null,
            healthController: null
        },
        methods: {
            /*ShieldBar.Start start.*/
            Start: function () {
                this.healthController = UnityEngine.GameObject.Find("GameManager").GetComponent(GameManager).healthController;

                this.healthController.OnShieldDamaged = Bridge.fn.combine(this.healthController.OnShieldDamaged, Bridge.fn.cacheBind(this, this.OnShieldChangedHandler));
                this.healthController.OnShieldRaised = Bridge.fn.combine(this.healthController.OnShieldRaised, Bridge.fn.cacheBind(this, this.OnShieldChangedHandler));
                this.healthController.OnShieldLowered = Bridge.fn.combine(this.healthController.OnShieldLowered, Bridge.fn.cacheBind(this, this.OnShieldChangedHandler));
                this.root.SetActive(false);
            },
            /*ShieldBar.Start end.*/

            /*ShieldBar.OnShieldChangedHandler start.*/
            OnShieldChangedHandler: function () {
                this.root.SetActive(this.healthController.Shield > 0);
                DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(this.barIconImage.transform, 1.0, 0.25), 1.3);
                this.progressImage.fillAmount = this.healthController.Shield / this.healthController.MaxShield;
            },
            /*ShieldBar.OnShieldChangedHandler end.*/


        }
    });
    /*ShieldBar end.*/

    /*ShootButtonCtrl start.*/
    Bridge.define("ShootButtonCtrl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            txtAmount: null,
            timerImg: null,
            products: null,
            gun: null
        },
        methods: {
            /*ShootButtonCtrl.Start start.*/
            Start: function () {
                var gameManagetObject = UnityEngine.GameObject.Find("GameManager");
                this.gun = gameManagetObject.GetComponent(GameManager).PlayerCar.GetComponentInChildren(Gun);
                this.products = gameManagetObject.GetComponentInChildren(Products);
                var _Button = this.GetComponent(UnityEngine.UI.Button);

                _Button.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this.gun.Shoot();
                }));
            },
            /*ShootButtonCtrl.Start end.*/

            /*ShootButtonCtrl.Update start.*/
            Update: function () {
                if (!UnityEngine.Object.op_Implicit(this.gun) || !UnityEngine.Object.op_Implicit(this.products)) {
                    return;
                }

                this.txtAmount.text = Bridge.toString(this.products.Count(Products.Kind.Rocket));
                this.timerImg.fillAmount = this.gun.shootTimeoutTimer / this.gun.shootTimeout;
            },
            /*ShootButtonCtrl.Update end.*/


        }
    });
    /*ShootButtonCtrl end.*/

    /*SpeedType start.*/
    Bridge.define("SpeedType", {
        $kind: "enum",
        statics: {
            fields: {
                MPH: 0,
                KPH: 1
            }
        }
    });
    /*SpeedType end.*/

    /*SWS.PathManager start.*/
    
    Bridge.define("SWS.PathManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            waypoints: null,
            
            drawCurved: false,
            
            drawDirection: false,
            
            color1: null,
            
            color2: null,
            
            size: null,
            
            radius: 0,
            /**
             * Skip custom names on waypoint renaming.
             *
             * @instance
             * @public
             * @memberof SWS.PathManager
             * @default true
             * @type boolean
             */
            skipCustomNames: false,
            
            replaceObject: null
        },
        ctors: {
            init: function () {
                this.color1 = new UnityEngine.Color();
                this.color2 = new UnityEngine.Color();
                this.size = new UnityEngine.Vector3();
                this.waypoints = System.Array.init([], UnityEngine.Transform);
                this.drawCurved = true;
                this.drawDirection = false;
                this.color1 = new pc.Color( 1, 0, 1, 0.5 );
                this.color2 = new pc.Color( 1, 0.921568632, 0.0156862754, 0.5 );
                this.size = new pc.Vec3( 0.7, 0.7, 0.7 );
                this.radius = 0.4;
                this.skipCustomNames = true;
            }
        },
        methods: {
            /*SWS.PathManager.Awake start.*/
            Awake: function () {
                SWS.WaypointManager.AddPath(this.gameObject);
            },
            /*SWS.PathManager.Awake end.*/

            /*SWS.PathManager.Create start.*/
            /**
             * Create or update waypoint representation from child objects or external parent.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {UnityEngine.Transform}    parent
             * @return  {void}
             */
            Create: function (parent) {
                var $t;
                if (parent === void 0) { parent = null; }
                if (UnityEngine.Component.op_Equality(parent, null)) {
                    parent = this.transform;
                }

                var childs = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                $t = Bridge.getEnumerator(parent);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        childs.add(child);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.Create$1(childs.ToArray());
            },
            /*SWS.PathManager.Create end.*/

            /*SWS.PathManager.Create$1 start.*/
            /**
             * Create or update waypoint representation from the array passed in, optionally parenting them to the path.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {Array.<UnityEngine.Transform>}    waypoints       
             * @param   {boolean}                          makeChildren
             * @return  {void}
             */
            Create$1: function (waypoints, makeChildren) {
                if (makeChildren === void 0) { makeChildren = false; }
                if (waypoints.length < 2) {
                    UnityEngine.Debug.LogWarning$1("Not enough waypoints placed - minimum is 2. Cancelling.");
                    return;
                }

                if (makeChildren) {
                    for (var i = 0; i < waypoints.length; i = (i + 1) | 0) {
                        waypoints[i].parent = this.transform;
                    }
                }

                this.waypoints = waypoints;
            },
            /*SWS.PathManager.Create$1 end.*/

            /*SWS.PathManager.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
                if (this.waypoints.length <= 0) {
                    return;
                }

                //get positions
                var wpPositions = this.GetPathPoints();

                //assign path ends color
                var start = wpPositions[0].$clone();
                var end = wpPositions[((wpPositions.length - 1) | 0)].$clone();
                UnityEngine.Gizmos.color = this.color1.$clone();
                UnityEngine.Gizmos.DrawWireCube(start.$clone(), this.size.$clone().scale( this.GetHandleSize(start.$clone()) ).scale( 1.5 ));
                UnityEngine.Gizmos.DrawWireCube(end.$clone(), this.size.$clone().scale( this.GetHandleSize(end.$clone()) ).scale( 1.5 ));

                //assign line and waypoints color
                UnityEngine.Gizmos.color = this.color2.$clone();
                for (var i = 1; i < ((wpPositions.length - 1) | 0); i = (i + 1) | 0) {
                    UnityEngine.Gizmos.DrawWireSphere(wpPositions[i].$clone(), this.radius * this.GetHandleSize(wpPositions[i].$clone()));
                }

                //draw linear or curved lines with the same color
                if (this.drawCurved && wpPositions.length >= 2) {
                    SWS.WaypointManager.DrawCurved(wpPositions);
                } else {
                    SWS.WaypointManager.DrawStraight(wpPositions);
                }
            },
            /*SWS.PathManager.OnDrawGizmos end.*/

            /*SWS.PathManager.GetHandleSize start.*/
            GetHandleSize: function (pos) {
                var handleSize = 1.0;
                return handleSize;
            },
            /*SWS.PathManager.GetHandleSize end.*/

            /*SWS.PathManager.GetPathPoints start.*/
            
            GetPathPoints: function (local) {
                if (local === void 0) { local = false; }
                var pathPoints = System.Array.init(this.waypoints.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);

                if (local) {
                    for (var i = 0; i < this.waypoints.length; i = (i + 1) | 0) {
                        pathPoints[i] = this.waypoints[i].localPosition.$clone();
                    }
                } else {
                    for (var i1 = 0; i1 < this.waypoints.length; i1 = (i1 + 1) | 0) {
                        pathPoints[i1] = this.waypoints[i1].position.$clone();
                    }
                }

                return pathPoints;
            },
            /*SWS.PathManager.GetPathPoints end.*/

            /*SWS.PathManager.GetWaypoint start.*/
            /**
             * Returns this waypoint transform according to the index passed in.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {number}                   index
             * @return  {UnityEngine.Transform}
             */
            GetWaypoint: function (index) {
                return this.waypoints[index];
            },
            /*SWS.PathManager.GetWaypoint end.*/

            /*SWS.PathManager.GetWaypointIndex start.*/
            /**
             * Converts bezier point on the path to waypoint index.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {number}    pathPoint
             * @return  {number}
             */
            GetWaypointIndex: function (pathPoint) {
                return pathPoint;
            },
            /*SWS.PathManager.GetWaypointIndex end.*/

            /*SWS.PathManager.GetPathPointIndex start.*/
            /**
             * Converts waypoint index to bezier point on the path.
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @param   {number}    waypoint
             * @return  {number}
             */
            GetPathPointIndex: function (waypoint) {
                return waypoint;
            },
            /*SWS.PathManager.GetPathPointIndex end.*/

            /*SWS.PathManager.GetWaypointCount start.*/
            /**
             * Returns waypoint length (should be equal to events count).
             *
             * @instance
             * @public
             * @this SWS.PathManager
             * @memberof SWS.PathManager
             * @return  {number}
             */
            GetWaypointCount: function () {
                return this.waypoints.length;
            },
            /*SWS.PathManager.GetWaypointCount end.*/


        },
        overloads: {
            "Create(Transform[], bool)": "Create$1"
        }
    });
    /*SWS.PathManager end.*/

    /*SWS.BezierPoint start.*/
    
    Bridge.define("SWS.BezierPoint", {
        fields: {
            
            wp: null,
            
            cp: null
        },
        ctors: {
            init: function () {
                this.cp = System.Array.init(2, null, UnityEngine.Transform);
            }
        }
    });
    /*SWS.BezierPoint end.*/

    /*SWS.EventCollisionTrigger start.*/
    
    Bridge.define("SWS.EventCollisionTrigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            /**
             * Checkbox to toggle actions on trigger.
             *
             * @instance
             * @public
             * @memberof SWS.EventCollisionTrigger
             * @default true
             * @type boolean
             */
            onTrigger: false,
            /**
             * Checkbox to toggle actions on collision.
             *
             * @instance
             * @public
             * @memberof SWS.EventCollisionTrigger
             * @default true
             * @type boolean
             */
            onCollision: false,
            
            myEvent: null
        },
        ctors: {
            init: function () {
                this.onTrigger = true;
                this.onCollision = true;
            }
        },
        methods: {
            /*SWS.EventCollisionTrigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (!this.onTrigger) {
                    return;
                }

                //do something here directly,
                //or assign event methods in the inspector

                this.myEvent.Invoke();
            },
            /*SWS.EventCollisionTrigger.OnTriggerEnter end.*/

            /*SWS.EventCollisionTrigger.OnCollisionEnter start.*/
            OnCollisionEnter: function (other) {
                if (!this.onCollision) {
                    return;
                }

                //do something here directly,
                //or assign event methods in the inspector

                this.myEvent.Invoke();
            },
            /*SWS.EventCollisionTrigger.OnCollisionEnter end.*/

            /*SWS.EventCollisionTrigger.ApplyForce start.*/
            /**
             * Applies an explosion force to the colliding object.
             *
             * @instance
             * @public
             * @this SWS.EventCollisionTrigger
             * @memberof SWS.EventCollisionTrigger
             * @param   {number}    power
             * @return  {void}
             */
            ApplyForce: function (power) {
                var $t;
                var position = this.transform.position.$clone();
                var radius = 5.0;

                var colliders = UnityEngine.Physics.OverlapSphere(position, radius);
                $t = Bridge.getEnumerator(colliders);
                try {
                    while ($t.moveNext()) {
                        var hit = $t.Current;
                        /* navMove move = hit.GetComponent<navMove>();
                        if (move != null)
                        {
                           move.Stop();
                           hit.GetComponent<NavMeshAgent>().enabled = false;
                           hit.isTrigger = false;
                        }*/

                        var rb = hit.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rb, null)) {
                            rb.AddExplosionForce(power, position, radius, 100.0);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*SWS.EventCollisionTrigger.ApplyForce end.*/


        }
    });
    /*SWS.EventCollisionTrigger end.*/

    /*SWS.MoveAnimator start.*/
    
    Bridge.define("SWS.MoveAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            sMove: null,
            animator: null,
            lastRotY: 0
        },
        methods: {
            /*SWS.MoveAnimator.Start start.*/
            Start: function () {
                this.animator = this.GetComponentInChildren(UnityEngine.Animator);

                this.sMove = this.GetComponent(SWS.splineMove);
                //if (!sMove)
                //nAgent = GetComponent<NavMeshAgent>();

            },
            /*SWS.MoveAnimator.Start end.*/

            /*SWS.MoveAnimator.OnAnimatorMove start.*/
            OnAnimatorMove: function () {
                //init variables
                var speed = 0.0;
                var angle = 0.0;

                //calculate variables based on movement script:
                //for splineMove and bezierMove, speed and rotation are regulated by the tween.
                //here we just get the tween's speed and calculate the rotation difference to the last frame.
                //navmesh agents have their own type of movement which has to be calculated separately.
                if (UnityEngine.Object.op_Implicit(this.sMove)) {
                    speed = (this.sMove.tween == null || !DG.Tweening.TweenExtensions.IsActive(this.sMove.tween) || !DG.Tweening.TweenExtensions.IsPlaying(this.sMove.tween)) ? 0.0 : this.sMove.speed;
                    angle = (this.transform.eulerAngles.y - this.lastRotY) * 10;
                    this.lastRotY = this.transform.eulerAngles.y;
                } else {
                    //speed = nAgent.velocity.magnitude;
                    //Vector3 velocity = Quaternion.Inverse(transform.rotation) * nAgent.desiredVelocity;
                    //angle = Mathf.Atan2(velocity.x, velocity.z) * 180.0f / 3.14159f;
                }

                //push variables to the animator with some optional damping
                this.animator.SetFloat$1("Speed", speed);
                this.animator.SetFloat$2("Direction", angle, 0.15, UnityEngine.Time.deltaTime);
            },
            /*SWS.MoveAnimator.OnAnimatorMove end.*/


        }
    });
    /*SWS.MoveAnimator end.*/

    /*SWS.PathIndicator start.*/
    
    Bridge.define("SWS.PathIndicator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            modRotation: 0,
            pSys: null
        },
        ctors: {
            init: function () {
                this.modRotation = 0;
            }
        },
        methods: {
            /*SWS.PathIndicator.Start start.*/
            Start: function () {
                this.pSys = this.GetComponentInChildren(UnityEngine.ParticleSystem);
                this.StartCoroutine$2("EmitParticles");
            },
            /*SWS.PathIndicator.Start end.*/

            /*SWS.PathIndicator.EmitParticles start.*/
            EmitParticles: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rot,
                    pMain,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //wait movement script to be ready
                                        $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    //start loop
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( true ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    //set particle rotation
                                        rot = (this.transform.eulerAngles.y + this.modRotation) * UnityEngine.Mathf.Deg2Rad;
                                        pMain = this.pSys.main;
                                        pMain.startRotation = new pc.MinMaxCurve( rot );

                                        //emit one particle
                                        this.pSys.Emit(1);
                                        //wait before emitting another one
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SWS.PathIndicator.EmitParticles end.*/


        }
    });
    /*SWS.PathIndicator end.*/

    /*SWS.PathRenderer start.*/
    
    Bridge.define("SWS.PathRenderer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            onUpdate: false,
            
            spacing: 0,
            path: null,
            line: null,
            points: null
        },
        ctors: {
            init: function () {
                this.onUpdate = false;
                this.spacing = 0.05;
            }
        },
        methods: {
            /*SWS.PathRenderer.Start start.*/
            Start: function () {
                this.line = this.GetComponent(UnityEngine.LineRenderer);
                this.path = this.GetComponent(SWS.PathManager);
                if (UnityEngine.Object.op_Implicit(this.path)) {
                    this.StartCoroutine$2("StartRenderer");
                }
            },
            /*SWS.PathRenderer.Start end.*/

            /*SWS.PathRenderer.StartRenderer start.*/
            StartRenderer: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Render();

                                        if (this.onUpdate) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.Render();

                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SWS.PathRenderer.StartRenderer end.*/

            /*SWS.PathRenderer.Render start.*/
            Render: function () {
                //avoid freeze in while loop with spacing set to zero
                this.spacing = Math.max(0, Math.min(1, this.spacing));
                if (this.spacing === 0) {
                    this.spacing = 0.05;
                }

                //get path points of the path component
                var list = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                list.AddRange(this.path.GetPathPoints());

                //differ between linear and curved paths
                if (this.path.drawCurved) {
                    //on curved paths, the first and last waypoint
                    //has to exist twice due to tween library calculations
                    list.insert(0, list.getItem(0).$clone());
                    list.add(list.getItem(((list.Count - 1) | 0)).$clone());
                    this.points = list.ToArray();
                    this.DrawCurved();
                } else {
                    this.points = list.ToArray();
                    this.DrawLinear();
                }
            },
            /*SWS.PathRenderer.Render end.*/

            /*SWS.PathRenderer.DrawCurved start.*/
            DrawCurved: function () {
                //set initial LineRenderer size based on spacing
                var size = (Math.round(1.0 / this.spacing) + 1) | 0;
                this.line.positionCount = size;
                var t = 0.0;
                var i = 0;

                //loop over positions and set calculated path point
                while (i < size) {
                    this.line.SetPosition(i, SWS.WaypointManager.GetPoint(this.points, t));
                    t += this.spacing;
                    i = (i + 1) | 0;
                }
            },
            /*SWS.PathRenderer.DrawCurved end.*/

            /*SWS.PathRenderer.DrawLinear start.*/
            DrawLinear: function () {
                //set initial size based on waypoint count
                this.line.positionCount = this.points.length;
                var t = 0.0;
                var i = 0;

                //loop over positions and set waypoint position
                while (i < this.points.length) {
                    this.line.SetPosition(i, this.points[i].$clone());
                    t += this.spacing;
                    i = (i + 1) | 0;
                }
            },
            /*SWS.PathRenderer.DrawLinear end.*/


        }
    });
    /*SWS.PathRenderer end.*/

    /*SWS.splineMove start.*/
    
    Bridge.define("SWS.splineMove", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            
            pathContainer: null,
            
            onStart: false,
            
            moveToPath: false,
            
            reverse: false,
            
            startPoint: 0,
            
            currentPoint: 0,
            
            closeLoop: false,
            
            localType: 0,
            
            lookAhead: 0,
            
            sizeToAdd: 0,
            
            timeValue: 0,
            
            speed: 0,
            
            animEaseType: null,
            
            loopType: 0,
            
            waypoints: null,
            
            events: null,
            
            pathType: 0,
            
            pathMode: 0,
            
            easeType: 0,
            
            lockPosition: 0,
            
            lockRotation: 0,
            /**
             * Whether to lerp this target from one waypoint rotation to the next,
             effectively overwriting the pathMode setting for all or one axis only.
             *
             * @instance
             * @public
             * @memberof SWS.splineMove
             * @type number
             */
            waypointRotation: 0,
            /**
             * The target transform to rotate using waypoint rotation, if selected.
             This should be a child object with (0,0,0) rotation that gets overridden.
             *
             * @instance
             * @public
             * @memberof SWS.splineMove
             * @type UnityEngine.Transform
             */
            rotationTarget: null,
            tween: null,
            wpPos: null,
            originSpeed: 0,
            originRot: null,
            rand: null,
            rndArray: null,
            waitRoutine: null
        },
        ctors: {
            init: function () {
                this.originRot = new UnityEngine.Quaternion();
                this.onStart = false;
                this.moveToPath = false;
                this.reverse = false;
                this.startPoint = 0;
                this.currentPoint = 0;
                this.closeLoop = false;
                this.localType = SWS.splineMove.LocalType.none;
                this.lookAhead = 0;
                this.sizeToAdd = 0;
                this.timeValue = SWS.splineMove.TimeValue.speed;
                this.speed = 5;
                this.loopType = SWS.splineMove.LoopType.none;
                this.events = new (System.Collections.Generic.List$1(UnityEngine.Events.UnityEvent)).ctor();
                this.pathType = DG.Tweening.PathType.CatmullRom;
                this.pathMode = DG.Tweening.PathMode.Full3D;
                this.easeType = DG.Tweening.Ease.Linear;
                this.lockPosition = DG.Tweening.AxisConstraint.None;
                this.lockRotation = DG.Tweening.AxisConstraint.None;
                this.waypointRotation = SWS.splineMove.RotationType.none;
                this.rand = new System.Random.ctor();
            }
        },
        methods: {
            /*SWS.splineMove.Start start.*/
            Start: function () {
                if (this.onStart) {
                    this.StartMove();
                }
            },
            /*SWS.splineMove.Start end.*/

            /*SWS.splineMove.StartMove start.*/
            
            StartMove: function () {
                //don't continue without path container
                if (UnityEngine.MonoBehaviour.op_Equality(this.pathContainer, null)) {
                    UnityEngine.Debug.LogWarning$1((this.gameObject.name || "") + " has no path! Please set Path Container.");
                    return;
                }

                //get array with waypoint positions
                this.waypoints = this.pathContainer.GetPathPoints(this.localType !== SWS.splineMove.LocalType.none);
                //cache original speed for future speed changes
                this.originSpeed = this.speed;
                //cache original rotation if waypoint rotation is enabled
                this.originRot = this.transform.rotation.$clone();

                //initialize waypoint positions
                this.startPoint = Math.max(0, Math.min(this.startPoint, ((this.waypoints.length - 1) | 0)));
                var index = this.startPoint;
                if (this.reverse) {
                    System.Array.reverse(this.waypoints);
                    index = (((this.waypoints.length - 1) | 0) - index) | 0;
                }
                this.Initialize(index);

                this.Stop();
                this.CreateTween();
            },
            /*SWS.splineMove.StartMove end.*/

            /*SWS.splineMove.Initialize start.*/
            Initialize: function (startAt) {
                if (startAt === void 0) { startAt = 0; }
                if (!this.moveToPath) {
                    startAt = 0;
                }
                this.wpPos = System.Array.init(((this.waypoints.length - startAt) | 0), function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                for (var i = 0; i < this.wpPos.length; i = (i + 1) | 0) {
                    this.wpPos[i] = this.waypoints[((i + startAt) | 0)].$clone().add( new pc.Vec3( 0, this.sizeToAdd, 0 ) );
                }

                //position waypoints relative to object
                if (this.localType === SWS.splineMove.LocalType.toObject) {
                    for (var i1 = 0; i1 < this.wpPos.length; i1 = (i1 + 1) | 0) {
                        this.wpPos[i1] = this.transform.position.$clone().add( this.wpPos[i1] );
                    }
                }

                //message count is smaller than waypoint count,
                //add empty message per waypoint
                for (var i2 = this.events.Count; i2 <= ((this.pathContainer.GetWaypointCount() - 1) | 0); i2 = (i2 + 1) | 0) {
                    this.events.add(new UnityEngine.Events.UnityEvent());
                }
            },
            /*SWS.splineMove.Initialize end.*/

            /*SWS.splineMove.CreateTween start.*/
            CreateTween: function () {
                //prepare DOTween's parameters, you can look them up here
                //http://dotween.demigiant.com/documentation.php

                var parms = new DG.Tweening.TweenParams();

                parms.SetUpdate(DG.Tweening.UpdateType.Normal);

                //differ between speed or time based tweening
                if (this.timeValue === SWS.splineMove.TimeValue.speed) {
                    parms.SetSpeedBased();
                }
                if (this.loopType === SWS.splineMove.LoopType.yoyo) {
                    parms.SetLoops(-1, DG.Tweening.LoopType.Yoyo);
                }

                //apply ease type or animation curve
                if (this.easeType === DG.Tweening.Ease.Unset) {
                    parms.SetEase$2(this.animEaseType);
                } else {
                    parms.SetEase(this.easeType);
                }

                if (this.moveToPath) {
                    parms.OnWaypointChange(Bridge.fn.cacheBind(this, this.OnWaypointReached));
                } else {
                    //on looptype random initialize random order of waypoints
                    if (this.loopType === SWS.splineMove.LoopType.random) {
                        this.RandomizeWaypoints();
                    } else {
                        if (this.loopType === SWS.splineMove.LoopType.yoyo) {
                            parms.OnStepComplete(Bridge.fn.cacheBind(this, this.ReachedEnd));
                        }
                    }

                    var startPos = this.wpPos[0].$clone();
                    if (this.localType === SWS.splineMove.LocalType.toPath) {
                        startPos = this.pathContainer.transform.TransformPoint$1(startPos);
                    }
                    this.transform.position = startPos.$clone();

                    parms.OnWaypointChange(Bridge.fn.cacheBind(this, this.OnWaypointChange));
                    parms.OnComplete(Bridge.fn.cacheBind(this, this.ReachedEnd));
                }

                if (this.pathMode === DG.Tweening.PathMode.Ignore && this.waypointRotation !== SWS.splineMove.RotationType.none) {
                    if (UnityEngine.Component.op_Equality(this.rotationTarget, null)) {
                        this.rotationTarget = this.transform;
                    }
                    parms.OnUpdate(Bridge.fn.cacheBind(this, this.OnWaypointRotation));
                }

                if (this.localType === SWS.splineMove.LocalType.toPath) {
                    this.tween = DG.Tweening.TweenSettingsExtensions.SetLookAt$1(DG.Tweening.TweenSettingsExtensions.SetOptions$1(DG.Tweening.TweenSettingsExtensions.SetAs$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.ShortcutExtensions.DOLocalPath$1(this.transform, this.wpPos, this.originSpeed, this.pathType, this.pathMode), parms), this.closeLoop, this.lockPosition, this.lockRotation), this.lookAhead);
                } else {
                    this.tween = DG.Tweening.TweenSettingsExtensions.SetLookAt$1(DG.Tweening.TweenSettingsExtensions.SetOptions$1(DG.Tweening.TweenSettingsExtensions.SetAs$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.ShortcutExtensions.DOPath$1(this.transform, this.wpPos, this.originSpeed, this.pathType, this.pathMode), parms), this.closeLoop, this.lockPosition, this.lockRotation), this.lookAhead);
                }

                if (!this.moveToPath && this.startPoint > 0) {
                    this.GoToWaypoint(this.startPoint);
                    this.startPoint = 0;
                }

                //continue new tween with adjusted speed if it was changed before
                if (this.originSpeed !== this.speed) {
                    this.ChangeSpeed(this.speed);
                }
            },
            /*SWS.splineMove.CreateTween end.*/

            /*SWS.splineMove.OnWaypointReached start.*/
            OnWaypointReached: function (index) {
                if (index <= 0) {
                    return;
                }

                this.Stop();
                this.moveToPath = false;
                this.Initialize();
                this.CreateTween();
            },
            /*SWS.splineMove.OnWaypointReached end.*/

            /*SWS.splineMove.OnWaypointChange start.*/
            OnWaypointChange: function (index) {
                index = this.pathContainer.GetWaypointIndex(index);

                if (index === -1) {
                    return;
                }
                if (this.loopType !== SWS.splineMove.LoopType.yoyo && this.reverse) {
                    index = (((this.pathContainer.GetWaypointCount() - 1) | 0) - index) | 0;
                }
                if (this.loopType === SWS.splineMove.LoopType.random) {
                    index = this.rndArray[index];
                }

                this.currentPoint = index;

                if (this.events == null || ((this.events.Count - 1) | 0) < index || this.events.getItem(index) == null || this.loopType === SWS.splineMove.LoopType.random && index === this.rndArray[((this.rndArray.length - 1) | 0)]) {
                    return;
                }

                //work around internal DOTween thing firing all previous OnWaypointChange events too,
                //when the startPoint > 0 and index changes multiple times at once
                if (this.startPoint > 0 && this.pathContainer.GetWaypointIndex(this.startPoint) !== index) {
                    return;
                }

                this.events.getItem(index).Invoke();
            },
            /*SWS.splineMove.OnWaypointChange end.*/

            /*SWS.splineMove.OnWaypointRotation start.*/
            OnWaypointRotation: function () {
                var $t, $t1, $t2, $t3, $t4, $t5, $t6;
                var lookPoint = this.currentPoint;
                lookPoint = Math.max(0, Math.min(this.pathContainer.GetWaypointIndex(this.currentPoint), this.pathContainer.GetWaypointCount()));

                if (!DG.Tweening.TweenExtensions.IsInitialized(this.tween) || DG.Tweening.TweenExtensions.IsComplete(this.tween)) {
                    this.ApplyWaypointRotation(this.pathContainer.GetWaypoint(lookPoint).rotation.$clone());
                    return;
                }

                var tweenPath = Bridge.as(this.tween, DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions));
                var currentDist = DG.Tweening.TweenExtensions.PathLength(tweenPath) * DG.Tweening.TweenExtensions.ElapsedPercentage(tweenPath);
                var pathLength = 0.0;
                var currentPerc = 0.0;
                var targetPoint = this.currentPoint;

                if (this.moveToPath) {
                    pathLength = ($t = tweenPath.changeValue.wpLengths)[1];
                    currentPerc = currentDist / pathLength;
                    this.ApplyWaypointRotation(new pc.Quat().slerp( this.originRot, this.pathContainer.GetWaypoint(this.currentPoint).rotation, currentPerc ));
                    return;
                }

                if (Bridge.is(this.pathContainer, SWS.BezierPathManager)) {
                    var bPath = Bridge.as(this.pathContainer, SWS.BezierPathManager);
                    var curPoint = this.currentPoint;

                    if (this.reverse) {
                        targetPoint = (((bPath.GetWaypointCount() - 2) | 0) - (((((this.waypoints.length - this.currentPoint) | 0) - 1) | 0))) | 0;
                        curPoint = ((((bPath.bPoints.Count - 2) | 0)) - targetPoint) | 0;
                    }

                    var prevPoints = Bridge.Int.clip32(curPoint * bPath.pathDetail * 10);

                    if (bPath.customDetail) {
                        prevPoints = 0;
                        for (var i = 0; i < targetPoint; i = (i + 1) | 0) {
                            prevPoints = (prevPoints + (Bridge.Int.clip32(bPath.segmentDetail.getItem(i) * 10))) | 0;
                        }
                    }

                    if (this.reverse) {
                        for (var i1 = 0; i1 <= Bridge.Int.mul(curPoint, 10); i1 = (i1 + 1) | 0) {
                            currentDist -= ($t1 = tweenPath.changeValue.wpLengths)[i1];
                        }
                    } else {
                        for (var i2 = 0; i2 <= prevPoints; i2 = (i2 + 1) | 0) {
                            currentDist -= ($t2 = tweenPath.changeValue.wpLengths)[i2];
                        }
                    }

                    if (bPath.customDetail) {
                        for (var i3 = (prevPoints + 1) | 0; i3 <= prevPoints + bPath.segmentDetail.getItem(this.currentPoint) * 10; i3 = (i3 + 1) | 0) {
                            pathLength += ($t3 = tweenPath.changeValue.wpLengths)[i3];
                        }
                    } else {
                        for (var i4 = (prevPoints + 1) | 0; i4 <= ((prevPoints + 10) | 0); i4 = (i4 + 1) | 0) {
                            pathLength += ($t4 = tweenPath.changeValue.wpLengths)[i4];
                        }
                    }
                } else {
                    if (this.reverse) {
                        targetPoint = (((this.waypoints.length - this.currentPoint) | 0) - 1) | 0;
                    }

                    for (var i5 = 0; i5 <= targetPoint; i5 = (i5 + 1) | 0) {
                        currentDist -= ($t5 = tweenPath.changeValue.wpLengths)[i5];
                    }

                    pathLength = ($t6 = tweenPath.changeValue.wpLengths)[((targetPoint + 1) | 0)];
                }

                currentPerc = currentDist / pathLength;
                if (Bridge.is(this.pathContainer, SWS.BezierPathManager)) {
                    lookPoint = targetPoint;
                    if (this.reverse) {
                        lookPoint = (lookPoint + 1) | 0;
                    }
                }

                currentPerc = Math.max(0, Math.min(1, currentPerc));
                this.ApplyWaypointRotation(new pc.Quat().slerp( this.pathContainer.GetWaypoint(lookPoint).rotation, this.pathContainer.GetWaypoint(this.reverse ? ((lookPoint - 1) | 0) : ((lookPoint + 1) | 0)).rotation, currentPerc ));
            },
            /*SWS.splineMove.OnWaypointRotation end.*/

            /*SWS.splineMove.ApplyWaypointRotation start.*/
            ApplyWaypointRotation: function (rotation) {
                this.rotationTarget.rotation = rotation.$clone();

                //limit rotation to specific axis
                //IN DEVELOPMENT
                /* 
                switch (waypointRotation)
                {
                				case RotationType.all:
                					rotationTarget.rotation = rotation;
                       break;
                				case RotationType.x:
                					rotationTarget.localEulerAngles = rotation.eulerAngles.x * transform.right * -1;
                       break;
                   case RotationType.y:
                       rotationTarget.localEulerAngles = rotation.eulerAngles.y * transform.up;
                       break;
                   case RotationType.z:
                       rotationTarget.localEulerAngles = rotation.eulerAngles.z * transform.forward * -1;
                       break;
                }
                */
            },
            /*SWS.splineMove.ApplyWaypointRotation end.*/

            /*SWS.splineMove.ReachedEnd start.*/
            ReachedEnd: function () {
                //each looptype has specific properties
                switch (this.loopType) {
                    case SWS.splineMove.LoopType.none: 
                        this.tween = null;
                        return;
                    case SWS.splineMove.LoopType.loop: 
                        this.currentPoint = 0;
                        this.CreateTween();
                        break;
                    case SWS.splineMove.LoopType.pingPong: 
                        this.reverse = !this.reverse;
                        System.Array.reverse(this.waypoints);
                        this.Initialize();
                        this.CreateTween();
                        break;
                    case SWS.splineMove.LoopType.yoyo: 
                        this.reverse = !this.reverse;
                        break;
                    case SWS.splineMove.LoopType.random: 
                        this.RandomizeWaypoints();
                        this.CreateTween();
                        break;
                }
            },
            /*SWS.splineMove.ReachedEnd end.*/

            /*SWS.splineMove.RandomizeWaypoints start.*/
            RandomizeWaypoints: function () {
                this.Initialize();
                //create array with ongoing index numbers to keep them in mind,
                //this gets shuffled with all waypoint positions at the next step 
                this.rndArray = System.Array.init(this.wpPos.length, 0, System.Int32);
                for (var i = 0; i < this.rndArray.length; i = (i + 1) | 0) {
                    this.rndArray[i] = i;
                }

                //get total array length
                var n = this.wpPos.length;
                //shuffle wpPos and rndArray
                while (n > 1) {
                    var k = this.rand.Next$1(Bridge.identity(n, ((n = (n - 1) | 0))));
                    var temp = this.wpPos[n].$clone();
                    this.wpPos[n] = this.wpPos[k].$clone();
                    this.wpPos[k] = temp.$clone();

                    var tmpI = this.rndArray[n];
                    this.rndArray[n] = this.rndArray[k];
                    this.rndArray[k] = tmpI;
                }

                //since all waypoints are shuffled the first waypoint does not
                //correspond with the actual current position, so we have to
                //swap the first waypoint with the actual waypoint.
                //start by caching the first waypoint position and number
                var first = this.wpPos[0].$clone();
                var rndFirst = this.rndArray[0];
                //loop through wpPos array and find corresponding waypoint
                for (var i1 = 0; i1 < this.wpPos.length; i1 = (i1 + 1) | 0) {
                    //currentPoint is equal to this waypoint number
                    if (this.rndArray[i1] === this.currentPoint) {
                        //swap rnd index number and waypoint positions
                        this.rndArray[i1] = rndFirst;
                        this.wpPos[0] = this.wpPos[i1].$clone();
                        this.wpPos[i1] = first.$clone();
                    }
                }
                //set current rnd index number to the actual current point
                this.rndArray[0] = this.currentPoint;
            },
            /*SWS.splineMove.RandomizeWaypoints end.*/

            /*SWS.splineMove.GoToWaypoint start.*/
            /**
             * Teleports to the defined waypoint index on the path.
             *
             * @instance
             * @public
             * @this SWS.splineMove
             * @memberof SWS.splineMove
             * @param   {number}    index
             * @return  {void}
             */
            GoToWaypoint: function (index) {
                if (this.tween == null) {
                    return;
                }

                if (this.reverse) {
                    index = (((this.waypoints.length - 1) | 0) - index) | 0;
                }

                DG.Tweening.TweenExtensions.ForceInit(this.tween);
                DG.Tweening.TweenExtensions.GotoWaypoint(this.tween, index, true);
            },
            /*SWS.splineMove.GoToWaypoint end.*/

            /*SWS.splineMove.Pause start.*/
            
            Pause: function (seconds) {
                if (seconds === void 0) { seconds = 0.0; }
                if (this.waitRoutine != null) {
                    this.StopCoroutine$2(this.waitRoutine);
                }
                if (this.tween != null) {
                    DG.Tweening.TweenExtensions.Pause(DG.Tweening.Tweener, this.tween);
                }

                if (seconds > 0) {
                    this.waitRoutine = this.StartCoroutine$1(this.Wait(seconds));
                }
            },
            /*SWS.splineMove.Pause end.*/

            /*SWS.splineMove.Wait start.*/
            Wait: function (secs) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (secs === void 0) { secs = 0.0; }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(secs);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Resume();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SWS.splineMove.Wait end.*/

            /*SWS.splineMove.Resume start.*/
            
            Resume: function () {
                if (this.waitRoutine != null) {
                    this.StopCoroutine$2(this.waitRoutine);
                    this.waitRoutine = null;
                }

                if (this.tween != null) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Tweener, this.tween);
                }
            },
            /*SWS.splineMove.Resume end.*/

            /*SWS.splineMove.Reverse start.*/
            
            Reverse: function () {
                //inverse direction toggle
                this.reverse = !this.reverse;
                //calculate opposite remaining path time i.e. if we're at 80% progress in one direction,
                //this then returns 20% time value when starting from the opposite direction and so on
                var timeRemaining = 0.0;
                if (this.tween != null) {
                    timeRemaining = 1 - DG.Tweening.TweenExtensions.ElapsedPercentage(this.tween, false);
                }

                //invert starting point from current waypoint
                this.startPoint = (((this.waypoints.length - 1) | 0) - this.currentPoint) | 0;
                this.StartMove();
                DG.Tweening.TweenExtensions.ForceInit(this.tween);
                //set moving object to the reversed time progress
                this.tween.fullPosition = DG.Tweening.TweenExtensions.Duration(this.tween, false) * timeRemaining;
            },
            /*SWS.splineMove.Reverse end.*/

            /*SWS.splineMove.SetPath start.*/
            
            SetPath: function (newPath) {
                //disable any running movement methods
                this.Stop();
                //set new path container
                this.pathContainer = newPath;
                //restart movement
                this.StartMove();
            },
            /*SWS.splineMove.SetPath end.*/

            /*SWS.splineMove.Stop start.*/
            
            Stop: function () {
                this.StopAllCoroutines();
                this.waitRoutine = null;

                if (this.tween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.tween);
                }
                this.tween = null;
            },
            /*SWS.splineMove.Stop end.*/

            /*SWS.splineMove.ResetToStart start.*/
            
            ResetToStart: function () {
                var $t;
                this.Stop();
                this.currentPoint = 0;
                if (UnityEngine.Object.op_Implicit(this.pathContainer)) {
                    this.transform.position = ($t = this.pathContainer.waypoints)[this.currentPoint].position.$clone().add( new pc.Vec3( 0, this.sizeToAdd, 0 ) );
                }
            },
            /*SWS.splineMove.ResetToStart end.*/

            /*SWS.splineMove.ChangeSpeed start.*/
            
            ChangeSpeed: function (value) {
                //calulate new timeScale value based on original speed
                var newValue;
                if (this.timeValue === SWS.splineMove.TimeValue.speed) {
                    newValue = value / this.originSpeed;
                } else {
                    newValue = this.originSpeed / value;
                }

                //set speed, change timeScale percentually
                this.speed = value;
                if (this.tween != null) {
                    this.tween.timeScale = newValue;
                }
            },
            /*SWS.splineMove.ChangeSpeed end.*/

            /*SWS.splineMove.IsMoving start.*/
            /**
             * Returns whether the movement tween is active.
             Still true when moveToPath or paused.
             *
             * @instance
             * @public
             * @this SWS.splineMove
             * @memberof SWS.splineMove
             * @return  {boolean}
             */
            IsMoving: function () {
                return this.tween != null;
            },
            /*SWS.splineMove.IsMoving end.*/

            /*SWS.splineMove.IsPaused start.*/
            /**
             * Returns true if the movement is currently paused.
             *
             * @instance
             * @public
             * @this SWS.splineMove
             * @memberof SWS.splineMove
             * @return  {boolean}
             */
            IsPaused: function () {
                return this.waitRoutine != null;
            },
            /*SWS.splineMove.IsPaused end.*/


        }
    });
    /*SWS.splineMove end.*/

    /*SWS.splineMove+LocalType start.*/
    Bridge.define("SWS.splineMove.LocalType", {
        $kind: "nested enum",
        statics: {
            fields: {
                none: 0,
                toPath: 1,
                toObject: 2
            }
        }
    });
    /*SWS.splineMove+LocalType end.*/

    /*SWS.splineMove+LoopType start.*/
    Bridge.define("SWS.splineMove.LoopType", {
        $kind: "nested enum",
        statics: {
            fields: {
                none: 0,
                loop: 1,
                pingPong: 2,
                random: 3,
                yoyo: 4
            }
        }
    });
    /*SWS.splineMove+LoopType end.*/

    /*SWS.splineMove+RotationType start.*/
    Bridge.define("SWS.splineMove.RotationType", {
        $kind: "nested enum",
        statics: {
            fields: {
                none: 0,
                all: 1
            }
        }
    });
    /*SWS.splineMove+RotationType end.*/

    /*SWS.splineMove+TimeValue start.*/
    Bridge.define("SWS.splineMove.TimeValue", {
        $kind: "nested enum",
        statics: {
            fields: {
                time: 0,
                speed: 1
            }
        }
    });
    /*SWS.splineMove+TimeValue end.*/

    /*SWS.WaypointManager start.*/
    
    Bridge.define("SWS.WaypointManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                
                Paths: null
            },
            ctors: {
                init: function () {
                    this.Paths = new (System.Collections.Generic.Dictionary$2(System.String,SWS.PathManager)).ctor();
                }
            },
            methods: {
                /*SWS.WaypointManager.AddPath:static start.*/
                
                AddPath: function (path) {
                    //check if the path has been instantiated,
                    //then remove the clone naming scheme
                    var pathName = path.name;
                    if (System.String.contains(pathName,"(Clone)")) {
                        pathName = System.String.replaceAll(pathName, "(Clone)", "");
                    }

                    //try to get PathManager component
                    var pathMan = path.GetComponentInChildren(SWS.PathManager);
                    if (UnityEngine.MonoBehaviour.op_Equality(pathMan, null)) {
                        UnityEngine.Debug.LogWarning$1("Called AddPath() but GameObject " + (pathName || "") + " has no PathManager attached.");
                        return;
                    }

                    SWS.WaypointManager.CleanUp();

                    //check if our dictionary already contains this path
                    //in case it exists already we add a unique number to the end
                    if (SWS.WaypointManager.Paths.containsKey(pathName)) {
                        //find unique naming for it
                        var i = 1;
                        while (SWS.WaypointManager.Paths.containsKey((pathName || "") + "#" + i)) {
                            i = (i + 1) | 0;
                        }

                        pathName = (pathName || "") + (("#" + i) || "");
                        UnityEngine.Debug.Log$1("Renamed " + (path.name || "") + " to " + (pathName || "") + " because a path with the same name was found.");
                    }

                    //rename path and add it to dictionary
                    path.name = pathName;
                    SWS.WaypointManager.Paths.add(pathName, pathMan);
                },
                /*SWS.WaypointManager.AddPath:static end.*/

                /*SWS.WaypointManager.CleanUp:static start.*/
                
                CleanUp: function () {
                    var keys = System.Linq.Enumerable.from(SWS.WaypointManager.Paths, System.Collections.Generic.KeyValuePair$2(System.String,SWS.PathManager)).where(function (p) {
                            return UnityEngine.MonoBehaviour.op_Equality(p.value, null);
                        }).select(function (p) {
                        return p.key;
                    }).ToArray(System.String);
                    for (var i = 0; i < keys.length; i = (i + 1) | 0) {
                        SWS.WaypointManager.Paths.remove(keys[i]);
                    }
                },
                /*SWS.WaypointManager.CleanUp:static end.*/

                /*SWS.WaypointManager.DrawStraight:static start.*/
                
                DrawStraight: function (waypoints) {
                    for (var i = 0; i < ((waypoints.length - 1) | 0); i = (i + 1) | 0) {
                        UnityEngine.Gizmos.DrawLine(waypoints[i].$clone(), waypoints[((i + 1) | 0)].$clone());
                    }
                },
                /*SWS.WaypointManager.DrawStraight:static end.*/

                /*SWS.WaypointManager.DrawCurved:static start.*/
                
                DrawCurved: function (pathPoints) {
                    pathPoints = SWS.WaypointManager.GetCurved(pathPoints);
                    var prevPt = pathPoints[0].$clone();
                    var currPt = new UnityEngine.Vector3();

                    for (var i = 1; i < pathPoints.length; i = (i + 1) | 0) {
                        currPt = pathPoints[i].$clone();
                        UnityEngine.Gizmos.DrawLine(currPt.$clone(), prevPt.$clone());
                        prevPt = currPt.$clone();
                    }
                },
                /*SWS.WaypointManager.DrawCurved:static end.*/

                /*SWS.WaypointManager.GetCurved:static start.*/
                GetCurved: function (waypoints, segmentSubdivisions) {
                    if (segmentSubdivisions === void 0) { segmentSubdivisions = 10; }
                    //helper array for curved paths, includes control points for waypoint array
                    var gizmoPoints = System.Array.init(((waypoints.length + 2) | 0), function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    System.Array.copy(waypoints, 0, gizmoPoints, 1, waypoints.length);
                    gizmoPoints[0] = waypoints[1].$clone();
                    gizmoPoints[((gizmoPoints.length - 1) | 0)] = gizmoPoints[((gizmoPoints.length - 2) | 0)].$clone();

                    var drawPs;
                    var currPt = new UnityEngine.Vector3();

                    //store draw points
                    var subdivisions = Bridge.Int.mul(gizmoPoints.length, segmentSubdivisions);
                    drawPs = System.Array.init(((subdivisions + 1) | 0), function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i <= subdivisions; i = (i + 1) | 0) {
                        var pm = i / subdivisions;
                        currPt = SWS.WaypointManager.GetPoint(gizmoPoints, pm);
                        drawPs[i] = currPt.$clone();
                    }

                    return drawPs;
                },
                /*SWS.WaypointManager.GetCurved:static end.*/

                /*SWS.WaypointManager.GetPoint:static start.*/
                
                GetPoint: function (gizmoPoints, t) {
                    var numSections = (gizmoPoints.length - 3) | 0;
                    var tSec = Math.floor(t * numSections);
                    var currPt = (numSections - 1) | 0;
                    if (currPt > tSec) {
                        currPt = tSec;
                    }
                    var u = t * numSections - currPt;

                    var a = gizmoPoints[currPt].$clone();
                    var b = gizmoPoints[((currPt + 1) | 0)].$clone();
                    var c = gizmoPoints[((currPt + 2) | 0)].$clone();
                    var d = gizmoPoints[((currPt + 3) | 0)].$clone();

                    return ((a.$clone().scale( -1 ).add( b.$clone().scale( 3.0 ) ).sub( c.$clone().scale( 3.0 ) ).add( d )).scale( (u * u * u) ).add( (a.$clone().scale( 2.0 ).sub( b.$clone().scale( 5.0 ) ).add( c.$clone().scale( 4.0 ) ).sub( d )).scale( (u * u) ) ).add( (a.$clone().scale( -1 ).add( c )).scale( u ) ).add( b.$clone().scale( 2.0 ) )).scale( 0.5 );
                },
                /*SWS.WaypointManager.GetPoint:static end.*/

                /*SWS.WaypointManager.GetPathLength:static start.*/
                
                GetPathLength: function (waypoints) {
                    var dist = 0.0;
                    for (var i = 0; i < ((waypoints.length - 1) | 0); i = (i + 1) | 0) {
                        dist += pc.Vec3.distance( waypoints[i], waypoints[((i + 1) | 0)] );
                    }
                    return dist;
                },
                /*SWS.WaypointManager.GetPathLength:static end.*/

                /*SWS.WaypointManager.SmoothCurve:static start.*/
                
                SmoothCurve: function (pathToCurve, interpolations) {
                    var tempPoints;
                    var curvedPoints;
                    var pointsLength = 0;
                    var curvedLength = 0;

                    if (interpolations < 1) {
                        interpolations = 1;
                    }

                    pointsLength = pathToCurve.Count;
                    curvedLength = ((Bridge.Int.mul(pointsLength, Math.round(interpolations))) - 1) | 0;
                    curvedPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).$ctor2(curvedLength);

                    var t = 0.0;
                    for (var pointInTimeOnCurve = 0; pointInTimeOnCurve < ((curvedLength + 1) | 0); pointInTimeOnCurve = (pointInTimeOnCurve + 1) | 0) {
                        t = ( curvedLength - 0 ) === 0 ? 0 : ( ((pointInTimeOnCurve - 0) / (curvedLength - 0)) );
                        tempPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).$ctor1(pathToCurve);
                        for (var j = (pointsLength - 1) | 0; j > 0; j = (j - 1) | 0) {
                            for (var i = 0; i < j; i = (i + 1) | 0) {
                                tempPoints.setItem(i, tempPoints.getItem(i).$clone().scale( (1 - t) ).add( tempPoints.getItem(((i + 1) | 0)).$clone().scale( t ) ));
                            }
                        }
                        curvedPoints.add(tempPoints.getItem(0).$clone());
                    }

                    return curvedPoints;
                },
                /*SWS.WaypointManager.SmoothCurve:static end.*/


            }
        },
        fields: {
            /**
             * Key for placing new waypoints in the scene
             *
             * @instance
             * @public
             * @memberof SWS.WaypointManager
             * @type UnityEngine.KeyCode
             */
            placementKey: 0,
            /**
             * Key for placing new waypoints at the current scene view camera position
             *
             * @instance
             * @public
             * @memberof SWS.WaypointManager
             * @type UnityEngine.KeyCode
             */
            viewPlacementKey: 0
        },
        ctors: {
            init: function () {
                this.placementKey = UnityEngine.KeyCode.P;
                this.viewPlacementKey = UnityEngine.KeyCode.C;
            }
        },
        methods: {
            /*SWS.WaypointManager.Awake start.*/
            Awake: function () {
                //http://dotween.demigiant.com/documentation.php#init
                //initialize DOTween immediately instead than having it being
                //automatically initialized when the first Tweener is created.
                //set up specific settings in the DOTween utility panel!
                DG.Tweening.DOTween.Init();
            },
            /*SWS.WaypointManager.Awake end.*/

            /*SWS.WaypointManager.OnDestroy start.*/
            OnDestroy: function () {
                SWS.WaypointManager.Paths.clear();
            },
            /*SWS.WaypointManager.OnDestroy end.*/


        }
    });
    /*SWS.WaypointManager end.*/

    /*TimeSinceStartup start.*/
    Bridge.define("TimeSinceStartup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Text: null
        },
        methods: {
            /*TimeSinceStartup.Update start.*/
            Update: function () {
                this.Text.text = System.String.format("Time since startup: {0}", [Bridge.box(Bridge.Int.clip32(UnityEngine.Time.realtimeSinceStartup), System.Int32)]);
            },
            /*TimeSinceStartup.Update end.*/


        }
    });
    /*TimeSinceStartup end.*/

    /*TrackContentGenerator start.*/
    Bridge.define("TrackContentGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            parentForPlacing: null,
            obstaclesPrefabs: null,
            hardObstaclesPrefabs: null,
            bonusesPrefabs: null,
            configFile: null,
            products: null,
            healthController: null,
            boosts: null,
            AlreadyGenerated: null,
            generationParams: null,
            startOffset: 0,
            finishOffset: 0,
            rowWidth: 0,
            itemSize: 0
        },
        ctors: {
            init: function () {
                this.generationParams = new Assets.Scripts.TrackContentGenerationParams();
                this.startOffset = 25.0;
                this.finishOffset = 15.0;
                this.rowWidth = 15.0;
                this.itemSize = 3.0;
            }
        },
        methods: {
            /*TrackContentGenerator.Generate start.*/
            Generate: function (pathCreator, parent) {
                var $t;
                var reallyRandomState = UnityEngine.Random.state;
                //Random.seed = 123;
                this.generationParams.ReadGenerationParams(this.configFile);
                var currentDistance = this.startOffset;
                var pathLength = pathCreator.path.length;
                this.generationParams.CompileGenerationData(pathLength, this.rowWidth, this.itemSize);
                var fillingIteration = -1;
                while (currentDistance <= pathLength - this.finishOffset && ((fillingIteration = (fillingIteration + 1) | 0)) < this.generationParams.compiledData.Count) {
                    currentDistance += this.generationParams.compiledData.getItem(fillingIteration).$clone().offset;
                    var currentPoint = pathCreator.path.GetPointAtDistance(currentDistance);
                    $t = Bridge.getEnumerator(this.generationParams.compiledData.getItem(fillingIteration).$clone().items);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current.$clone();
                            var offset = pathCreator.path.GetNormalAtDistance(currentDistance).scale( item.position );
                            var resultPoint = currentPoint.$clone().add( offset );
                            resultPoint.y = 0.0;
                            var chosenPrefab;
                            switch (item.type) {
                                case Assets.Scripts.TrackContentGenerationParams.ItemType.OBSTACLE: 
                                    chosenPrefab = this.obstaclesPrefabs[UnityEngine.Random.Range(0, this.obstaclesPrefabs.length)];
                                    break;
                                case Assets.Scripts.TrackContentGenerationParams.ItemType.HARD_OBSTACLE: 
                                    chosenPrefab = this.hardObstaclesPrefabs[UnityEngine.Random.Range(0, this.hardObstaclesPrefabs.length)];
                                    break;
                                case Assets.Scripts.TrackContentGenerationParams.ItemType.BONUS: 
                                    chosenPrefab = this.bonusesPrefabs[UnityEngine.Random.Range(0, this.bonusesPrefabs.length)];
                                    break;
                                default: 
                                    chosenPrefab = this.obstaclesPrefabs[0];
                                    break;
                            }
                            var itemObject = UnityEngine.Object.Instantiate$3(UnityEngine.Transform, chosenPrefab, resultPoint.$clone(), pc.Quat.IDENTITY.clone(), parent);
                            itemObject.Rotate$2(new pc.Vec3( 0.0, UnityEngine.Random.Range$1(0.0, 360.0), 0.0 ));
                            var lootableItem = itemObject.GetComponent(LootableItem);
                            if (UnityEngine.Object.op_Implicit(lootableItem)) {
                                lootableItem.OnLootableItemCollected.AddListener(Bridge.fn.cacheBind(this, this.OnLootableItemCollected));
                            } else {
                                itemObject.localScale = new pc.Vec3( 3.0, 3.0, 3.0 );
                            }
                            this.AlreadyGenerated.add(itemObject);
                            itemObject.GetComponent(DisableIfTooFar).SetTrackX(currentDistance);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    currentDistance += this.itemSize;
                }
                UnityEngine.Random.state = reallyRandomState;
            },
            /*TrackContentGenerator.Generate end.*/

            /*TrackContentGenerator.OnLootableItemCollected start.*/
            OnLootableItemCollected: function (kind) {
                if (kind === Products.Kind.Heart) {
                    this.healthController.Heal(20);
                } else if (Products.IsBoost(kind)) {
                    this.boosts.Activate(kind);
                } else {
                    this.products.Transfer(kind, 1);
                }
            },
            /*TrackContentGenerator.OnLootableItemCollected end.*/

            /*TrackContentGenerator.OnItemCollected start.*/
            OnItemCollected: function (kind, amout) {
                this.products.Transfer(kind, amout);
            },
            /*TrackContentGenerator.OnItemCollected end.*/


        }
    });
    /*TrackContentGenerator end.*/

    /*TrackHandles start.*/
    Bridge.define("TrackHandles", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            MainPath: null,
            OnFinishReached: null,
            Root: null
        },
        methods: {
            /*TrackHandles.Start start.*/
            Start: function () {

            },
            /*TrackHandles.Start end.*/

            /*TrackHandles.Update start.*/
            Update: function () {

            },
            /*TrackHandles.Update end.*/


        }
    });
    /*TrackHandles end.*/

    /*Trigger start.*/
    Bridge.define("Trigger", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            OnTriggerEnterEvent: null,
            OnTriggerStayEvent: null,
            OnTriggerExitEvent: null
        },
        methods: {
            /*Trigger.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                this.OnTriggerEnterEvent.Invoke();
            },
            /*Trigger.OnTriggerEnter end.*/

            /*Trigger.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
                this.OnTriggerStayEvent.Invoke();
            },
            /*Trigger.OnTriggerStay end.*/

            /*Trigger.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
                this.OnTriggerExitEvent.Invoke();
            },
            /*Trigger.OnTriggerExit end.*/


        }
    });
    /*Trigger end.*/

    /*UIActiveBoost start.*/
    Bridge.define("UIActiveBoost", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            imgIcon: null,
            timerImg: null,
            sprites: null,
            Kind: 0,
            TimeLeft: 0,
            timerValue: 0
        },
        ctors: {
            init: function () {
                this.Kind = Products.Kind.Shield;
                this.TimeLeft = 10.0;
            }
        },
        methods: {
            /*UIActiveBoost.SetKind start.*/
            SetKind: function (value) {
                var $t;
                this.Kind = value;
                this.imgIcon.sprite = ($t = System.Array.find(UIActiveBoost.SpriteByKind, this.sprites, function (w) {
                            return w.Kind === value;
                        })) != null ? $t.Sprite : null;
            },
            /*UIActiveBoost.SetKind end.*/

            /*UIActiveBoost.SetTimeLeft start.*/
            SetTimeLeft: function (value) {
                this.TimeLeft = value;
                this.timerValue = value;
            },
            /*UIActiveBoost.SetTimeLeft end.*/

            /*UIActiveBoost.Update start.*/
            Update: function () {
                this.timerValue -= UnityEngine.Time.deltaTime;
                if (this.timerValue <= 0.0) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                this.timerImg.fillAmount = 1.0 - this.timerValue / this.TimeLeft;
            },
            /*UIActiveBoost.Update end.*/

            /*UIActiveBoost.OnValidate start.*/
            OnValidate: function () {
                this.SetKind(this.Kind);
            },
            /*UIActiveBoost.OnValidate end.*/


        }
    });
    /*UIActiveBoost end.*/

    /*UIActiveBoost+SpriteByKind start.*/
    Bridge.define("UIActiveBoost.SpriteByKind", {
        $kind: "nested class",
        fields: {
            Kind: 0,
            Sprite: null
        }
    });
    /*UIActiveBoost+SpriteByKind end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower start.*/
    Bridge.define("UnityStandardAssets.Cameras.AbstractTargetFollower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_Target: null,
            m_AutoTargetPlayer: false,
            m_UpdateType: 0,
            targetRigidbody: null
        },
        props: {
            Target: {
                get: function () {
                    return this.m_Target;
                }
            }
        },
        ctors: {
            init: function () {
                this.m_AutoTargetPlayer = true;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.Start start.*/
            Start: function () {
                // if auto targeting is used, find the object tagged "Player"
                // any class inheriting from this should call base.Start() to perform this action!
                if (this.m_AutoTargetPlayer) {
                    this.FindAndTargetPlayer();
                }
                if (UnityEngine.Component.op_Equality(this.m_Target, null)) {
                    return;
                }
                this.targetRigidbody = this.m_Target.GetComponent(UnityEngine.Rigidbody);
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.Start end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FixedUpdate start.*/
            FixedUpdate: function () {
                // we update from here if updatetype is set to Fixed, or in auto mode,
                // if the target has a rigidbody, and isn't kinematic.
                if (this.m_AutoTargetPlayer && (UnityEngine.Component.op_Equality(this.m_Target, null) || !this.m_Target.gameObject.activeSelf)) {
                    this.FindAndTargetPlayer();
                }
                if (this.m_UpdateType === UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType.FixedUpdate) {
                    this.FollowTarget(UnityEngine.Time.deltaTime);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FixedUpdate end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.LateUpdate start.*/
            LateUpdate: function () {
                // we update from here if updatetype is set to Late, or in auto mode,
                // if the target does not have a rigidbody, or - does have a rigidbody but is set to kinematic.
                if (this.m_AutoTargetPlayer && (UnityEngine.Component.op_Equality(this.m_Target, null) || !this.m_Target.gameObject.activeSelf)) {
                    this.FindAndTargetPlayer();
                }
                if (this.m_UpdateType === UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType.LateUpdate) {
                    this.FollowTarget(UnityEngine.Time.deltaTime);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.LateUpdate end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.ManualUpdate start.*/
            ManualUpdate: function () {
                // we update from here if updatetype is set to Late, or in auto mode,
                // if the target does not have a rigidbody, or - does have a rigidbody but is set to kinematic.
                if (this.m_AutoTargetPlayer && (UnityEngine.Component.op_Equality(this.m_Target, null) || !this.m_Target.gameObject.activeSelf)) {
                    this.FindAndTargetPlayer();
                }
                if (this.m_UpdateType === UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType.ManualUpdate) {
                    this.FollowTarget(UnityEngine.Time.deltaTime);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.ManualUpdate end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FindAndTargetPlayer start.*/
            FindAndTargetPlayer: function () {
                // auto target an object tagged player, if no target has been assigned
                var targetObj = UnityEngine.GameObject.FindGameObjectWithTag("PlayerCarrot");
                if (UnityEngine.Object.op_Implicit(targetObj)) {
                    this.SetTarget(targetObj.transform);
                }
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.FindAndTargetPlayer end.*/

            /*UnityStandardAssets.Cameras.AbstractTargetFollower.SetTarget start.*/
            SetTarget: function (newTransform) {
                this.m_Target = newTransform;
            },
            /*UnityStandardAssets.Cameras.AbstractTargetFollower.SetTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.AbstractTargetFollower end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType start.*/
    Bridge.define("UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType", {
        $kind: "nested enum",
        statics: {
            fields: {
                FixedUpdate: 0,
                LateUpdate: 1,
                ManualUpdate: 2
            }
        }
    });
    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType end.*/

    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip start.*/
    Bridge.define("UnityStandardAssets.Cameras.ProtectCameraFromWallClip", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.CarAudio", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*UnityStandardAssets.Vehicles.Car.CarAudio.ULerp:static start.*/
                ULerp: function (from, to, value) {
                    return (1.0 - value) * from + value * to;
                },
                /*UnityStandardAssets.Vehicles.Car.CarAudio.ULerp:static end.*/


            }
        },
        fields: {
            engineSoundStyle: 0,
            lowAccelClip: null,
            lowDecelClip: null,
            highAccelClip: null,
            highDecelClip: null,
            pitchMultiplier: 0,
            lowPitchMin: 0,
            lowPitchMax: 0,
            highPitchMultiplier: 0,
            maxRolloffDistance: 0,
            dopplerLevel: 0,
            m_LowAccel: null,
            m_LowDecel: null,
            m_HighAccel: null,
            m_HighDecel: null,
            m_StartedSound: false,
            m_CarController: null
        },
        ctors: {
            init: function () {
                this.engineSoundStyle = UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions.FourChannel;
                this.pitchMultiplier = 1.0;
                this.lowPitchMin = 1.0;
                this.lowPitchMax = 6.0;
                this.highPitchMultiplier = 0.25;
                this.maxRolloffDistance = 500;
                this.dopplerLevel = 1;
            }
        },
        methods: {
            /*UnityStandardAssets.Vehicles.Car.CarAudio.StartSound start.*/
            StartSound: function () {
                // get the carcontroller ( this will not be null as we have require component)
                this.m_CarController = this.GetComponent(CarController);

                // setup the simple audio source
                this.m_HighAccel = this.SetUpEngineAudioSource(this.highAccelClip);

                // if we have four channel audio setup the four audio sources
                if (this.engineSoundStyle === UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions.FourChannel) {
                    this.m_LowAccel = this.SetUpEngineAudioSource(this.lowAccelClip);
                    this.m_LowDecel = this.SetUpEngineAudioSource(this.lowDecelClip);
                    this.m_HighDecel = this.SetUpEngineAudioSource(this.highDecelClip);
                }

                // flag that we have started the sounds playing
                this.m_StartedSound = true;
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.StartSound end.*/

            /*UnityStandardAssets.Vehicles.Car.CarAudio.StopSound start.*/
            StopSound: function () {
                var $t;
                //Destroy all audio sources on this object:
                $t = Bridge.getEnumerator(this.GetComponents(UnityEngine.AudioSource));
                try {
                    while ($t.moveNext()) {
                        var source = $t.Current;
                        UnityEngine.Object.Destroy(source);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.m_StartedSound = false;
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.StopSound end.*/

            /*UnityStandardAssets.Vehicles.Car.CarAudio.Update start.*/
            Update: function () {
                // get the distance to main camera
                var camDist = (UnityEngine.Camera.main.transform.position.$clone().sub( this.transform.position )).lengthSq();

                // stop sound if the object is beyond the maximum roll off distance
                if (this.m_StartedSound && camDist > this.maxRolloffDistance * this.maxRolloffDistance) {
                    this.StopSound();
                }

                // start the sound if not playing and it is nearer than the maximum distance
                if (!this.m_StartedSound && camDist < this.maxRolloffDistance * this.maxRolloffDistance) {
                    this.StartSound();
                }

                if (this.m_StartedSound) {
                    // The pitch is interpolated between the min and max values, according to the car's revs.
                    var pitch = UnityStandardAssets.Vehicles.Car.CarAudio.ULerp(this.lowPitchMin, this.lowPitchMax, this.m_CarController.Revs);

                    // clamp to minimum pitch (note, not clamped to max for high revs while burning out)
                    pitch = UnityEngine.Mathf.Min(this.lowPitchMax, pitch);

                    if (this.engineSoundStyle === UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions.Simple) {
                        // for 1 channel engine sound, it's oh so simple:
                        this.m_HighAccel.pitch = pitch * this.pitchMultiplier * this.highPitchMultiplier;
                        //m_HighAccel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        this.m_HighAccel.volume = 1;
                    } else {
                        // for 4 channel engine sound, it's a little more complex:

                        // adjust the pitches based on the multipliers
                        this.m_LowAccel.pitch = pitch * this.pitchMultiplier;
                        this.m_LowDecel.pitch = pitch * this.pitchMultiplier;
                        this.m_HighAccel.pitch = pitch * this.highPitchMultiplier * this.pitchMultiplier;
                        this.m_HighDecel.pitch = pitch * this.highPitchMultiplier * this.pitchMultiplier;

                        // get values for fading the sounds based on the acceleration
                        var accFade = Math.abs(this.m_CarController.AccelInput);
                        var decFade = 1 - accFade;

                        // get the high fade value based on the cars revs
                        var highFade = ( 0.8 - 0.2 ) === 0 ? 0 : ( ((this.m_CarController.Revs - 0.2) / (0.8 - 0.2)) );
                        var lowFade = 1 - highFade;

                        // adjust the values to be more realistic
                        highFade = 1 - ((1 - highFade) * (1 - highFade));
                        lowFade = 1 - ((1 - lowFade) * (1 - lowFade));
                        accFade = 1 - ((1 - accFade) * (1 - accFade));
                        decFade = 1 - ((1 - decFade) * (1 - decFade));

                        // adjust the source volumes based on the fade values
                        this.m_LowAccel.volume = lowFade * accFade;
                        this.m_LowDecel.volume = lowFade * decFade;
                        this.m_HighAccel.volume = highFade * accFade;
                        this.m_HighDecel.volume = highFade * decFade;

                        // adjust the doppler levels
                        //m_HighAccel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        //m_LowAccel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        //m_HighDecel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                        //m_LowDecel.dopplerLevel = useDoppler ? dopplerLevel : 0;
                    }
                }
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.Update end.*/

            /*UnityStandardAssets.Vehicles.Car.CarAudio.SetUpEngineAudioSource start.*/
            SetUpEngineAudioSource: function (clip) {
                // create the new audio source component on the game object and set up its properties
                var source = this.gameObject.AddComponent(UnityEngine.AudioSource);
                source.clip = clip;
                source.volume = 0;
                source.loop = true;

                // start the clip from a random point
                //source.time = (float)Random.Range((float)0f, (float)clip.length);
                source.Play();
                //source.minDistance = 5;
                //source.maxDistance = maxRolloffDistance;
                //source.dopplerLevel = 0;
                return source;
            },
            /*UnityStandardAssets.Vehicles.Car.CarAudio.SetUpEngineAudioSource end.*/


        }
    });
    /*UnityStandardAssets.Vehicles.Car.CarAudio end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions", {
        $kind: "nested enum",
        statics: {
            fields: {
                Simple: 0,
                FourChannel: 1
            }
        }
    });
    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions end.*/

    /*UnityStandardAssets.Vehicles.Car.SkidTrail start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.SkidTrail", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            m_PersistTime: 0
        },
        methods: {
            /*UnityStandardAssets.Vehicles.Car.SkidTrail.Start start.*/
            Start: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (UnityEngine.Component.op_Equality(this.transform.parent.parent, null)) {
                                            this.Destroy(this.gameObject, this.m_PersistTime);
                                        }

                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UnityStandardAssets.Vehicles.Car.SkidTrail.Start end.*/


        }
    });
    /*UnityStandardAssets.Vehicles.Car.SkidTrail end.*/

    /*UnityStandardAssets.Vehicles.Car.Suspension start.*/
    Bridge.define("UnityStandardAssets.Vehicles.Car.Suspension", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            wheel: null,
            m_TargetOriginalPosition: null,
            m_Origin: null
        },
        ctors: {
            init: function () {
                this.m_TargetOriginalPosition = new UnityEngine.Vector3();
                this.m_Origin = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*UnityStandardAssets.Vehicles.Car.Suspension.Start start.*/
            Start: function () {
                this.m_TargetOriginalPosition = this.wheel.transform.localPosition.$clone();
                this.m_Origin = this.transform.localPosition.$clone();
            },
            /*UnityStandardAssets.Vehicles.Car.Suspension.Start end.*/

            /*UnityStandardAssets.Vehicles.Car.Suspension.Update start.*/
            Update: function () {
                this.transform.localPosition = this.m_Origin.$clone().add( (this.wheel.transform.localPosition.$clone().sub( this.m_TargetOriginalPosition )) );
            },
            /*UnityStandardAssets.Vehicles.Car.Suspension.Update end.*/


        }
    });
    /*UnityStandardAssets.Vehicles.Car.Suspension end.*/

    /*UnselectedColliderDrawer start.*/
    Bridge.define("UnselectedColliderDrawer", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*UnselectedColliderDrawer.Start start.*/
            Start: function () {

            },
            /*UnselectedColliderDrawer.Start end.*/

            /*UnselectedColliderDrawer.Update start.*/
            Update: function () {

            },
            /*UnselectedColliderDrawer.Update end.*/

            /*UnselectedColliderDrawer.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
                // коллайдер рисуем всегда, а не только когда объект с коллайдером выделен - это для удобства составления стопки ящиков под размер коллайдера
                var boxCollider = this.GetComponent(UnityEngine.BoxCollider);
                if (UnityEngine.Component.op_Inequality(boxCollider, null)) {
                    UnityEngine.Gizmos.DrawWireCube(boxCollider.bounds.center.$clone(), boxCollider.bounds.halfExtents.$clone().scale( 2 ).$clone());
                }
                var sphereCollider = this.GetComponent(UnityEngine.SphereCollider);
                if (UnityEngine.Component.op_Inequality(sphereCollider, null)) {
                    UnityEngine.Gizmos.DrawWireSphere(sphereCollider.center.$clone(), sphereCollider.radius);
                }

            },
            /*UnselectedColliderDrawer.OnDrawGizmos end.*/


        }
    });
    /*UnselectedColliderDrawer end.*/

    /*WebContentProxy start.*/
    Bridge.define("WebContentProxy", {
        fields: {
            inputPayload: null,
            outputPayload: null,
            inputProperties: null,
            outputProperties: null,
            jsDelegate: null
        },
        ctors: {
            init: function () {
                this.inputProperties = new WebContentProxy.InputProperties();
                this.outputProperties = new WebContentProxy.OutputProperties();
                this.inputPayload = "";
                this.outputPayload = "";
                this.jsDelegate = new webContentProxyObject();
            },
            ctor: function () {
                this.$initialize();
                // debug way of init (will be overriden in not debug case)
                this.inputProperties.trackIndex = 0;
                this.inputProperties.vehicleIndex = 0;
                this.inputProperties.driverIndex = 0;
                this.inputProperties.gemCount = 100;
            }
        },
        methods: {
            /*WebContentProxy.DecodeInputPayload start.*/
            DecodeInputPayload: function () {
                this.inputPayload = this.jsDelegate.getInputJsPayload();
                // InputPayloadReplacementStub means Unity debug mode
                if (System.String.equals(this.inputPayload, "InputPayloadReplacementStub")) {
                    return;
                }
                var data = System.Convert.fromBase64String(this.inputPayload);
                var decodedString = System.Text.Encoding.UTF8.GetString(data);
                this.inputProperties = Newtonsoft.Json.JsonConvert.DeserializeObject(decodedString, WebContentProxy.InputProperties).$clone();
            },
            /*WebContentProxy.DecodeInputPayload end.*/

            /*WebContentProxy.CallFinishWebContentFunction start.*/
            CallFinishWebContentFunction: function () {
                this.EncodeOutputPayload();
                this.jsDelegate.closeWebContent(this.outputPayload);
            },
            /*WebContentProxy.CallFinishWebContentFunction end.*/

            /*WebContentProxy.EncodeOutputPayload start.*/
            EncodeOutputPayload: function () {
                var decodedString = Newtonsoft.Json.JsonConvert.SerializeObject(this.outputProperties.$clone());
                var data = System.Text.Encoding.UTF8.GetBytes$2(decodedString);
                // InputPayloadReplacementStub means Unity debug mode
                this.outputPayload = System.String.equals(this.inputPayload, "InputPayloadReplacementStub") ? decodedString : System.Convert.toBase64String(data, null, null, null);
            },
            /*WebContentProxy.EncodeOutputPayload end.*/


        }
    });
    /*WebContentProxy end.*/

    /*WebContentProxy+InputProperties start.*/
    Bridge.define("WebContentProxy.InputProperties", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new WebContentProxy.InputProperties(); }
            }
        },
        fields: {
            trackIndex: 0,
            vehicleIndex: 0,
            driverIndex: 0,
            gemCount: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([5801281942, this.trackIndex, this.vehicleIndex, this.driverIndex, this.gemCount]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, WebContentProxy.InputProperties)) {
                    return false;
                }
                return Bridge.equals(this.trackIndex, o.trackIndex) && Bridge.equals(this.vehicleIndex, o.vehicleIndex) && Bridge.equals(this.driverIndex, o.driverIndex) && Bridge.equals(this.gemCount, o.gemCount);
            },
            $clone: function (to) {
                var s = to || new WebContentProxy.InputProperties();
                s.trackIndex = this.trackIndex;
                s.vehicleIndex = this.vehicleIndex;
                s.driverIndex = this.driverIndex;
                s.gemCount = this.gemCount;
                return s;
            }
        }
    });
    /*WebContentProxy+InputProperties end.*/

    /*WebContentProxy+OutputProperties start.*/
    Bridge.define("WebContentProxy.OutputProperties", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new WebContentProxy.OutputProperties(); }
            }
        },
        fields: {
            ryeCount: 0,
            fuelCount: 0,
            gemCount: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([7659832231, this.ryeCount, this.fuelCount, this.gemCount]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, WebContentProxy.OutputProperties)) {
                    return false;
                }
                return Bridge.equals(this.ryeCount, o.ryeCount) && Bridge.equals(this.fuelCount, o.fuelCount) && Bridge.equals(this.gemCount, o.gemCount);
            },
            $clone: function (to) {
                var s = to || new WebContentProxy.OutputProperties();
                s.ryeCount = this.ryeCount;
                s.fuelCount = this.fuelCount;
                s.gemCount = this.gemCount;
                return s;
            }
        }
    });
    /*WebContentProxy+OutputProperties end.*/

    /*WheatGenerator start.*/
    Bridge.define("WheatGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            wheatPiece: null,
            trackContentGenerator: null,
            rowWidth: 0,
            pieceSize: 0,
            carUserControl: null,
            kDistanceBehindForHiding: 0,
            kDistanceInFrontForHiding: 0,
            kDistanceInFrontForNonDetailing: 0
        },
        ctors: {
            init: function () {
                this.rowWidth = 15.0;
                this.pieceSize = 2.0;
                this.kDistanceBehindForHiding = 5.0;
                this.kDistanceInFrontForHiding = 100.0;
                this.kDistanceInFrontForNonDetailing = 50.0;
            }
        },
        methods: {
            /*WheatGenerator.Generate start.*/
            Generate: function (pathCreator, parent) {
                var currentDistance = 15.0;
                var pathLength = pathCreator.path.length;
                while (currentDistance <= pathLength - 5.0) {
                    currentDistance += this.pieceSize;
                    var currentPoint = pathCreator.path.GetPointAtDistance(currentDistance);
                    var normal = pathCreator.path.GetNormalAtDistance(currentDistance);
                    var currentRotation = pathCreator.path.GetRotationAtDistance(currentDistance);
                    currentRotation.setFromEulerAngles_Unity( currentRotation.getPositiveEulerAngles().$clone().add( new pc.Vec3( 0.0, 90.0, 90.0 ) ).x, currentRotation.getPositiveEulerAngles().$clone().add( new pc.Vec3( 0.0, 90.0, 90.0 ) ).y, currentRotation.getPositiveEulerAngles().$clone().add( new pc.Vec3( 0.0, 90.0, 90.0 ) ).z );
                    for (var i = -this.rowWidth / 2.0; i <= this.rowWidth / 2.0; i += this.pieceSize) {
                        var resultPoint = currentPoint.$clone().add( normal.$clone().scale( i ) );
                        resultPoint.y = 0.3;
                        this.TryToInstantiatePiece(resultPoint.$clone(), currentRotation.$clone(), currentDistance, parent);
                    }
                }
            },
            /*WheatGenerator.Generate end.*/

            /*WheatGenerator.TryToInstantiatePiece start.*/
            TryToInstantiatePiece: function (pos, rotation, distance, parent) {
                var $t;
                var piece = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.wheatPiece, pos.$clone(), rotation.$clone(), parent);
                $t = Bridge.getEnumerator(this.trackContentGenerator.AlreadyGenerated);
                try {
                    while ($t.moveNext()) {
                        var itemObject = $t.Current;
                        if (itemObject.GetComponent(UnityEngine.Collider).bounds.intersects( piece.GetComponent(UnityEngine.Collider).bounds )) {
                            UnityEngine.MonoBehaviour.Destroy(piece);
                            return;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                piece.GetComponent(DisableIfTooFar).SetTrackX(distance);
            },
            /*WheatGenerator.TryToInstantiatePiece end.*/

            /*WheatGenerator.Update start.*/
            Update: function () { },
            /*WheatGenerator.Update end.*/


        }
    });
    /*WheatGenerator end.*/

    /*WheatPieceDestroyer start.*/
    Bridge.define("WheatPieceDestroyer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            explosionParticleSystem: null,
            wasPlayFXThenDestroyCalled: false
        },
        ctors: {
            init: function () {
                this.wasPlayFXThenDestroyCalled = false;
            }
        },
        methods: {
            /*WheatPieceDestroyer.PlayFXThenDestroy start.*/
            PlayFXThenDestroy: function () {
                var $t;
                if (UnityEngine.Component.op_Equality(this.explosionParticleSystem, null)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }

                this.explosionParticleSystem.Play();
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        child.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.wasPlayFXThenDestroyCalled = true;
            },
            /*WheatPieceDestroyer.PlayFXThenDestroy end.*/

            /*WheatPieceDestroyer.Start start.*/
            Start: function () {
                this.explosionParticleSystem = this.GetComponent(UnityEngine.ParticleSystem);
            },
            /*WheatPieceDestroyer.Start end.*/

            /*WheatPieceDestroyer.Update start.*/
            Update: function () {
                if (this.wasPlayFXThenDestroyCalled && UnityEngine.Component.op_Inequality(this.explosionParticleSystem, null) && !this.explosionParticleSystem.IsAlive()) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*WheatPieceDestroyer.Update end.*/

            /*WheatPieceDestroyer.OnDestroy start.*/
            OnDestroy: function () { },
            /*WheatPieceDestroyer.OnDestroy end.*/


        }
    });
    /*WheatPieceDestroyer end.*/

    /*WheatPieceRandomizer start.*/
    Bridge.define("WheatPieceRandomizer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            partsParent: null
        },
        methods: {
            /*WheatPieceRandomizer.Start start.*/
            Start: function () {
                var $t, $t1;
                $t = Bridge.getEnumerator(this.partsParent);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        child.localScale = child.localScale.$clone().add( new pc.Vec3( 0, UnityEngine.Random.Range$1(-0.1, 0.1), 0 ) );
                        child.localRotation = ($t1 = child.localRotation.getPositiveEulerAngles().$clone().add( UnityEngine.Random.insideUnitSphere.$clone().scale( 3.0 ) ), new pc.Quat().setFromEulerAngles_Unity( $t1.x, $t1.y, $t1.z ));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*WheatPieceRandomizer.Start end.*/

            /*WheatPieceRandomizer.Update start.*/
            Update: function () {

            },
            /*WheatPieceRandomizer.Update end.*/


        }
    });
    /*WheatPieceRandomizer end.*/

    /*WheatPosInRowRandomizer start.*/
    Bridge.define("WheatPosInRowRandomizer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            wheats: null
        },
        ctors: {
            init: function () {
                this.wheats = System.Array.init(3, null, UnityEngine.Transform);
            }
        },
        methods: {
            /*WheatPosInRowRandomizer.SlightlyRandomizePositions start.*/
            SlightlyRandomizePositions: function () {
                //foreach ( var wheat in wheats )
                //{
                //    wheat.Rotate(new Vector3(0.0f, Random.Range(0.0f, 5.0f), 0.0f ) );
                //}
            },
            /*WheatPosInRowRandomizer.SlightlyRandomizePositions end.*/

            /*WheatPosInRowRandomizer.Start start.*/
            Start: function () { },
            /*WheatPosInRowRandomizer.Start end.*/

            /*WheatPosInRowRandomizer.Update start.*/
            Update: function () { },
            /*WheatPosInRowRandomizer.Update end.*/


        }
    });
    /*WheatPosInRowRandomizer end.*/

    /*WheatSliderWidget start.*/
    Bridge.define("WheatSliderWidget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            gameManager: null,
            amountText: null,
            BarIconImage: null,
            WheatImage: null,
            _ImageSourcePosition: null,
            RaceCar: null,
            products: null,
            cooldown: 0
        },
        ctors: {
            init: function () {
                this._ImageSourcePosition = new UnityEngine.Vector3();
                this.cooldown = 0.0;
            }
        },
        methods: {
            /*WheatSliderWidget.Start start.*/
            Start: function () {
                this.gameManager = UnityEngine.GameObject.Find("GameManager").GetComponent(GameManager);
                var color = new pc.Color( 1, 1, 1, 1 );
                color.a = 0;
                this.WheatImage.color = color.$clone();
                this._ImageSourcePosition = this.WheatImage.rectTransform.position.$clone();
                this.RaceCar = this.gameManager.PlayerCar;
                this.amountText.text = Bridge.toString(this.products.Count(Products.Kind.Wheat));

                this.RaceCar.OnWheatCollected = Bridge.fn.combine(this.RaceCar.OnWheatCollected, Bridge.fn.cacheBind(this, this.OnWheatCollectedHandler));
            },
            /*WheatSliderWidget.Start end.*/

            /*WheatSliderWidget.Update start.*/
            Update: function () {
                this.cooldown -= UnityEngine.Time.deltaTime;
            },
            /*WheatSliderWidget.Update end.*/

            /*WheatSliderWidget.OnWheatCollectedHandler start.*/
            OnWheatCollectedHandler: function (number) {
                if (this.cooldown > 0) {
                    this.amountText.text = Bridge.toString(this.products.Count(Products.Kind.Wheat));
                    return;
                }
                this.cooldown = 0.4;

                for (var i = 0; i < number; i = (i + 1) | 0) {
                    var wheatImage = { v : UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.WheatImage.gameObject, this.WheatImage.transform.position.$clone(), pc.Quat.IDENTITY.clone(), this.WheatImage.transform.parent).GetComponent(UnityEngine.UI.Image) };

                    DG.Tweening.TweenSettingsExtensions.From$6(DG.Tweening.ShortcutExtensions.DOScale(wheatImage.v.transform, 0.8, 0.4), 1);
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(wheatImage.v, 1, 0.1), (function ($me, wheatImage) {
                        return Bridge.fn.bind($me, function () {
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(wheatImage.v, 1, 0.2), Bridge.fn.bind(this, function () {
                                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(wheatImage.v, 0, 0.1), Bridge.fn.bind(this, function () {
                                    DG.Tweening.ShortcutExtensions.DOKill(wheatImage.v);
                                    this.amountText.text = Bridge.toString(this.products.Count(Products.Kind.Wheat));
                                    UnityEngine.Object.Destroy(wheatImage.v);
                                }));
                            }));
                        });
                    })(this, wheatImage));
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.From$3(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.Options.VectorOptions, DG.Tweening.ShortcutExtensions.DOMove(wheatImage.v.rectTransform, this.BarIconImage.rectTransform.position.$clone().add( new pc.Vec3( Bridge.Int.mul(50, i), Bridge.Int.mul(-50, i), 0 ) ), 0.4), this._ImageSourcePosition.$clone()), Bridge.fn.bind(this, function () {
                        DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale(this.transform, 1.05, 0.1), 2, DG.Tweening.LoopType.Yoyo);
                    }));
                }


            },
            /*WheatSliderWidget.OnWheatCollectedHandler end.*/


        }
    });
    /*WheatSliderWidget end.*/

    /*WheelEffects start.*/
    Bridge.define("WheelEffects", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                skidTrailsDetachedParent: null
            }
        },
        fields: {
            SkidTrailPrefab: null,
            skidParticles: null,
            skidding: false,
            PlayingAudio: false,
            m_AudioSource: null,
            m_SkidTrail: null,
            m_WheelCollider: null
        },
        methods: {
            /*WheelEffects.Start start.*/
            Start: function () {
                this.skidParticles = this.transform.root.GetComponentInChildren(UnityEngine.ParticleSystem);

                if (UnityEngine.Component.op_Equality(this.skidParticles, null)) {
                    UnityEngine.Debug.LogWarning$1(" no particle system found on car to generate smoke particles", this.gameObject);
                } else {
                    this.skidParticles.Stop();
                }

                this.m_WheelCollider = this.GetComponent(UnityEngine.WheelCollider);
                this.m_AudioSource = this.GetComponent(UnityEngine.AudioSource);
                this.PlayingAudio = false;

                if (UnityEngine.Component.op_Equality(WheelEffects.skidTrailsDetachedParent, null)) {
                    WheelEffects.skidTrailsDetachedParent = new UnityEngine.GameObject.$ctor2("Skid Trails - Detached").transform;
                }
            },
            /*WheelEffects.Start end.*/

            /*WheelEffects.EmitTyreSmoke start.*/
            EmitTyreSmoke: function () {
                this.skidParticles.transform.gameObject.SetActive(false);
                this.skidParticles.transform.position = this.transform.position.$clone().sub( this.transform.up.$clone().scale( this.m_WheelCollider.radius ) );
                this.skidParticles.Emit(1);
                /* if (!skidding)
                {
                   StartCoroutine(StartSkidTrail());
                }*/
            },
            /*WheelEffects.EmitTyreSmoke end.*/

            /*WheelEffects.PlayAudio start.*/
            PlayAudio: function () {
                this.m_AudioSource.Play();
                this.PlayingAudio = true;
            },
            /*WheelEffects.PlayAudio end.*/

            /*WheelEffects.StopAudio start.*/
            StopAudio: function () {
                this.m_AudioSource.Stop();
                this.PlayingAudio = false;
            },
            /*WheelEffects.StopAudio end.*/

            /*WheelEffects.StartSkidTrail start.*/
            StartSkidTrail: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.skidding = true;
                                        this.m_SkidTrail = UnityEngine.Object.Instantiate(UnityEngine.Transform, this.SkidTrailPrefab);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( UnityEngine.Component.op_Equality(this.m_SkidTrail, null) ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.m_SkidTrail.parent = this.transform;
                                        this.m_SkidTrail.localPosition = pc.Vec3.UP.clone().scale( -1 ).scale( this.m_WheelCollider.radius );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*WheelEffects.StartSkidTrail end.*/

            /*WheelEffects.EndSkidTrail start.*/
            EndSkidTrail: function () {
                if (!this.skidding) {
                    return;
                }
                this.skidding = false;
                this.m_SkidTrail.parent = WheelEffects.skidTrailsDetachedParent;
                this.Destroy(this.m_SkidTrail.gameObject, 10);
            },
            /*WheelEffects.EndSkidTrail end.*/


        }
    });
    /*WheelEffects end.*/

    /*WinScreenWidget start.*/
    Bridge.define("WinScreenWidget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            RaceCar: null,
            WheatText: null,
            GemText: null,
            GameManager: null,
            products: null
        },
        methods: {
            /*WinScreenWidget.Start start.*/
            Start: function () {

            },
            /*WinScreenWidget.Start end.*/

            /*WinScreenWidget.OnEnable start.*/
            OnEnable: function () {
                Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.Score, this.products.Count(Products.Kind.Wheat));

                this.WheatText.text = Bridge.toString(this.products.Count(Products.Kind.Wheat));
                this.GemText.text = Bridge.toString(this.products.Count(Products.Kind.Gem));
                var outputProperties = this.GameManager.GetOutputProperties();
                outputProperties.ryeCount = this.products.Count(Products.Kind.Wheat);
                outputProperties.fuelCount = this.products.Count(Products.Kind.Fuel);
                outputProperties.gemCount = this.products.Count(Products.Kind.Gem);
                this.GameManager.SetOutputProperties(outputProperties.$clone());
            },
            /*WinScreenWidget.OnEnable end.*/

            /*WinScreenWidget.OnGameContinue start.*/
            OnGameContinue: function () {
                if (this.products.Count(Products.Kind.Gem) >= 10) {
                    this.products.Transfer(Products.Kind.Gem, -10);
                    this.RaceCar.gameObject.GetComponent(HealthController).Heal(100);
                    this.RaceCar.gameObject.GetComponent(CarUserControl).DeactivateHandbrake();
                    DG.Tweening.TweenSettingsExtensions.From$3(System.Single, System.Single, DG.Tweening.Plugins.Options.FloatOptions, DG.Tweening.DOTweenModuleUI.DOFade(this.GameManager.MainScreen, 1, 0.25), 0);
                    this.gameObject.SetActive(false);
                } else {
                    // Вернуться в основную игру для докупки или если не получится решить этот момент иначе
                }
            },
            /*WinScreenWidget.OnGameContinue end.*/


        }
    });
    /*WinScreenWidget end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
                    return this.moveThreshold;
                },
                set: function (value) {
                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.moveThreshold = 1;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*LootableItemEvent start.*/
    Bridge.define("LootableItemEvent", {
        inherits: [UnityEngine.Events.UnityEvent$1(Products.Kind)]
    });
    /*LootableItemEvent end.*/

    /*ProductsEvent start.*/
    Bridge.define("ProductsEvent", {
        inherits: [UnityEngine.Events.UnityEvent$1(Products.Kind)]
    });
    /*ProductsEvent end.*/

    /*SWS.BezierPathManager start.*/
    
    Bridge.define("SWS.BezierPathManager", {
        inherits: [SWS.PathManager],
        fields: {
            
            pathPoints: null,
            
            bPoints: null,
            
            showHandles: false,
            /**
             * Toggles independent control point handles on/off.
             *
             * @instance
             * @public
             * @memberof SWS.BezierPathManager
             * @default true
             * @type boolean
             */
            connectHandles: false,
            
            color3: null,
            
            pathDetail: 0,
            
            customDetail: false,
            
            segmentDetail: null
        },
        ctors: {
            init: function () {
                this.color3 = new UnityEngine.Color();
                this.pathPoints = System.Array.init([], UnityEngine.Vector3);
                this.bPoints = new (System.Collections.Generic.List$1(SWS.BezierPoint)).ctor();
                this.showHandles = true;
                this.connectHandles = true;
                this.color3 = new pc.Color( 0.423529416, 0.5921569, 1, 1 );
                this.pathDetail = 1;
                this.customDetail = false;
                this.segmentDetail = new (System.Collections.Generic.List$1(System.Single)).ctor();
            }
        },
        methods: {
            /*SWS.BezierPathManager.Awake$1 start.*/
            Awake$1: function () {
                SWS.WaypointManager.AddPath(this.gameObject);

                //do not recalculate automatically with runtime created paths
                if (this.bPoints == null || this.bPoints.Count === 0) {
                    return;
                }

                this.CalculatePath();
            },
            /*SWS.BezierPathManager.Awake$1 end.*/

            /*SWS.BezierPathManager.Create$1 start.*/
            /**
             * Create or update waypoint representation from the array passed in, optionally parenting them to the path.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {Array.<UnityEngine.Transform>}    waypoints       
             * @param   {boolean}                          makeChildren
             * @return  {void}
             */
            Create$1: function (waypoints, makeChildren) {
                if (makeChildren === void 0) { makeChildren = false; }
                if (waypoints.length < 2) {
                    UnityEngine.Debug.LogWarning$1("Not enough waypoints placed - minimum is 2. Cancelling.");
                    return;
                }

                if (makeChildren) {
                    for (var i = 0; i < waypoints.length; i = (i + 1) | 0) {
                        waypoints[i].parent = this.transform;
                    }
                }

                this.bPoints.clear();
                for (var i1 = 0; i1 < waypoints.length; i1 = (i1 + 1) | 0) {
                    var point = new SWS.BezierPoint();
                    point.wp = waypoints[i1];
                    point.cp = System.Array.init(2, null, UnityEngine.Transform);
                    point.cp[0] = point.wp.GetChild(0);
                    point.cp[1] = point.wp.GetChild(1);
                    this.bPoints.add(point);
                }

                //recalculate after modification
                this.CalculatePath();
            },
            /*SWS.BezierPathManager.Create$1 end.*/

            /*SWS.BezierPathManager.OnDrawGizmos$1 start.*/
            OnDrawGizmos$1: function () {
                if (this.bPoints.Count <= 0) {
                    return;
                }

                //assign path ends color
                var start = this.bPoints.getItem(0).wp.position.$clone();
                var end = this.bPoints.getItem(((this.bPoints.Count - 1) | 0)).wp.position.$clone();
                UnityEngine.Gizmos.color = this.color1.$clone();
                UnityEngine.Gizmos.DrawWireCube(start.$clone(), this.size.$clone().scale( this.GetHandleSize(start.$clone()) ).scale( 1.5 ));
                UnityEngine.Gizmos.DrawWireCube(end.$clone(), this.size.$clone().scale( this.GetHandleSize(end.$clone()) ).scale( 1.5 ));

                //assign line and waypoints color
                UnityEngine.Gizmos.color = this.color2.$clone();
                for (var i = 1; i < ((this.bPoints.Count - 1) | 0); i = (i + 1) | 0) {
                    UnityEngine.Gizmos.DrawWireSphere(this.bPoints.getItem(i).wp.position.$clone(), this.radius * this.GetHandleSize(this.bPoints.getItem(i).wp.position.$clone()));
                }

                //draw linear or curved lines with the same color
                if (this.drawCurved && this.bPoints.Count >= 2) {
                    SWS.WaypointManager.DrawCurved(this.pathPoints);
                } else {
                    SWS.WaypointManager.DrawStraight(this.pathPoints);
                }
            },
            /*SWS.BezierPathManager.OnDrawGizmos$1 end.*/

            /*SWS.BezierPathManager.GetPathPoints start.*/
            
            GetPathPoints: function (local) {
                if (local === void 0) { local = false; }
                var copy = System.Array.init(this.pathPoints.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);

                if (local) {
                    for (var i = 0; i < copy.length; i = (i + 1) | 0) {
                        copy[i] = this.transform.InverseTransformPoint(this.pathPoints[i]);
                    }
                } else {
                    System.Array.copy(this.pathPoints, 0, copy, 0, this.pathPoints.length);
                }

                return copy;
            },
            /*SWS.BezierPathManager.GetPathPoints end.*/

            /*SWS.BezierPathManager.GetWaypointCount start.*/
            /**
             * Returns waypoint length (should be equal to events count).
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @return  {number}
             */
            GetWaypointCount: function () {
                return this.bPoints.Count;
            },
            /*SWS.BezierPathManager.GetWaypointCount end.*/

            /*SWS.BezierPathManager.GetWaypoint start.*/
            /**
             * Returns the bezier path waypoint transform according to the index passed in.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {number}                   index
             * @return  {UnityEngine.Transform}
             */
            GetWaypoint: function (index) {
                return this.bPoints.getItem(index).wp;
            },
            /*SWS.BezierPathManager.GetWaypoint end.*/

            /*SWS.BezierPathManager.GetWaypointIndex start.*/
            /**
             * Converts bezier point on the path to waypoint index.
             Returns -1 if the point lies in between two waypoints.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {number}    pathPoint
             * @return  {number}
             */
            GetWaypointIndex: function (pathPoint) {
                var index = -1;
                var summedPoints = 0;
                var defaultPoints = 10;

                for (var i = 0; i < this.segmentDetail.Count; i = (i + 1) | 0) {
                    if (pathPoint === summedPoints) {
                        index = i;
                        break;
                    }

                    if (this.customDetail) {
                        summedPoints = (summedPoints + (Math.ceil(this.segmentDetail.getItem(i) * defaultPoints))) | 0;
                    } else {
                        summedPoints = (summedPoints + (Math.ceil(this.pathDetail * defaultPoints))) | 0;
                    }
                }

                return index;
            },
            /*SWS.BezierPathManager.GetWaypointIndex end.*/

            /*SWS.BezierPathManager.GetPathPointIndex start.*/
            /**
             * Converts waypoint index to bezier point on the path.
             *
             * @instance
             * @public
             * @override
             * @this SWS.BezierPathManager
             * @memberof SWS.BezierPathManager
             * @param   {number}    waypoint
             * @return  {number}
             */
            GetPathPointIndex: function (waypoint) {
                var summedPoints = 0;
                var defaultPoints = 10;

                for (var i = 0; i < this.segmentDetail.Count; i = (i + 1) | 0) {
                    if (i === waypoint) {
                        break;
                    }

                    if (this.customDetail) {
                        summedPoints = (summedPoints + (Math.ceil(this.segmentDetail.getItem(i) * defaultPoints))) | 0;
                    } else {
                        summedPoints = (summedPoints + (Math.ceil(this.pathDetail * defaultPoints))) | 0;
                    }
                }

                return summedPoints;
            },
            /*SWS.BezierPathManager.GetPathPointIndex end.*/

            /*SWS.BezierPathManager.CalculatePath start.*/
            
            CalculatePath: function () {
                var $t;
                //temporary list for final points
                var temp = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                var tempWps = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();

                //loop over bezier points (segments)
                for (var i = 0; i < ((this.bPoints.Count - 1) | 0); i = (i + 1) | 0) {
                    var bp = this.bPoints.getItem(i);
                    //get path detail value (default or custom)
                    var detail = this.pathDetail;
                    if (this.customDetail) {
                        detail = this.segmentDetail.getItem(i);
                    }
                    //calculate path points on this segment. Parameters:
                    //current waypoint position, current right handle position,
                    //next left handle position, next waypoint position, path detail
                    temp.AddRange(this.GetPoints(bp.wp.position.$clone(), bp.cp[1].position.$clone(), ($t = this.bPoints.getItem(((i + 1) | 0)).cp)[0].position.$clone(), this.bPoints.getItem(((i + 1) | 0)).wp.position.$clone(), detail));

                    tempWps.add(bp.wp);
                }
                tempWps.add(this.bPoints.getItem(((this.bPoints.Count - 1) | 0)).wp);

                //remove duplicates after calculation
                this.pathPoints = System.Linq.Enumerable.from(temp, UnityEngine.Vector3).distinct().ToArray(UnityEngine.Vector3);
                this.waypoints = tempWps.ToArray();
            },
            /*SWS.BezierPathManager.CalculatePath end.*/

            /*SWS.BezierPathManager.GetPoints start.*/
            GetPoints: function (p0, p1, p2, p3, detail) {
                //temporary list for final points on this segment
                var segmentPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                //multiply detail value to have at least 5-10+ iterations
                var iterations = detail * 10.0;
                for (var n = 0; n <= iterations; n = (n + 1) | 0) {
                    //cannot increment i as a float
                    var i = n / iterations;
                    var rest = (1.0 - i);
                    //bezier formula
                    var newPos = pc.Vec3.ZERO.clone();
                    newPos = newPos.$clone().add( p0.$clone().scale( rest ).scale( rest ).scale( rest ) );
                    newPos = newPos.$clone().add( p1.$clone().scale( i ).scale( 3.0 ).scale( rest ).scale( rest ) );
                    newPos = newPos.$clone().add( p2.$clone().scale( 3.0 ).scale( i ).scale( i ).scale( rest ) );
                    newPos = newPos.$clone().add( p3.$clone().scale( i ).scale( i ).scale( i ) );
                    //add calculated point to segment
                    segmentPoints.add(newPos.$clone());
                }
                //return points on this segment
                return segmentPoints;
            },
            /*SWS.BezierPathManager.GetPoints end.*/


        },
        overloads: {
            "Awake()": "Awake$1",
            "Create(Transform[], bool)": "Create$1",
            "OnDrawGizmos()": "OnDrawGizmos$1"
        }
    });
    /*SWS.BezierPathManager end.*/

    /*UnityStandardAssets.Cameras.PivotBasedCameraRig start.*/
    Bridge.define("UnityStandardAssets.Cameras.PivotBasedCameraRig", {
        inherits: [UnityStandardAssets.Cameras.AbstractTargetFollower],
        fields: {
            m_Cam: null,
            m_Pivot: null,
            m_LastTargetPosition: null
        },
        ctors: {
            init: function () {
                this.m_LastTargetPosition = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.PivotBasedCameraRig.Awake start.*/
            Awake: function () {
                // find the camera in the object hierarchy
                this.m_Cam = this.GetComponentInChildren(UnityEngine.Camera).transform;
                this.m_Pivot = this.m_Cam.parent;
            },
            /*UnityStandardAssets.Cameras.PivotBasedCameraRig.Awake end.*/


        }
    });
    /*UnityStandardAssets.Cameras.PivotBasedCameraRig end.*/

    /*UnityStandardAssets.Cameras.LookatTarget start.*/
    Bridge.define("UnityStandardAssets.Cameras.LookatTarget", {
        inherits: [UnityStandardAssets.Cameras.AbstractTargetFollower],
        fields: {
            m_RotationRange: null,
            m_FollowSpeed: 0,
            m_FollowAngles: null,
            m_OriginalRotation: null,
            m_FollowVelocity: null
        },
        ctors: {
            init: function () {
                this.m_RotationRange = new UnityEngine.Vector2();
                this.m_FollowAngles = new UnityEngine.Vector3();
                this.m_OriginalRotation = new UnityEngine.Quaternion();
                this.m_FollowVelocity = new UnityEngine.Vector3();
                this.m_FollowSpeed = 1;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.LookatTarget.Start start.*/
            Start: function () {
                UnityStandardAssets.Cameras.AbstractTargetFollower.prototype.Start.call(this);
                this.m_OriginalRotation = this.transform.localRotation.$clone();
            },
            /*UnityStandardAssets.Cameras.LookatTarget.Start end.*/

            /*UnityStandardAssets.Cameras.LookatTarget.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                // we make initial calculations from the original local rotation
                this.transform.localRotation = this.m_OriginalRotation.$clone();

                // tackle rotation around Y first
                var localTarget = this.transform.InverseTransformPoint(this.m_Target.position);
                var yAngle = Math.atan2(localTarget.x, localTarget.z) * UnityEngine.Mathf.Rad2Deg;

                yAngle = Math.max(-this.m_RotationRange.y * 0.5, Math.min(yAngle, this.m_RotationRange.y * 0.5));
                this.transform.localRotation = this.m_OriginalRotation.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0, yAngle, 0 ) );

                // then recalculate new local target position for rotation around X
                localTarget = this.transform.InverseTransformPoint(this.m_Target.position);
                var xAngle = Math.atan2(localTarget.y, localTarget.z) * UnityEngine.Mathf.Rad2Deg;
                xAngle = Math.max(-this.m_RotationRange.x * 0.5, Math.min(xAngle, this.m_RotationRange.x * 0.5));
                var targetAngles = new pc.Vec3( this.m_FollowAngles.x + UnityEngine.Mathf.DeltaAngle(this.m_FollowAngles.x, xAngle), this.m_FollowAngles.y + UnityEngine.Mathf.DeltaAngle(this.m_FollowAngles.y, yAngle), 0 );

                // smoothly interpolate the current angles to the target angles
                this.m_FollowAngles = pc.Vec3.smoothDamp( this.m_FollowAngles.$clone(), targetAngles.$clone(), Bridge.ref(this, "m_FollowVelocity"), this.m_FollowSpeed, Infinity, UnityEngine.Time.deltaTime );


                // and update the gameobject itself
                this.transform.localRotation = this.m_OriginalRotation.clone().mul( new pc.Quat().setFromEulerAngles_Unity( -this.m_FollowAngles.x, this.m_FollowAngles.y, 0 ) );
            },
            /*UnityStandardAssets.Cameras.LookatTarget.FollowTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.LookatTarget end.*/

    /*UnityStandardAssets.Cameras.TargetFieldOfView start.*/
    Bridge.define("UnityStandardAssets.Cameras.TargetFieldOfView", {
        inherits: [UnityStandardAssets.Cameras.AbstractTargetFollower],
        statics: {
            methods: {
                /*UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent:static start.*/
                MaxBoundsExtent: function (obj, includeEffects) {
                    var $t;
                    // get the maximum bounds extent of object, including all child renderers,
                    // but excluding particles and trails, for FOV zooming effect.

                    var renderers = obj.GetComponentsInChildren(UnityEngine.Renderer);

                    var bounds = new pc.BoundingBox.ctor();
                    var initBounds = false;
                    $t = Bridge.getEnumerator(renderers);
                    try {
                        while ($t.moveNext()) {
                            var r = $t.Current;
                            if (!((Bridge.is(r, UnityEngine.TrailRenderer)) || (Bridge.is(r, UnityEngine.ParticleSystemRenderer)))) {
                                if (!initBounds) {
                                    initBounds = true;
                                    bounds = r.bounds;
                                } else {
                                    bounds.add( r.bounds );
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    var max = UnityEngine.Mathf.Max(bounds.halfExtents.x, bounds.halfExtents.y, bounds.halfExtents.z);
                    return max;
                },
                /*UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent:static end.*/


            }
        },
        fields: {
            m_FovAdjustTime: 0,
            m_ZoomAmountMultiplier: 0,
            m_IncludeEffectsInSize: false,
            m_BoundSize: 0,
            m_FovAdjustVelocity: 0,
            m_Cam: null,
            m_LastTarget: null
        },
        ctors: {
            init: function () {
                this.m_FovAdjustTime = 1;
                this.m_ZoomAmountMultiplier = 2;
                this.m_IncludeEffectsInSize = false;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.TargetFieldOfView.Start start.*/
            Start: function () {
                UnityStandardAssets.Cameras.AbstractTargetFollower.prototype.Start.call(this);
                this.m_BoundSize = UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent(this.m_Target, this.m_IncludeEffectsInSize);

                // get a reference to the actual camera component:
                this.m_Cam = this.GetComponentInChildren(UnityEngine.Camera);
            },
            /*UnityStandardAssets.Cameras.TargetFieldOfView.Start end.*/

            /*UnityStandardAssets.Cameras.TargetFieldOfView.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                // calculate the correct field of view to fit the bounds size at the current distance
                var dist = (this.m_Target.position.$clone().sub( this.transform.position )).length();
                var requiredFOV = Math.atan2(this.m_BoundSize, dist) * UnityEngine.Mathf.Rad2Deg * this.m_ZoomAmountMultiplier;

                this.m_Cam.fieldOfView = UnityEngine.Mathf.SmoothDamp(this.m_Cam.fieldOfView, requiredFOV, Bridge.ref(this, "m_FovAdjustVelocity"), this.m_FovAdjustTime);
            },
            /*UnityStandardAssets.Cameras.TargetFieldOfView.FollowTarget end.*/

            /*UnityStandardAssets.Cameras.TargetFieldOfView.SetTarget start.*/
            SetTarget: function (newTransform) {
                UnityStandardAssets.Cameras.AbstractTargetFollower.prototype.SetTarget.call(this, newTransform);
                this.m_BoundSize = UnityStandardAssets.Cameras.TargetFieldOfView.MaxBoundsExtent(newTransform, this.m_IncludeEffectsInSize);
            },
            /*UnityStandardAssets.Cameras.TargetFieldOfView.SetTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.TargetFieldOfView end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
                    return this.moveThreshold;
                },
                set: function (value) {
                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.gameObject.SetActive(false);
                }

                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    /*UnityStandardAssets.Cameras.AutoCam start.*/
    Bridge.define("UnityStandardAssets.Cameras.AutoCam", {
        inherits: [UnityStandardAssets.Cameras.PivotBasedCameraRig],
        fields: {
            m_MoveSpeed: 0,
            m_TurnSpeed: 0,
            m_RollSpeed: 0,
            m_FollowVelocity: false,
            m_FollowTilt: false,
            m_SpinTurnLimit: 0,
            m_TargetVelocityLowerLimit: 0,
            m_SmoothTurnTime: 0,
            m_LastFlatAngle: 0,
            m_CurrentTurnAmount: 0,
            m_TurnSpeedVelocityChange: 0,
            m_RollUp: null
        },
        ctors: {
            init: function () {
                this.m_RollUp = new UnityEngine.Vector3();
                this.m_MoveSpeed = 3;
                this.m_TurnSpeed = 1;
                this.m_RollSpeed = 0.2;
                this.m_FollowVelocity = false;
                this.m_FollowTilt = true;
                this.m_SpinTurnLimit = 90;
                this.m_TargetVelocityLowerLimit = 4.0;
                this.m_SmoothTurnTime = 0.2;
                this.m_RollUp = pc.Vec3.UP.clone();
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.AutoCam.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                var $t;
                // if no target, or no time passed then we quit early, as there is nothing to do
                if (!(deltaTime > 0) || UnityEngine.Component.op_Equality(this.m_Target, null)) {
                    return;
                }

                // initialise some vars, we'll be modifying these in a moment
                var targetForward = this.m_Target.forward.$clone();
                var targetUp = this.m_Target.up.$clone();

                if (this.m_FollowVelocity && UnityEngine.Application.isPlaying) {
                    // in follow velocity mode, the camera's rotation is aligned towards the object's velocity direction
                    // but only if the object is traveling faster than a given threshold.

                    if (this.targetRigidbody.velocity.length() > this.m_TargetVelocityLowerLimit) {
                        // velocity is high enough, so we'll use the target's velocty
                        targetForward = this.targetRigidbody.velocity.clone().normalize().$clone(); //m_Target.forward; //targetRigidbody.velocity.normalized;
                        targetUp = pc.Vec3.UP.clone();
                    } else {
                        targetUp = pc.Vec3.UP.clone();
                    }
                    this.m_CurrentTurnAmount = UnityEngine.Mathf.SmoothDamp(this.m_CurrentTurnAmount, 1, Bridge.ref(this, "m_TurnSpeedVelocityChange"), this.m_SmoothTurnTime);
                } else {
                    // we're in 'follow rotation' mode, where the camera rig's rotation follows the object's rotation.

                    // This section allows the camera to stop following the target's rotation when the target is spinning too fast.
                    // eg when a car has been knocked into a spin. The camera will resume following the rotation
                    // of the target when the target's angular velocity slows below the threshold.
                    var currentFlatAngle = Math.atan2(targetForward.x, targetForward.z) * UnityEngine.Mathf.Rad2Deg;
                    if (this.m_SpinTurnLimit > 0) {
                        var targetSpinSpeed = Math.abs(UnityEngine.Mathf.DeltaAngle(this.m_LastFlatAngle, currentFlatAngle)) / deltaTime;
                        var desiredTurnAmount = ($t = this.m_SpinTurnLimit * 0.75, ( $t - this.m_SpinTurnLimit ) === 0 ? 0 : ( ((targetSpinSpeed - this.m_SpinTurnLimit) / ($t - this.m_SpinTurnLimit)) ));
                        var turnReactSpeed = (this.m_CurrentTurnAmount > desiredTurnAmount ? 0.1 : 1.0);
                        if (UnityEngine.Application.isPlaying) {
                            this.m_CurrentTurnAmount = UnityEngine.Mathf.SmoothDamp(this.m_CurrentTurnAmount, desiredTurnAmount, Bridge.ref(this, "m_TurnSpeedVelocityChange"), turnReactSpeed);
                        } else {
                            // for editor mode, smoothdamp won't work because it uses deltaTime internally
                            this.m_CurrentTurnAmount = desiredTurnAmount;
                        }
                    } else {
                        this.m_CurrentTurnAmount = 1;
                    }
                    this.m_LastFlatAngle = currentFlatAngle;
                }

                // camera position moves towards target position:
                this.transform.position = new pc.Vec3().lerp( this.transform.position, this.m_Target.position, deltaTime * this.m_MoveSpeed );

                // camera's rotation is split into two parts, which can have independend speed settings:
                // rotating towards the target's forward direction (which encompasses its 'yaw' and 'pitch')
                if (!this.m_FollowTilt) {
                    targetForward.y = 0;
                    if (targetForward.lengthSq() < 1.401298E-45) {
                        targetForward = this.transform.forward.$clone();
                    }
                }
                var rollRotation = new pc.Quat().setLookAt( targetForward, this.m_RollUp );

                // and aligning with the target object's up direction (i.e. its 'roll')
                this.m_RollUp = this.m_RollSpeed > 0 ? new pc.Vec3().slerp( this.m_RollUp, targetUp, this.m_RollSpeed * deltaTime ) : pc.Vec3.UP.clone();
                this.transform.rotation = new pc.Quat().slerp( this.transform.rotation, rollRotation, this.m_TurnSpeed * this.m_CurrentTurnAmount * deltaTime );
            },
            /*UnityStandardAssets.Cameras.AutoCam.FollowTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.AutoCam end.*/

    /*UnityStandardAssets.Cameras.FreeLookCam start.*/
    Bridge.define("UnityStandardAssets.Cameras.FreeLookCam", {
        inherits: [UnityStandardAssets.Cameras.PivotBasedCameraRig],
        statics: {
            fields: {
                k_LookDistance: 0
            },
            ctors: {
                init: function () {
                    this.k_LookDistance = 100.0;
                }
            }
        },
        fields: {
            m_MoveSpeed: 0,
            m_TurnSpeed: 0,
            m_TurnSmoothing: 0,
            m_TiltMax: 0,
            m_TiltMin: 0,
            m_LockCursor: false,
            m_VerticalAutoReturn: false,
            m_LookAngle: 0,
            m_TiltAngle: 0,
            m_PivotEulers: null,
            m_PivotTargetRot: null,
            m_TransformTargetRot: null
        },
        ctors: {
            init: function () {
                this.m_PivotEulers = new UnityEngine.Vector3();
                this.m_PivotTargetRot = new UnityEngine.Quaternion();
                this.m_TransformTargetRot = new UnityEngine.Quaternion();
                this.m_MoveSpeed = 1.0;
                this.m_TurnSpeed = 1.5;
                this.m_TurnSmoothing = 0.0;
                this.m_TiltMax = 75.0;
                this.m_TiltMin = 45.0;
                this.m_LockCursor = false;
                this.m_VerticalAutoReturn = false;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.FreeLookCam.Awake start.*/
            Awake: function () {
                UnityStandardAssets.Cameras.PivotBasedCameraRig.prototype.Awake.call(this);
                // Lock or unlock the cursor.
                UnityEngine.Cursor.lockState = this.m_LockCursor ? UnityEngine.CursorLockMode.Locked : UnityEngine.CursorLockMode.None;
                UnityEngine.Cursor.visible = !this.m_LockCursor;
                this.m_PivotEulers = this.m_Pivot.rotation.getPositiveEulerAngles().$clone();

                this.m_PivotTargetRot = this.m_Pivot.transform.localRotation.$clone();
                this.m_TransformTargetRot = this.transform.localRotation.$clone();
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.Awake end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.Update start.*/
            Update: function () {
                this.HandleRotationMovement();
                if (this.m_LockCursor && UnityEngine.Input.GetMouseButtonUp(0)) {
                    UnityEngine.Cursor.lockState = this.m_LockCursor ? UnityEngine.CursorLockMode.Locked : UnityEngine.CursorLockMode.None;
                    UnityEngine.Cursor.visible = !this.m_LockCursor;
                }
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.Update end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.OnDisable start.*/
            OnDisable: function () {
                UnityEngine.Cursor.lockState = UnityEngine.CursorLockMode.None;
                UnityEngine.Cursor.visible = true;
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.OnDisable end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                if (UnityEngine.Component.op_Equality(this.m_Target, null)) {
                    return;
                }
                // Move the rig towards target position.
                this.transform.position = new pc.Vec3().lerp( this.transform.position, this.m_Target.position, deltaTime * this.m_MoveSpeed );
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.FollowTarget end.*/

            /*UnityStandardAssets.Cameras.FreeLookCam.HandleRotationMovement start.*/
            HandleRotationMovement: function () {
                if (UnityEngine.Time.timeScale < 1.401298E-45) {
                    return;
                }

                // Read the user input
                //var x = CrossPlatformInputManager.GetAxis("Mouse X");
                //var y = CrossPlatformInputManager.GetAxis("Mouse Y");

                // Adjust the look angle by an amount proportional to the turn speed and horizontal input.
                //m_LookAngle += x*m_TurnSpeed;

                // Rotate the rig (the root object) around Y axis only:
                this.m_TransformTargetRot = new pc.Quat().setFromEulerAngles_Unity( 0.0, this.m_LookAngle, 0.0 );

                if (this.m_VerticalAutoReturn) {
                    // For tilt input, we need to behave differently depending on whether we're using mouse or touch input:
                    // on mobile, vertical input is directly mapped to tilt value, so it springs back automatically when the look input is released
                    // we have to test whether above or below zero because we want to auto-return to zero even if min and max are not symmetrical.
                    //m_TiltAngle = y > 0 ? Mathf.Lerp(0, -m_TiltMin, y) : Mathf.Lerp(0, m_TiltMax, -y);
                } else {
                    // on platforms with a mouse, we adjust the current angle based on Y mouse input and turn speed
                    //m_TiltAngle -= y*m_TurnSpeed;
                    // and make sure the new value is within the tilt range
                    this.m_TiltAngle = Math.max(-this.m_TiltMin, Math.min(this.m_TiltAngle, this.m_TiltMax));
                }

                // Tilt input around X is applied to the pivot (the child of this object)
                this.m_PivotTargetRot = new pc.Quat().setFromEulerAngles_Unity( this.m_TiltAngle, this.m_PivotEulers.y, this.m_PivotEulers.z );

                if (this.m_TurnSmoothing > 0) {
                    this.m_Pivot.localRotation = new pc.Quat().slerp( this.m_Pivot.localRotation, this.m_PivotTargetRot, this.m_TurnSmoothing * UnityEngine.Time.deltaTime );
                    this.transform.localRotation = new pc.Quat().slerp( this.transform.localRotation, this.m_TransformTargetRot, this.m_TurnSmoothing * UnityEngine.Time.deltaTime );
                } else {
                    this.m_Pivot.localRotation = this.m_PivotTargetRot.$clone();
                    this.transform.localRotation = this.m_TransformTargetRot.$clone();
                }
            },
            /*UnityStandardAssets.Cameras.FreeLookCam.HandleRotationMovement end.*/


        }
    });
    /*UnityStandardAssets.Cameras.FreeLookCam end.*/

    /*UnityStandardAssets.Cameras.HandHeldCam start.*/
    Bridge.define("UnityStandardAssets.Cameras.HandHeldCam", {
        inherits: [UnityStandardAssets.Cameras.LookatTarget],
        fields: {
            m_SwaySpeed: 0,
            m_BaseSwayAmount: 0,
            m_TrackingSwayAmount: 0,
            m_TrackingBias: 0
        },
        ctors: {
            init: function () {
                this.m_SwaySpeed = 0.5;
                this.m_BaseSwayAmount = 0.5;
                this.m_TrackingSwayAmount = 0.5;
                this.m_TrackingBias = 0;
            }
        },
        methods: {
            /*UnityStandardAssets.Cameras.HandHeldCam.FollowTarget start.*/
            FollowTarget: function (deltaTime) {
                UnityStandardAssets.Cameras.LookatTarget.prototype.FollowTarget.call(this, deltaTime);

                var bx = (pc.noise.perlin2(0, UnityEngine.Time.time * this.m_SwaySpeed) - 0.5);
                var by = (pc.noise.perlin2(0, (UnityEngine.Time.time * this.m_SwaySpeed) + 100)) - 0.5;

                bx *= this.m_BaseSwayAmount;
                by *= this.m_BaseSwayAmount;

                var tx = (pc.noise.perlin2(0, UnityEngine.Time.time * this.m_SwaySpeed) - 0.5) + this.m_TrackingBias;
                var ty = ((pc.noise.perlin2(0, (UnityEngine.Time.time * this.m_SwaySpeed) + 100)) - 0.5) + this.m_TrackingBias;

                tx *= -this.m_TrackingSwayAmount * this.m_FollowVelocity.x;
                ty *= this.m_TrackingSwayAmount * this.m_FollowVelocity.y;

                this.transform.Rotate(bx + tx, by + ty, 0);
            },
            /*UnityStandardAssets.Cameras.HandHeldCam.FollowTarget end.*/


        }
    });
    /*UnityStandardAssets.Cameras.HandHeldCam end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections.Generic","UnityEngine","UnityEngine.UI","UnityEngine.EventSystems","SWS","System.Collections","PathCreation","UnityEngine.Events","Assets.Scripts","UnityStandardAssets.Vehicles.Car","UnityStandardAssets.Cameras","PathCreation.Utility","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","DG.Tweening.Core","System.Globalization","DG.Tweening.Plugins.Options"];

    /*Boosts start.*/
    $m("Boosts", function () { return {"nested":[Boosts.DataItem],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Activate","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"Activate","rt":$n[0].Void,"p":[Products.Kind]},{"a":2,"n":"Deactivate","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"Deactivate","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"Data","t":4,"rt":$n[1].List$1(Boosts.DataItem),"sn":"Data"},{"a":2,"n":"OnBoostAdded","t":4,"rt":Function,"sn":"OnBoostAdded"},{"a":2,"n":"OnBoostRemoved","t":4,"rt":Function,"sn":"OnBoostRemoved"},{"a":1,"n":"kBoostDuration","t":4,"rt":$n[0].Single,"sn":"kBoostDuration","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Boosts end.*/

    /*Boosts+DataItem start.*/
    $m("Boosts.DataItem", function () { return {"td":Boosts,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Kind","t":4,"rt":Products.Kind,"sn":"Kind","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"TimeLeft","t":4,"rt":$n[0].Single,"sn":"TimeLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Boosts+DataItem end.*/

    /*BoostsPanelCtrl start.*/
    $m("BoostsPanelCtrl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnBoostAdded","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"OnBoostAdded","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"OnBoostRemoved","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"OnBoostRemoved","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"RecreateBoostWidgets","t":8,"sn":"RecreateBoostWidgets","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boosts","t":4,"rt":Boosts,"sn":"boosts"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"wgtBoostPrefab","t":4,"rt":$n[2].Transform,"sn":"wgtBoostPrefab"}]}; }, $n);
    /*BoostsPanelCtrl end.*/

    /*CheatSpeedTuning start.*/
    $m("CheatSpeedTuning", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"carUserControl","t":4,"rt":CarUserControl,"sn":"carUserControl"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slider","t":4,"rt":$n[3].Slider,"sn":"slider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"txtSpeed","t":4,"rt":$n[3].Text,"sn":"txtSpeed"}]}; }, $n);
    /*CheatSpeedTuning end.*/

    /*DamagingObstacle start.*/
    $m("DamagingObstacle", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.ParticleSystem)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ExplodeDueToCollision","t":8,"pi":[{"n":"playerPos","pt":$n[2].Vector3,"ps":0},{"n":"playerSpeed","pt":$n[0].Single,"ps":1}],"sn":"ExplodeDueToCollision","rt":$n[0].Void,"p":[$n[2].Vector3,$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Damage","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Damage","t":8,"rt":$n[0].Int32,"fg":"Damage","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Damage","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Damage"},"fn":"Damage"},{"a":1,"n":"explosionParticleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"explosionParticleSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_damage","t":4,"rt":$n[0].Int32,"sn":"m_damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parts","t":4,"rt":$n[2].Transform,"sn":"parts"}]}; }, $n);
    /*DamagingObstacle end.*/

    /*DisableIfTooFar start.*/
    $m("DisableIfTooFar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"RefreshDisableness","t":8,"sn":"RefreshDisableness","rt":$n[0].Void},{"a":2,"n":"SetTrackX","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"SetTrackX","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"carUserControl","t":4,"rt":CarUserControl,"sn":"carUserControl"},{"a":1,"n":"maxDistance","t":4,"rt":$n[0].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"meshRenderer","t":4,"rt":$n[2].MeshRenderer,"sn":"meshRenderer"},{"a":1,"n":"trackX","t":4,"rt":$n[0].Single,"sn":"trackX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"usingTrackX","t":4,"rt":$n[0].Boolean,"sn":"usingTrackX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DisableIfTooFar end.*/

    /*Explosion start.*/
    $m("Explosion", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"explosionParticleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"explosionParticleSystem"},{"a":1,"n":"explosionStarted","t":4,"rt":$n[0].Boolean,"sn":"explosionStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Explosion end.*/

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"rb","t":4,"rt":$n[2].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapX","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapY","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[3].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[3].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[2].Vector2,"ps":1},{"n":"radius","pt":$n[2].Vector2,"ps":2},{"n":"cam","pt":$n[2].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[2].Vector2,$n[2].Vector2,$n[2].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[2].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[2].Vector2,"p":[$n[2].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[2].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[2].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"a":2,"n":"Interactable","t":4,"rt":$n[0].Boolean,"sn":"Interactable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"background","t":4,"rt":$n[2].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[2].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[2].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handleRect","t":4,"rt":$n[2].RectTransform,"sn":"handleRect"},{"a":1,"n":"input","t":4,"rt":$n[2].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tempInput","t":4,"rt":$n[2].Vector2,"sn":"tempInput"}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[2].Vector2,"ps":1},{"n":"radius","pt":$n[2].Vector2,"ps":2},{"n":"cam","pt":$n[2].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[2].Vector2,$n[2].Vector2,$n[2].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[2].Vector2,"ps":1},{"n":"radius","pt":$n[2].Vector2,"ps":2},{"n":"cam","pt":$n[2].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[2].Vector2,$n[2].Vector2,$n[2].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[2].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*CameraInputDemo start.*/
    $m("CameraInputDemo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnGUI","t":8,"sn":"OnGUI","rt":$n[0].Void},{"a":2,"n":"ShowInformation","t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"ShowInformation","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"infoText","t":4,"rt":$n[0].String,"sn":"infoText"},{"a":1,"n":"myMove","t":4,"rt":$n[5].splineMove,"sn":"myMove"}]}; }, $n);
    /*CameraInputDemo end.*/

    /*EventReceiver start.*/
    $m("EventReceiver", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateForTime","t":8,"pi":[{"n":"target","pt":$n[2].Object,"ps":0}],"sn":"ActivateForTime","rt":$n[0].Void,"p":[$n[2].Object]},{"a":1,"n":"ActivateForTimeRoutine","t":8,"pi":[{"n":"target","pt":$n[2].Object,"ps":0}],"sn":"ActivateForTimeRoutine","rt":$n[6].IEnumerator,"p":[$n[2].Object]},{"a":2,"n":"MyMethod","t":8,"sn":"MyMethod","rt":$n[0].Void},{"a":2,"n":"PrintText","t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"PrintText","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"RotateSprite","t":8,"pi":[{"n":"newRot","pt":$n[0].Single,"ps":0}],"sn":"RotateSprite","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetDestination","t":8,"pi":[{"n":"target","pt":$n[2].Object,"ps":0}],"sn":"SetDestination","rt":$n[0].Void,"p":[$n[2].Object]},{"a":1,"n":"SetDestinationRoutine","t":8,"pi":[{"n":"target","pt":$n[2].Object,"ps":0}],"sn":"SetDestinationRoutine","rt":$n[6].IEnumerator,"p":[$n[2].Object]}]}; }, $n);
    /*EventReceiver end.*/

    /*PathInputDemo start.*/
    $m("PathInputDemo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"animator","t":4,"rt":$n[2].Animator,"sn":"animator"},{"a":1,"n":"move","t":4,"rt":$n[5].splineMove,"sn":"move"},{"a":2,"n":"progress","t":4,"rt":$n[0].Single,"sn":"progress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speedMultiplier","t":4,"rt":$n[0].Single,"sn":"speedMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PathInputDemo end.*/

    /*RapidInputDemo start.*/
    $m("RapidInputDemo", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SlowDown","t":8,"sn":"SlowDown","rt":$n[6].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"addSpeed","t":4,"rt":$n[0].Single,"sn":"addSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentSpeed","t":4,"rt":$n[0].Single,"sn":"currentSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxPitch","t":4,"rt":$n[0].Single,"sn":"maxPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minPitch","t":4,"rt":$n[0].Single,"sn":"minPitch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"move","t":4,"rt":$n[5].splineMove,"sn":"move"},{"a":2,"n":"slowTime","t":4,"rt":$n[0].Single,"sn":"slowTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speedDisplay","t":4,"rt":$n[2].TextMesh,"sn":"speedDisplay"},{"a":1,"n":"timeCounter","t":4,"rt":$n[0].Single,"sn":"timeCounter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"timeDisplay","t":4,"rt":$n[2].TextMesh,"sn":"timeDisplay"},{"a":2,"n":"topSpeed","t":4,"rt":$n[0].Single,"sn":"topSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RapidInputDemo end.*/

    /*RotationHelper start.*/
    $m("RotationHelper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rotation","t":4,"rt":$n[0].Int32,"sn":"rotation","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*RotationHelper end.*/

    /*RuntimeDemo start.*/
    $m("RuntimeDemo", function () { return {"nested":[RuntimeDemo.ExampleClass1,RuntimeDemo.ExampleClass2,RuntimeDemo.ExampleClass3,RuntimeDemo.ExampleClass4,RuntimeDemo.ExampleClass5,RuntimeDemo.ExampleClass6,RuntimeDemo.ExampleClass7],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DrawExample1","t":8,"sn":"DrawExample1","rt":$n[0].Void},{"a":1,"n":"DrawExample2","t":8,"sn":"DrawExample2","rt":$n[0].Void},{"a":1,"n":"DrawExample3","t":8,"sn":"DrawExample3","rt":$n[0].Void},{"a":1,"n":"DrawExample4","t":8,"sn":"DrawExample4","rt":$n[0].Void},{"a":1,"n":"DrawExample5","t":8,"sn":"DrawExample5","rt":$n[0].Void},{"a":1,"n":"DrawExample6","t":8,"sn":"DrawExample6","rt":$n[0].Void},{"a":1,"n":"DrawExample7","t":8,"sn":"DrawExample7","rt":$n[0].Void},{"a":1,"n":"OnGUI","t":8,"sn":"OnGUI","rt":$n[0].Void},{"a":2,"n":"example1","t":4,"rt":RuntimeDemo.ExampleClass1,"sn":"example1"},{"a":2,"n":"example2","t":4,"rt":RuntimeDemo.ExampleClass2,"sn":"example2"},{"a":2,"n":"example3","t":4,"rt":RuntimeDemo.ExampleClass3,"sn":"example3"},{"a":2,"n":"example4","t":4,"rt":RuntimeDemo.ExampleClass4,"sn":"example4"},{"a":2,"n":"example5","t":4,"rt":RuntimeDemo.ExampleClass5,"sn":"example5"},{"a":2,"n":"example6","t":4,"rt":RuntimeDemo.ExampleClass6,"sn":"example6"},{"a":2,"n":"example7","t":4,"rt":RuntimeDemo.ExampleClass6,"sn":"example7"}]}; }, $n);
    /*RuntimeDemo end.*/

    /*RuntimeDemo+ExampleClass1 start.*/
    $m("RuntimeDemo.ExampleClass1", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"done","t":4,"rt":$n[0].Boolean,"sn":"done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathPrefab","t":4,"rt":$n[2].GameObject,"sn":"pathPrefab"},{"a":2,"n":"walkerPrefab","t":4,"rt":$n[2].GameObject,"sn":"walkerPrefab"}]}; }, $n);
    /*RuntimeDemo+ExampleClass1 end.*/

    /*RuntimeDemo+ExampleClass2 start.*/
    $m("RuntimeDemo.ExampleClass2", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[5].splineMove,"sn":"moveRef"},{"a":2,"n":"pathName1","t":4,"rt":$n[0].String,"sn":"pathName1"},{"a":2,"n":"pathName2","t":4,"rt":$n[0].String,"sn":"pathName2"}]}; }, $n);
    /*RuntimeDemo+ExampleClass2 end.*/

    /*RuntimeDemo+ExampleClass3 start.*/
    $m("RuntimeDemo.ExampleClass3", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[5].splineMove,"sn":"moveRef"}]}; }, $n);
    /*RuntimeDemo+ExampleClass3 end.*/

    /*RuntimeDemo+ExampleClass4 start.*/
    $m("RuntimeDemo.ExampleClass4", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[5].splineMove,"sn":"moveRef"}]}; }, $n);
    /*RuntimeDemo+ExampleClass4 end.*/

    /*RuntimeDemo+ExampleClass5 start.*/
    $m("RuntimeDemo.ExampleClass5", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"moveRef","t":4,"rt":$n[5].splineMove,"sn":"moveRef"}]}; }, $n);
    /*RuntimeDemo+ExampleClass5 end.*/

    /*RuntimeDemo+ExampleClass6 start.*/
    $m("RuntimeDemo.ExampleClass6", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"done","t":4,"rt":$n[0].Boolean,"sn":"done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"moveRef","t":4,"rt":$n[5].splineMove,"sn":"moveRef"},{"a":2,"n":"target","t":4,"rt":$n[2].GameObject,"sn":"target"}]}; }, $n);
    /*RuntimeDemo+ExampleClass6 end.*/

    /*RuntimeDemo+ExampleClass7 start.*/
    $m("RuntimeDemo.ExampleClass7", function () { return {"td":RuntimeDemo,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"done","t":4,"rt":$n[0].Boolean,"sn":"done","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*RuntimeDemo+ExampleClass7 end.*/

    /*FPSWriter start.*/
    $m("FPSWriter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"m_frameCounter","t":4,"rt":$n[0].Int32,"sn":"m_frameCounter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"m_lastFramerate","t":4,"rt":$n[0].Single,"sn":"m_lastFramerate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"m_refreshTime","t":4,"rt":$n[0].Single,"sn":"m_refreshTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_timeCounter","t":4,"rt":$n[0].Single,"sn":"m_timeCounter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FPSWriter end.*/

    /*GhostReader start.*/
    $m("GhostReader", function () { return {"nested":[GhostReader.EntryKind,GhostReader.Entry],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Perform","t":8,"pi":[{"n":"entry","pt":GhostReader.Entry,"ps":0}],"sn":"Perform","rt":$n[0].Void,"p":[GhostReader.Entry]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"data","t":4,"rt":$n[1].List$1(GhostReader.Entry),"sn":"data"},{"a":1,"n":"distance","t":4,"rt":$n[0].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ghost","t":4,"rt":$n[2].Transform,"sn":"ghost"},{"a":1,"n":"isTurningLeft","t":4,"rt":$n[0].Boolean,"sn":"isTurningLeft","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTurningRight","t":4,"rt":$n[0].Boolean,"sn":"isTurningRight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathCreator","t":4,"rt":$n[7].PathCreator,"sn":"pathCreator"},{"a":1,"n":"sideOffset","t":4,"rt":$n[0].Single,"sn":"sideOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"started","t":4,"rt":$n[0].Boolean,"sn":"started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"turningAngle","t":4,"rt":$n[0].Single,"sn":"turningAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GhostReader end.*/

    /*GhostReader+EntryKind start.*/
    $m("GhostReader.EntryKind", function () { return {"td":GhostReader,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Collision","is":true,"t":4,"rt":GhostReader.EntryKind,"sn":"Collision","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}},{"a":2,"n":"LeftEnded","is":true,"t":4,"rt":GhostReader.EntryKind,"sn":"LeftEnded","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}},{"a":2,"n":"LeftStarted","is":true,"t":4,"rt":GhostReader.EntryKind,"sn":"LeftStarted","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}},{"a":2,"n":"Pew","is":true,"t":4,"rt":GhostReader.EntryKind,"sn":"Pew","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}},{"a":2,"n":"RightEnded","is":true,"t":4,"rt":GhostReader.EntryKind,"sn":"RightEnded","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}},{"a":2,"n":"RightStarted","is":true,"t":4,"rt":GhostReader.EntryKind,"sn":"RightStarted","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}},{"a":2,"n":"Start","is":true,"t":4,"rt":GhostReader.EntryKind,"sn":"Start","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}}]}; }, $n);
    /*GhostReader+EntryKind end.*/

    /*GhostReader+Entry start.*/
    $m("GhostReader.Entry", function () { return {"td":GhostReader,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"distance","t":4,"rt":$n[0].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"kind","t":4,"rt":GhostReader.EntryKind,"sn":"kind","box":function ($v) { return Bridge.box($v, GhostReader.EntryKind, System.Enum.toStringFn(GhostReader.EntryKind));}},{"a":2,"n":"sideOffset","t":4,"rt":$n[0].Single,"sn":"sideOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GhostReader+Entry end.*/

    /*GhostWriter start.*/
    $m("GhostWriter", function () { return {"nested":[GhostWriter.EntryKind,GhostWriter.Entry],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddEntry","t":8,"pi":[{"n":"kind","pt":GhostWriter.EntryKind,"ps":0}],"sn":"AddEntry","rt":$n[0].Void,"p":[GhostWriter.EntryKind]},{"a":2,"n":"Dump","t":8,"sn":"Dump","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"carUserControl","t":4,"rt":CarUserControl,"sn":"carUserControl"},{"a":2,"n":"data","t":4,"rt":$n[1].List$1(GhostWriter.Entry),"sn":"data"},{"a":2,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GhostWriter end.*/

    /*GhostWriter+EntryKind start.*/
    $m("GhostWriter.EntryKind", function () { return {"td":GhostWriter,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Collision","is":true,"t":4,"rt":GhostWriter.EntryKind,"sn":"Collision","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}},{"a":2,"n":"LeftEnded","is":true,"t":4,"rt":GhostWriter.EntryKind,"sn":"LeftEnded","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}},{"a":2,"n":"LeftStarted","is":true,"t":4,"rt":GhostWriter.EntryKind,"sn":"LeftStarted","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}},{"a":2,"n":"Pew","is":true,"t":4,"rt":GhostWriter.EntryKind,"sn":"Pew","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}},{"a":2,"n":"RightEnded","is":true,"t":4,"rt":GhostWriter.EntryKind,"sn":"RightEnded","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}},{"a":2,"n":"RightStarted","is":true,"t":4,"rt":GhostWriter.EntryKind,"sn":"RightStarted","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}},{"a":2,"n":"Start","is":true,"t":4,"rt":GhostWriter.EntryKind,"sn":"Start","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}}]}; }, $n);
    /*GhostWriter+EntryKind end.*/

    /*GhostWriter+Entry start.*/
    $m("GhostWriter.Entry", function () { return {"td":GhostWriter,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"distance","t":4,"rt":$n[0].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"kind","t":4,"rt":GhostWriter.EntryKind,"sn":"kind","box":function ($v) { return Bridge.box($v, GhostWriter.EntryKind, System.Enum.toStringFn(GhostWriter.EntryKind));}},{"a":2,"n":"sideOffset","t":4,"rt":$n[0].Single,"sn":"sideOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GhostWriter+Entry end.*/

    /*Gun start.*/
    $m("Gun", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"shootTimeout","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_shootTimeout","t":8,"rt":$n[0].Single,"fg":"shootTimeout","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_shootTimeout","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"shootTimeout"},"fn":"shootTimeout"},{"a":2,"n":"shootTimeoutTimer","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_shootTimeoutTimer","t":8,"rt":$n[0].Single,"fg":"shootTimeoutTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_shootTimeoutTimer","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"shootTimeoutTimer"},"fn":"shootTimeoutTimer"},{"a":2,"n":"carUserControl","t":4,"rt":CarUserControl,"sn":"carUserControl"},{"a":2,"n":"products","t":4,"rt":Products,"sn":"products"},{"a":2,"n":"rocketPrefab","t":4,"rt":$n[2].Transform,"sn":"rocketPrefab"},{"a":1,"backing":true,"n":"<shootTimeout>k__BackingField","t":4,"rt":$n[0].Single,"sn":"shootTimeout","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<shootTimeoutTimer>k__BackingField","t":4,"rt":$n[0].Single,"sn":"shootTimeoutTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Gun end.*/

    /*HealthController start.*/
    $m("HealthController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Damage","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"Damage","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"Heal","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"Heal","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"OnBoostAdded","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"OnBoostAdded","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"OnBoostRemoved","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"OnBoostRemoved","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"PerformHealthCheck","t":8,"sn":"PerformHealthCheck","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Health","t":4,"rt":$n[0].Single,"sn":"Health","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LossScreen","t":4,"rt":$n[2].CanvasGroup,"sn":"LossScreen"},{"a":2,"n":"MainScreen","t":4,"rt":$n[2].CanvasGroup,"sn":"MainScreen"},{"a":2,"n":"MaxHealth","t":4,"rt":$n[0].Single,"sn":"MaxHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"MaxShield","t":4,"rt":$n[0].Single,"sn":"MaxShield","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnDamaged","t":4,"rt":Function,"sn":"OnDamaged"},{"a":2,"n":"OnHealed","t":4,"rt":Function,"sn":"OnHealed"},{"a":2,"n":"OnShieldDamaged","t":4,"rt":Function,"sn":"OnShieldDamaged"},{"a":2,"n":"OnShieldLowered","t":4,"rt":Function,"sn":"OnShieldLowered"},{"a":2,"n":"OnShieldRaised","t":4,"rt":Function,"sn":"OnShieldRaised"},{"a":2,"n":"Shield","t":4,"rt":$n[0].Single,"sn":"Shield","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boosts","t":4,"rt":Boosts,"sn":"boosts"}]}; }, $n);
    /*HealthController end.*/

    /*JustWheelMeshes start.*/
    $m("JustWheelMeshes", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"m_WheelMeshes","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"m_WheelMeshes"}]}; }, $n);
    /*JustWheelMeshes end.*/

    /*LightPole start.*/
    $m("LightPole", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"scaleHeight","t":4,"rt":$n[0].Single,"sn":"scaleHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"scaleWidth","t":4,"rt":$n[0].Single,"sn":"scaleWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LightPole end.*/

    /*LongTapButton start.*/
    $m("LongTapButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"OnMouseDownEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnMouseDownEvent"},{"a":2,"n":"OnMouseUpEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnMouseUpEvent"}]}; }, $n);
    /*LongTapButton end.*/

    /*LootableItemEvent start.*/
    $m("LootableItemEvent", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*LootableItemEvent end.*/

    /*LootableItem start.*/
    $m("LootableItem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"OnLootableItemCollected","t":4,"rt":LootableItemEvent,"sn":"OnLootableItemCollected"},{"a":1,"n":"angle","t":4,"rt":$n[0].Single,"sn":"angle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"item","t":4,"rt":$n[2].Transform,"sn":"item"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"kind","t":4,"rt":Products.Kind,"sn":"kind","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":1,"n":"rotationDegreesPerSecond","t":4,"rt":$n[0].Single,"sn":"rotationDegreesPerSecond","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LootableItem end.*/

    /*ProductsEvent start.*/
    $m("ProductsEvent", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*ProductsEvent end.*/

    /*Products start.*/
    $m("Products", function () { return {"nested":[Products.Kind],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Count","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"Count","rt":$n[0].Int32,"p":[Products.Kind],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"IsBoost","is":true,"t":8,"pi":[{"n":"value","pt":Products.Kind,"ps":0}],"sn":"IsBoost","rt":$n[0].Boolean,"p":[Products.Kind],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Transfer","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0},{"n":"value","pt":$n[0].Int32,"ps":1}],"sn":"Transfer","rt":$n[0].Void,"p":[Products.Kind,$n[0].Int32]},{"a":2,"n":"OnProductsNumberChanged","t":4,"rt":ProductsEvent,"sn":"OnProductsNumberChanged"},{"a":1,"n":"data","t":4,"rt":$n[1].Dictionary$2(Products.Kind,System.Int32),"sn":"data"}]}; }, $n);
    /*Products end.*/

    /*Products+Kind start.*/
    $m("Products.Kind", function () { return {"td":Products,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Double","is":true,"t":4,"rt":Products.Kind,"sn":"Double","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"Fuel","is":true,"t":4,"rt":Products.Kind,"sn":"Fuel","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"Gem","is":true,"t":4,"rt":Products.Kind,"sn":"Gem","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"Heart","is":true,"t":4,"rt":Products.Kind,"sn":"Heart","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"Rocket","is":true,"t":4,"rt":Products.Kind,"sn":"Rocket","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"Shield","is":true,"t":4,"rt":Products.Kind,"sn":"Shield","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"Wheat","is":true,"t":4,"rt":Products.Kind,"sn":"Wheat","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}}]}; }, $n);
    /*Products+Kind end.*/

    /*RoadGenerator start.*/
    $m("RoadGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Generate","t":8,"pi":[{"n":"pathCreator","pt":$n[7].PathCreator,"ps":0}],"sn":"Generate","rt":$n[0].Void,"p":[$n[7].PathCreator]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"fencePiece","t":4,"rt":$n[2].GameObject,"sn":"fencePiece"},{"a":1,"n":"width","t":4,"rt":$n[0].Single,"sn":"width","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RoadGenerator end.*/

    /*Rocket start.*/
    $m("Rocket", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Explode","t":8,"sn":"Explode","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Fly","t":8,"pi":[{"n":"_path","pt":$n[7].PathCreator,"ps":0},{"n":"_trackX","pt":$n[0].Single,"ps":1},{"n":"_trackY","pt":$n[0].Single,"ps":2},{"n":"_additionalSpeed","pt":$n[0].Single,"ps":3}],"sn":"Fly","rt":$n[0].Void,"p":[$n[7].PathCreator,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"RefreshPosition","t":8,"sn":"RefreshPosition","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"additionalSpeed","t":4,"rt":$n[0].Single,"sn":"additionalSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"explosionPrefab","t":4,"rt":$n[2].Transform,"sn":"explosionPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jetStream","t":4,"rt":$n[2].ParticleSystem,"sn":"jetStream"},{"a":1,"n":"path","t":4,"rt":$n[7].PathCreator,"sn":"path"},{"a":1,"n":"selfSpeed","t":4,"rt":$n[0].Single,"sn":"selfSpeed","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"trackX","t":4,"rt":$n[0].Single,"sn":"trackX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"trackY","t":4,"rt":$n[0].Single,"sn":"trackY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Rocket end.*/

    /*RocketsPanelCtrl start.*/
    $m("RocketsPanelCtrl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"RefreshRocketsNumber","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"RefreshRocketsNumber","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"products","t":4,"rt":Products,"sn":"products"},{"a":2,"n":"rocketPrefab","t":4,"rt":$n[2].Transform,"sn":"rocketPrefab"}]}; }, $n);
    /*RocketsPanelCtrl end.*/

    /*BlobShadowMovement start.*/
    $m("BlobShadowMovement", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Offset","t":4,"rt":$n[2].Vector3,"sn":"Offset"},{"a":2,"n":"Target","t":4,"rt":$n[2].Transform,"sn":"Target"},{"a":1,"n":"_Position","t":4,"rt":$n[2].Vector3,"sn":"_Position"}]}; }, $n);
    /*BlobShadowMovement end.*/

    /*Bot start.*/
    $m("Bot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"StartMove","t":8,"sn":"StartMove","rt":$n[0].Void},{"a":2,"n":"StopMove","t":8,"sn":"StopMove","rt":$n[0].Void},{"a":2,"n":"BotWheels","t":4,"rt":BotWheels,"sn":"BotWheels"},{"a":2,"n":"RaceCar","t":4,"rt":RaceCar,"sn":"RaceCar"},{"a":2,"n":"SplineMove","t":4,"rt":$n[5].splineMove,"sn":"SplineMove"}]}; }, $n);
    /*Bot end.*/

    /*BotWheels start.*/
    $m("BotWheels", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"IsRotating","t":4,"rt":$n[0].Boolean,"sn":"IsRotating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RotationSpeed","t":4,"rt":$n[0].Single,"sn":"RotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Wheels","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"Wheels"}]}; }, $n);
    /*BotWheels end.*/

    /*CameraFollower start.*/
    $m("CameraFollower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"CameraSpeed","t":4,"rt":$n[0].Single,"sn":"CameraSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PositionOffset","t":4,"rt":$n[2].Vector3,"sn":"PositionOffset"},{"a":2,"n":"RotationOffset","t":4,"rt":$n[2].Vector3,"sn":"RotationOffset"},{"a":2,"n":"Target","t":4,"rt":$n[2].Transform,"sn":"Target"}]}; }, $n);
    /*CameraFollower end.*/

    /*CarTrigger start.*/
    $m("CarTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":2,"n":"OnTriggerEnterEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnTriggerEnterEvent"},{"a":2,"n":"OnTriggerExitEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnTriggerExitEvent"},{"a":2,"n":"OnTriggerStayEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnTriggerStayEvent"}]}; }, $n);
    /*CarTrigger end.*/

    /*DriverDescription start.*/
    $m("DriverDescription", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "NewDriverDescription", menuName: "Custom/DriverDescription"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.TooltipAttribute("\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0443 \u0432 GameManager.tracktors")],"a":2,"n":"driverPrefab","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"driverPrefab"}]}; }, $n);
    /*DriverDescription end.*/

    /*FinishTrigger start.*/
    $m("FinishTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trackHandles","t":4,"rt":TrackHandles,"sn":"trackHandles"}]}; }, $n);
    /*FinishTrigger end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CallFinishWebContent","t":8,"sn":"CallFinishWebContent","rt":$n[0].Void},{"a":2,"n":"CheatTeleportToFinish","t":8,"sn":"CheatTeleportToFinish","rt":$n[0].Void},{"a":2,"n":"DestroyObstacles","t":8,"sn":"DestroyObstacles","rt":$n[0].Void},{"a":2,"n":"GasOnOff","t":8,"sn":"GasOnOff","rt":$n[0].Void},{"a":2,"n":"GetInputProperties","t":8,"sn":"GetInputProperties","rt":WebContentProxy.InputProperties},{"a":2,"n":"GetOutputProperties","t":8,"sn":"GetOutputProperties","rt":WebContentProxy.OutputProperties},{"a":1,"n":"OnCountdownEndedHandler","t":8,"sn":"OnCountdownEndedHandler","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnEndTutorialHandler","t":8,"sn":"OnEndTutorialHandler","rt":$n[0].Void},{"a":1,"n":"PauseGameplay","t":8,"sn":"PauseGameplay","rt":$n[0].Void},{"a":2,"n":"ReloadScene","t":8,"sn":"ReloadScene","rt":$n[0].Void},{"a":1,"n":"ResumeGameplay","t":8,"sn":"ResumeGameplay","rt":$n[0].Void},{"a":2,"n":"SetOutputProperties","t":8,"pi":[{"n":"properties","pt":WebContentProxy.OutputProperties,"ps":0}],"sn":"SetOutputProperties","rt":$n[0].Void,"p":[WebContentProxy.OutputProperties]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdatePositions","t":8,"sn":"UpdatePositions","rt":$n[0].Void},{"a":1,"n":"WheatCull","t":8,"sn":"WheatCull","rt":$n[0].Void},{"a":2,"n":"CarUserControl","t":4,"rt":CarUserControl,"sn":"CarUserControl"},{"at":[new UnityEngine.HeaderAttribute("UI")],"a":2,"n":"CountdownWidget","t":4,"rt":Countdown,"sn":"CountdownWidget"},{"a":2,"n":"LandscapeFov","t":4,"rt":$n[0].Single,"sn":"LandscapeFov","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"LastCheckpoint","t":4,"rt":$n[2].Transform,"sn":"LastCheckpoint"},{"a":2,"n":"LoseScreen","t":4,"rt":$n[2].CanvasGroup,"sn":"LoseScreen"},{"a":2,"n":"MainBackroundImage","t":4,"rt":$n[3].Image,"sn":"MainBackroundImage"},{"at":[new UnityEngine.HeaderAttribute("Camera")],"a":2,"n":"MainCamera","t":4,"rt":$n[2].Camera,"sn":"MainCamera"},{"a":2,"n":"MainScreen","t":4,"rt":$n[2].CanvasGroup,"sn":"MainScreen"},{"a":2,"n":"Opponents","t":4,"rt":System.Array.type(Bot),"sn":"Opponents"},{"at":[new UnityEngine.HeaderAttribute("Positions")],"a":2,"n":"PlayerCar","t":4,"rt":RaceCar,"sn":"PlayerCar"},{"a":2,"n":"PortraitFov","t":4,"rt":$n[0].Single,"sn":"PortraitFov","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Position","t":4,"rt":$n[0].Int32,"sn":"Position","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TutorialWindow","t":4,"rt":$n[2].CanvasGroup,"sn":"TutorialWindow"},{"a":2,"n":"WheatCullDistance","t":4,"rt":$n[0].Single,"sn":"WheatCullDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"WinScreen","t":4,"rt":$n[2].CanvasGroup,"sn":"WinScreen"},{"a":1,"n":"_OpponentDistance","t":4,"rt":$n[0].Single,"sn":"_OpponentDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_PlayerDistance","t":4,"rt":$n[0].Single,"sn":"_PlayerDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_WebContentProxy","t":4,"rt":WebContentProxy,"sn":"_WebContentProxy"},{"a":1,"n":"_Wheat","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_Wheat"},{"at":[new UnityEngine.HeaderAttribute("Wheat"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_WheatCullDistance","t":4,"rt":$n[0].Single,"sn":"_WheatCullDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"btnLeft","t":4,"rt":LongTapButton,"sn":"btnLeft"},{"a":2,"n":"btnRight","t":4,"rt":LongTapButton,"sn":"btnRight"},{"a":2,"n":"drivers","t":4,"rt":System.Array.type(DriverDescription),"sn":"drivers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ghostReader","t":4,"rt":GhostReader,"sn":"ghostReader"},{"a":2,"n":"healthBar","t":4,"rt":HealthBar,"sn":"healthBar"},{"a":2,"n":"healthController","t":4,"rt":HealthController,"sn":"healthController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"roadGenerator","t":4,"rt":RoadGenerator,"sn":"roadGenerator"},{"a":1,"n":"track","t":4,"rt":$n[2].GameObject,"sn":"track"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trackContentGenerator","t":4,"rt":TrackContentGenerator,"sn":"trackContentGenerator"},{"a":1,"n":"trackHandles","t":4,"rt":TrackHandles,"sn":"trackHandles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trackParent","t":4,"rt":$n[2].GameObject,"sn":"trackParent"},{"a":2,"n":"trackPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"trackPrefabs"},{"at":[new UnityEngine.HeaderAttribute("Customization")],"a":2,"n":"tracktors","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"tracktors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"wheatGenerator","t":4,"rt":WheatGenerator,"sn":"wheatGenerator"}]}; }, $n);
    /*GameManager end.*/

    /*Localization start.*/
    $m("Localization", function () { return {"nested":[Localization.LocalizationData,Localization.LocalizationString],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetLocalsById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"GetLocalsById","rt":$n[0].String,"p":[$n[0].String]},{"a":1,"n":"SetLanguage","t":8,"sn":"SetLanguage","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"englishAsset","t":4,"rt":$n[2].TextAsset,"sn":"englishAsset"},{"a":1,"n":"locals","t":4,"rt":$n[1].Dictionary$2(System.String,System.String),"sn":"locals"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"russianAsset","t":4,"rt":$n[2].TextAsset,"sn":"russianAsset"}]}; }, $n);
    /*Localization end.*/

    /*Localization+LocalizationData start.*/
    $m("Localization.LocalizationData", function () { return {"td":Localization,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"locals","t":4,"rt":System.Array.type(Localization.LocalizationString),"sn":"locals"}]}; }, $n);
    /*Localization+LocalizationData end.*/

    /*Localization+LocalizationString start.*/
    $m("Localization.LocalizationString", function () { return {"td":Localization,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"localText","t":4,"rt":$n[0].String,"sn":"localText"}]}; }, $n);
    /*Localization+LocalizationString end.*/

    /*RaceCar start.*/
    $m("RaceCar", function () { return {"nested":[RaceCar.OwnerType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnBoostAdded","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"OnBoostAdded","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"OnBoostRemoved","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"OnBoostRemoved","rt":$n[0].Void,"p":[Products.Kind]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"OnWheatCollected","t":4,"rt":Function,"sn":"OnWheatCollected"},{"a":2,"n":"Owner","t":4,"rt":RaceCar.OwnerType,"sn":"Owner","box":function ($v) { return Bridge.box($v, RaceCar.OwnerType, System.Enum.toStringFn(RaceCar.OwnerType));}},{"a":2,"n":"Score","t":4,"rt":$n[0].Int32,"sn":"Score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"activeBoostEffects","t":4,"rt":$n[1].Dictionary$2(Products.Kind,UnityEngine.GameObject),"sn":"activeBoostEffects"},{"a":2,"n":"boosts","t":4,"rt":Boosts,"sn":"boosts"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boostsEffectPosition","t":4,"rt":$n[2].Transform,"sn":"boostsEffectPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"effectDoublePrefab","t":4,"rt":$n[2].GameObject,"sn":"effectDoublePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"effectSheildPrefab","t":4,"rt":$n[2].GameObject,"sn":"effectSheildPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"products","t":4,"rt":Products,"sn":"products"}]}; }, $n);
    /*RaceCar end.*/

    /*RaceCar+OwnerType start.*/
    $m("RaceCar.OwnerType", function () { return {"td":RaceCar,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OPPONENT","is":true,"t":4,"rt":RaceCar.OwnerType,"sn":"OPPONENT","box":function ($v) { return Bridge.box($v, RaceCar.OwnerType, System.Enum.toStringFn(RaceCar.OwnerType));}},{"a":2,"n":"PLAYER","is":true,"t":4,"rt":RaceCar.OwnerType,"sn":"PLAYER","box":function ($v) { return Bridge.box($v, RaceCar.OwnerType, System.Enum.toStringFn(RaceCar.OwnerType));}}]}; }, $n);
    /*RaceCar+OwnerType end.*/

    /*ScenePreloader start.*/
    $m("ScenePreloader", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*ScenePreloader end.*/

    /*TrackContentGenerator start.*/
    $m("TrackContentGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Generate","t":8,"pi":[{"n":"pathCreator","pt":$n[7].PathCreator,"ps":0},{"n":"parent","pt":$n[2].Transform,"ps":1}],"sn":"Generate","rt":$n[0].Void,"p":[$n[7].PathCreator,$n[2].Transform]},{"a":2,"n":"OnItemCollected","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0},{"n":"amout","pt":$n[0].Int32,"ps":1}],"sn":"OnItemCollected","rt":$n[0].Void,"p":[Products.Kind,$n[0].Int32]},{"a":1,"n":"OnLootableItemCollected","t":8,"pi":[{"n":"kind","pt":Products.Kind,"ps":0}],"sn":"OnLootableItemCollected","rt":$n[0].Void,"p":[Products.Kind]},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"AlreadyGenerated","t":4,"rt":$n[1].List$1(UnityEngine.Transform),"sn":"AlreadyGenerated"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bonusesPrefabs","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"bonusesPrefabs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boosts","t":4,"rt":Boosts,"sn":"boosts"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"configFile","t":4,"rt":$n[2].TextAsset,"sn":"configFile"},{"a":1,"n":"finishOffset","t":4,"rt":$n[0].Single,"sn":"finishOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"generationParams","t":4,"rt":$n[9].TrackContentGenerationParams,"sn":"generationParams"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hardObstaclesPrefabs","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"hardObstaclesPrefabs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"healthController","t":4,"rt":HealthController,"sn":"healthController"},{"a":1,"n":"itemSize","t":4,"rt":$n[0].Single,"sn":"itemSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstaclesPrefabs","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"obstaclesPrefabs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parentForPlacing","t":4,"rt":$n[2].Transform,"sn":"parentForPlacing"},{"at":[new UnityEngine.HeaderAttribute("LogicalLinks"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"products","t":4,"rt":Products,"sn":"products"},{"a":1,"n":"rowWidth","t":4,"rt":$n[0].Single,"sn":"rowWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startOffset","t":4,"rt":$n[0].Single,"sn":"startOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TrackContentGenerator end.*/

    /*Trigger start.*/
    $m("Trigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":2,"n":"OnTriggerEnterEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnTriggerEnterEvent"},{"a":2,"n":"OnTriggerExitEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnTriggerExitEvent"},{"a":2,"n":"OnTriggerStayEvent","t":4,"rt":$n[8].UnityEvent,"sn":"OnTriggerStayEvent"}]}; }, $n);
    /*Trigger end.*/

    /*ButtonInput start.*/
    $m("ButtonInput", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.RectTransform)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"IsInteractable","t":4,"rt":$n[0].Boolean,"sn":"IsInteractable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnPointerDownEvent","t":4,"rt":Function,"sn":"OnPointerDownEvent"},{"a":2,"n":"OnPointerUpEvent","t":4,"rt":Function,"sn":"OnPointerUpEvent"},{"a":1,"n":"_RectTransform","t":4,"rt":$n[2].RectTransform,"sn":"_RectTransform"}]}; }, $n);
    /*ButtonInput end.*/

    /*Countdown start.*/
    $m("Countdown", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartCountdown","t":8,"pi":[{"n":"onCountdownEnded","pt":Function,"ps":0}],"sn":"StartCountdown","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"CountdownText","t":4,"rt":$n[3].Text,"sn":"CountdownText"},{"a":2,"n":"Go_Image","t":4,"rt":$n[2].CanvasGroup,"sn":"Go_Image"},{"a":2,"n":"MainWindow","t":4,"rt":$n[2].CanvasGroup,"sn":"MainWindow"},{"a":2,"n":"Outline","t":4,"rt":$n[3].Outline,"sn":"Outline"}]}; }, $n);
    /*Countdown end.*/

    /*EndGameButton start.*/
    $m("EndGameButton", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Button)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"GameManager","t":4,"rt":GameManager,"sn":"GameManager"},{"a":1,"n":"_Button","t":4,"rt":$n[3].Button,"sn":"_Button"}]}; }, $n);
    /*EndGameButton end.*/

    /*HealthBar start.*/
    $m("HealthBar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnHealthChangedHandler","t":8,"sn":"OnHealthChangedHandler","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BarIconImage","t":4,"rt":$n[3].Image,"sn":"BarIconImage"},{"a":2,"n":"HealthProvider","t":4,"rt":HealthController,"sn":"HealthProvider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"progressImage","t":4,"rt":$n[3].Image,"sn":"progressImage"}]}; }, $n);
    /*HealthBar end.*/

    /*LunaUIFields start.*/
    $m("LunaUIFields", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Level complete text", 4, "UI", false)],"a":2,"n":"LevelCompleteButtonString","t":4,"rt":$n[0].String,"sn":"LevelCompleteButtonString"},{"at":[new UnityEngine.HeaderAttribute("End Card")],"a":2,"n":"LevelCompleteButtonText","t":4,"rt":$n[3].Text,"sn":"LevelCompleteButtonText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Level failed button text", 3, "UI", false)],"a":2,"n":"LevelFailedButtonString","t":4,"rt":$n[0].String,"sn":"LevelFailedButtonString"},{"at":[new UnityEngine.HeaderAttribute("End Card")],"a":2,"n":"LevelFailedButtonText","t":4,"rt":$n[3].Text,"sn":"LevelFailedButtonText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Objective text", 2, "UI", false)],"a":2,"n":"ObjectiveHintString","t":4,"rt":$n[0].String,"sn":"ObjectiveHintString"},{"a":2,"n":"ObjectiveHintText","t":4,"rt":$n[3].Text,"sn":"ObjectiveHintText"}]}; }, $n);
    /*LunaUIFields end.*/

    /*PositionWidget start.*/
    $m("PositionWidget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateImage","t":8,"sn":"UpdateImage","rt":$n[0].Void},{"a":2,"n":"GameManager","t":4,"rt":GameManager,"sn":"GameManager"},{"a":2,"n":"Image","t":4,"rt":$n[3].Image,"sn":"Image"},{"a":2,"n":"Numbers","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"Numbers"},{"a":1,"n":"_LastPosition","t":4,"rt":$n[0].Int32,"sn":"_LastPosition","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PositionWidget end.*/

    /*TimeSinceStartup start.*/
    $m("TimeSinceStartup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Text","t":4,"rt":$n[3].Text,"sn":"Text"}]}; }, $n);
    /*TimeSinceStartup end.*/

    /*WheatSliderWidget start.*/
    $m("WheatSliderWidget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnWheatCollectedHandler","t":8,"pi":[{"n":"number","pt":$n[0].Int32,"ps":0}],"sn":"OnWheatCollectedHandler","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BarIconImage","t":4,"rt":$n[3].Image,"sn":"BarIconImage"},{"a":1,"n":"RaceCar","t":4,"rt":RaceCar,"sn":"RaceCar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"WheatImage","t":4,"rt":$n[3].Image,"sn":"WheatImage"},{"a":1,"n":"_ImageSourcePosition","t":4,"rt":$n[2].Vector3,"sn":"_ImageSourcePosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"amountText","t":4,"rt":$n[3].Text,"sn":"amountText"},{"a":1,"n":"cooldown","t":4,"rt":$n[0].Single,"sn":"cooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"gameManager","t":4,"rt":GameManager,"sn":"gameManager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"products","t":4,"rt":Products,"sn":"products"}]}; }, $n);
    /*WheatSliderWidget end.*/

    /*WinScreenWidget start.*/
    $m("WinScreenWidget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"OnGameContinue","t":8,"sn":"OnGameContinue","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"GameManager","t":4,"rt":GameManager,"sn":"GameManager"},{"a":2,"n":"GemText","t":4,"rt":$n[3].Text,"sn":"GemText"},{"a":2,"n":"RaceCar","t":4,"rt":RaceCar,"sn":"RaceCar"},{"a":2,"n":"WheatText","t":4,"rt":$n[3].Text,"sn":"WheatText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"products","t":4,"rt":Products,"sn":"products"}]}; }, $n);
    /*WinScreenWidget end.*/

    /*CarDriveType start.*/
    $m("CarDriveType", function () { return {"att":256,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FourWheelDrive","is":true,"t":4,"rt":CarDriveType,"sn":"FourWheelDrive","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}},{"a":2,"n":"FrontWheelDrive","is":true,"t":4,"rt":CarDriveType,"sn":"FrontWheelDrive","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}},{"a":2,"n":"RearWheelDrive","is":true,"t":4,"rt":CarDriveType,"sn":"RearWheelDrive","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}}]}; }, $n);
    /*CarDriveType end.*/

    /*SpeedType start.*/
    $m("SpeedType", function () { return {"att":256,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"KPH","is":true,"t":4,"rt":SpeedType,"sn":"KPH","box":function ($v) { return Bridge.box($v, SpeedType, System.Enum.toStringFn(SpeedType));}},{"a":2,"n":"MPH","is":true,"t":4,"rt":SpeedType,"sn":"MPH","box":function ($v) { return Bridge.box($v, SpeedType, System.Enum.toStringFn(SpeedType));}}]}; }, $n);
    /*SpeedType end.*/

    /*CarController start.*/
    $m("CarController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddDownForce","t":8,"sn":"AddDownForce","rt":$n[0].Void},{"a":1,"n":"AdjustTorque","t":8,"pi":[{"n":"forwardSlip","pt":$n[0].Single,"ps":0}],"sn":"AdjustTorque","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"AnySkidSoundPlaying","t":8,"sn":"AnySkidSoundPlaying","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ApplyDrive","t":8,"pi":[{"n":"accel","pt":$n[0].Single,"ps":0},{"n":"footbrake","pt":$n[0].Single,"ps":1}],"sn":"ApplyDrive","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"CalculateGearFactor","t":8,"sn":"CalculateGearFactor","rt":$n[0].Void},{"a":1,"n":"CalculateRevs","t":8,"sn":"CalculateRevs","rt":$n[0].Void},{"a":1,"n":"CapSpeed","t":8,"sn":"CapSpeed","rt":$n[0].Void},{"a":1,"n":"CheckForWheelSpin","t":8,"sn":"CheckForWheelSpin","rt":$n[0].Void},{"a":1,"n":"CurveFactor","is":true,"t":8,"pi":[{"n":"factor","pt":$n[0].Single,"ps":0}],"sn":"CurveFactor","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GearChanging","t":8,"sn":"GearChanging","rt":$n[0].Void},{"a":2,"n":"Move","t":8,"pi":[{"n":"steering","pt":$n[0].Single,"ps":0},{"n":"accel","pt":$n[0].Single,"ps":1},{"n":"footbrake","pt":$n[0].Single,"ps":2},{"n":"handbrake","pt":$n[0].Single,"ps":3}],"sn":"Move","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"RemoveBrakeTorque","t":8,"sn":"RemoveBrakeTorque","rt":$n[0].Void},{"a":2,"n":"RemoveTorque","t":8,"sn":"RemoveTorque","rt":$n[0].Void},{"a":2,"n":"RotateWheels","t":8,"pi":[{"n":"distance","pt":$n[0].Single,"ps":0},{"n":"isTurningLeft","pt":$n[0].Boolean,"ps":1},{"n":"isTurningRight","pt":$n[0].Boolean,"ps":2}],"sn":"RotateWheels","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SteerHelper","t":8,"sn":"SteerHelper","rt":$n[0].Void},{"a":1,"n":"TractionControl","t":8,"sn":"TractionControl","rt":$n[0].Void},{"a":1,"n":"ULerp","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"value","pt":$n[0].Single,"ps":2}],"sn":"ULerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"AccelInput","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_AccelInput","t":8,"rt":$n[0].Single,"fg":"AccelInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_AccelInput","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"AccelInput"},"fn":"AccelInput"},{"a":2,"n":"BrakeInput","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_BrakeInput","t":8,"rt":$n[0].Single,"fg":"BrakeInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_BrakeInput","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"BrakeInput"},"fn":"BrakeInput"},{"a":2,"n":"CurrentSpeed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_CurrentSpeed","t":8,"rt":$n[0].Single,"fg":"CurrentSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"CurrentSpeed"},{"a":2,"n":"CurrentSteerAngle","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_CurrentSteerAngle","t":8,"rt":$n[0].Single,"fg":"CurrentSteerAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"CurrentSteerAngle"},{"a":2,"n":"GearNum","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_GearNum","t":8,"rt":$n[0].Int32,"fg":"GearNum","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_GearNum","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"GearNum"},"fn":"GearNum"},{"a":2,"n":"MaxSpeed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MaxSpeed","t":8,"rt":$n[0].Single,"fg":"MaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"MaxSpeed"},{"a":2,"n":"Revs","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Revs","t":8,"rt":$n[0].Single,"fg":"Revs","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Revs","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"Revs"},"fn":"Revs"},{"a":2,"n":"Skidding","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Skidding","t":8,"rt":$n[0].Boolean,"fg":"Skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Skidding","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Skidding"},"fn":"Skidding"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"NoOfGears","is":true,"t":4,"rt":$n[0].Int32,"sn":"NoOfGears","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Torque multiplier", 2, "Controls", false)],"a":2,"n":"TorqueMultiplier","t":4,"rt":$n[0].Single,"sn":"TorqueMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"k_ReversingThreshold","is":true,"t":4,"rt":$n[0].Single,"sn":"k_ReversingThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_BrakeTorque","t":4,"rt":$n[0].Single,"sn":"m_BrakeTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_CarDriveType","t":4,"rt":CarDriveType,"sn":"m_CarDriveType","box":function ($v) { return Bridge.box($v, CarDriveType, System.Enum.toStringFn(CarDriveType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_CentreOfMassOffset","t":4,"rt":$n[2].Vector3,"sn":"m_CentreOfMassOffset"},{"a":1,"n":"m_CurrentTorque","t":4,"rt":$n[0].Single,"sn":"m_CurrentTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_Downforce","t":4,"rt":$n[0].Single,"sn":"m_Downforce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Full torque over all wheels", 1, "Controls", false),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FullTorqueOverAllWheels","t":4,"rt":$n[0].Single,"sn":"m_FullTorqueOverAllWheels","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_GearFactor","t":4,"rt":$n[0].Single,"sn":"m_GearFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_GearNum","t":4,"rt":$n[0].Int32,"sn":"m_GearNum","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MaxHandbrakeTorque","t":4,"rt":$n[0].Single,"sn":"m_MaxHandbrakeTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Max steer angle", 0, "Controls", false),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MaximumSteerAngle","t":4,"rt":$n[0].Single,"sn":"m_MaximumSteerAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_OldRotation","t":4,"rt":$n[0].Single,"sn":"m_OldRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_Pos","t":4,"rt":$n[2].Vector3,"sn":"m_Pos"},{"a":1,"n":"m_Prevpos","t":4,"rt":$n[2].Vector3,"sn":"m_Prevpos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_RevRangeBoundary","t":4,"rt":$n[0].Single,"sn":"m_RevRangeBoundary","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_ReverseTorque","t":4,"rt":$n[0].Single,"sn":"m_ReverseTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_Rigidbody","t":4,"rt":$n[2].Rigidbody,"sn":"m_Rigidbody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SlipLimit","t":4,"rt":$n[0].Single,"sn":"m_SlipLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SpeedType","t":4,"rt":SpeedType,"sn":"m_SpeedType","box":function ($v) { return Bridge.box($v, SpeedType, System.Enum.toStringFn(SpeedType));}},{"a":1,"n":"m_SteerAngle","t":4,"rt":$n[0].Single,"sn":"m_SteerAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SteerHelper","t":4,"rt":$n[0].Single,"sn":"m_SteerHelper","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Top speed", 3, "Controls", false),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_Topspeed","t":4,"rt":$n[0].Single,"sn":"m_Topspeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TractionControl","t":4,"rt":$n[0].Single,"sn":"m_TractionControl","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"m_WheelColliders","t":4,"rt":System.Array.type(UnityEngine.WheelCollider),"sn":"m_WheelColliders"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_WheelEffects","t":4,"rt":System.Array.type(WheelEffects),"sn":"m_WheelEffects"},{"a":1,"n":"m_WheelMeshLocalRotations","t":4,"rt":System.Array.type(UnityEngine.Quaternion),"sn":"m_WheelMeshLocalRotations"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_WheelMeshes","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"m_WheelMeshes"},{"a":1,"backing":true,"n":"<AccelInput>k__BackingField","t":4,"rt":$n[0].Single,"sn":"AccelInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<BrakeInput>k__BackingField","t":4,"rt":$n[0].Single,"sn":"BrakeInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Revs>k__BackingField","t":4,"rt":$n[0].Single,"sn":"Revs","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Skidding>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CarController end.*/

    /*CarUserControl start.*/
    $m("CarUserControl", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(CarController)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateHandbrake","t":8,"sn":"ActivateHandbrake","rt":$n[0].Void},{"a":2,"n":"CancelTurnLeft","t":8,"sn":"CancelTurnLeft","rt":$n[0].Void},{"a":2,"n":"CancelTurnRight","t":8,"sn":"CancelTurnRight","rt":$n[0].Void},{"a":2,"n":"CheatGoToFinish","t":8,"sn":"CheatGoToFinish","rt":$n[0].Void},{"a":2,"n":"CheatSetMaxSpeed","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"CheatSetMaxSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"DeactivateHandbrake","t":8,"sn":"DeactivateHandbrake","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"IsRubbingFence","t":8,"sn":"IsRubbingFence","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDamaged","t":8,"sn":"OnDamaged","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TurnLeft","t":8,"sn":"TurnLeft","rt":$n[0].Void},{"a":2,"n":"TurnRight","t":8,"sn":"TurnRight","rt":$n[0].Void},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"LabRightOffset","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_LabRightOffset","t":8,"rt":$n[0].Single,"fg":"LabRightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"LabRightOffset"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"MaxSpeed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MaxSpeed","t":8,"rt":$n[0].Single,"fg":"MaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"MaxSpeed"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"Speed","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Speed","t":8,"rt":$n[0].Single,"fg":"Speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Speed"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"TrackX","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_TrackX","t":8,"rt":$n[0].Single,"fg":"TrackX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"TrackX"},{"a":2,"n":"CanMove","t":4,"rt":$n[0].Boolean,"sn":"CanMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_Handbrake","t":4,"rt":$n[0].Boolean,"sn":"_Handbrake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"carBody","t":4,"rt":$n[2].Transform,"sn":"carBody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collisionParticlesLeft","t":4,"rt":$n[2].ParticleSystem,"sn":"collisionParticlesLeft"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collisionParticlesRight","t":4,"rt":$n[2].ParticleSystem,"sn":"collisionParticlesRight"},{"a":2,"n":"farPointInDirectionOfView","t":4,"rt":$n[2].Transform,"sn":"farPointInDirectionOfView"},{"a":2,"n":"ghostWriter","t":4,"rt":GhostWriter,"sn":"ghostWriter"},{"a":1,"n":"isBtnLeftPressed","t":4,"rt":$n[0].Boolean,"sn":"isBtnLeftPressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isBtnRightPressed","t":4,"rt":$n[0].Boolean,"sn":"isBtnRightPressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTurningLeft","t":4,"rt":$n[0].Boolean,"sn":"isTurningLeft","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTurningRight","t":4,"rt":$n[0].Boolean,"sn":"isTurningRight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"labMaxSpeed","t":4,"rt":$n[0].Single,"sn":"labMaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"labPathLength","t":4,"rt":$n[0].Single,"sn":"labPathLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"labRightOffset","t":4,"rt":$n[0].Single,"sn":"labRightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"labRightOffsetSpeed","t":4,"rt":$n[0].Single,"sn":"labRightOffsetSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"labSpeed","t":4,"rt":$n[0].Single,"sn":"labSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"labTrackProgress","t":4,"rt":$n[0].Single,"sn":"labTrackProgress","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"mCar","t":4,"rt":CarController,"sn":"mCar"},{"a":1,"n":"maxOffsetFromCenter","t":4,"rt":$n[0].Single,"sn":"maxOffsetFromCenter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"maxTurningValue","t":4,"rt":$n[0].Single,"sn":"maxTurningValue","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pathCreator","t":4,"rt":$n[7].PathCreator,"sn":"pathCreator"},{"a":2,"n":"playerCarrot","t":4,"rt":$n[2].Transform,"sn":"playerCarrot"},{"a":1,"n":"turningAngle","t":4,"rt":$n[0].Single,"sn":"turningAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"turningSpeed","t":4,"rt":$n[0].Single,"sn":"turningSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"wasStartRecorded","t":4,"rt":$n[0].Boolean,"sn":"wasStartRecorded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CarUserControl end.*/

    /*WheelEffects start.*/
    $m("WheelEffects", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.AudioSource)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EmitTyreSmoke","t":8,"sn":"EmitTyreSmoke","rt":$n[0].Void},{"a":2,"n":"EndSkidTrail","t":8,"sn":"EndSkidTrail","rt":$n[0].Void},{"a":2,"n":"PlayAudio","t":8,"sn":"PlayAudio","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartSkidTrail","t":8,"sn":"StartSkidTrail","rt":$n[6].IEnumerator},{"a":2,"n":"StopAudio","t":8,"sn":"StopAudio","rt":$n[0].Void},{"a":2,"n":"PlayingAudio","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_PlayingAudio","t":8,"rt":$n[0].Boolean,"fg":"PlayingAudio","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_PlayingAudio","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"PlayingAudio"},"fn":"PlayingAudio"},{"a":2,"n":"skidding","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_skidding","t":8,"rt":$n[0].Boolean,"fg":"skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_skidding","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"skidding"},"fn":"skidding"},{"a":2,"n":"SkidTrailPrefab","t":4,"rt":$n[2].Transform,"sn":"SkidTrailPrefab"},{"a":1,"n":"m_AudioSource","t":4,"rt":$n[2].AudioSource,"sn":"m_AudioSource"},{"a":1,"n":"m_SkidTrail","t":4,"rt":$n[2].Transform,"sn":"m_SkidTrail"},{"a":1,"n":"m_WheelCollider","t":4,"rt":$n[2].WheelCollider,"sn":"m_WheelCollider"},{"a":2,"n":"skidParticles","t":4,"rt":$n[2].ParticleSystem,"sn":"skidParticles"},{"a":2,"n":"skidTrailsDetachedParent","is":true,"t":4,"rt":$n[2].Transform,"sn":"skidTrailsDetachedParent"},{"a":1,"backing":true,"n":"<PlayingAudio>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"PlayingAudio","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<skidding>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"skidding","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*WheelEffects end.*/

    /*WebContentProxy start.*/
    $m("WebContentProxy", function () { return {"nested":[WebContentProxy.InputProperties,WebContentProxy.OutputProperties],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CallFinishWebContentFunction","t":8,"sn":"CallFinishWebContentFunction","rt":$n[0].Void},{"a":2,"n":"DecodeInputPayload","t":8,"sn":"DecodeInputPayload","rt":$n[0].Void},{"a":1,"n":"EncodeOutputPayload","t":8,"sn":"EncodeOutputPayload","rt":$n[0].Void},{"a":2,"n":"inputPayload","t":4,"rt":$n[0].String,"sn":"inputPayload"},{"a":2,"n":"inputProperties","t":4,"rt":WebContentProxy.InputProperties,"sn":"inputProperties"},{"a":1,"n":"jsDelegate","t":4,"rt":webContentProxyObject,"sn":"jsDelegate"},{"a":2,"n":"outputPayload","t":4,"rt":$n[0].String,"sn":"outputPayload"},{"a":2,"n":"outputProperties","t":4,"rt":WebContentProxy.OutputProperties,"sn":"outputProperties"}]}; }, $n);
    /*WebContentProxy end.*/

    /*WebContentProxy+InputProperties start.*/
    $m("WebContentProxy.InputProperties", function () { return {"td":WebContentProxy,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"driverIndex","t":4,"rt":$n[0].Int32,"sn":"driverIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"gemCount","t":4,"rt":$n[0].Int32,"sn":"gemCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"trackIndex","t":4,"rt":$n[0].Int32,"sn":"trackIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"vehicleIndex","t":4,"rt":$n[0].Int32,"sn":"vehicleIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*WebContentProxy+InputProperties end.*/

    /*WebContentProxy+OutputProperties start.*/
    $m("WebContentProxy.OutputProperties", function () { return {"td":WebContentProxy,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"fuelCount","t":4,"rt":$n[0].Int32,"sn":"fuelCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"gemCount","t":4,"rt":$n[0].Int32,"sn":"gemCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ryeCount","t":4,"rt":$n[0].Int32,"sn":"ryeCount","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*WebContentProxy+OutputProperties end.*/

    /*ShieldBar start.*/
    $m("ShieldBar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnShieldChangedHandler","t":8,"sn":"OnShieldChangedHandler","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barIconImage","t":4,"rt":$n[3].Image,"sn":"barIconImage"},{"a":1,"n":"healthController","t":4,"rt":HealthController,"sn":"healthController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"progressImage","t":4,"rt":$n[3].Image,"sn":"progressImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"root","t":4,"rt":$n[2].GameObject,"sn":"root"}]}; }, $n);
    /*ShieldBar end.*/

    /*ShootButtonCtrl start.*/
    $m("ShootButtonCtrl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"gun","t":4,"rt":Gun,"sn":"gun"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"products","t":4,"rt":Products,"sn":"products"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timerImg","t":4,"rt":$n[3].Image,"sn":"timerImg"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"txtAmount","t":4,"rt":$n[3].Text,"sn":"txtAmount"}]}; }, $n);
    /*ShootButtonCtrl end.*/

    /*TrackHandles start.*/
    $m("TrackHandles", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"MainPath","t":4,"rt":$n[7].PathCreator,"sn":"MainPath"},{"a":2,"n":"OnFinishReached","t":4,"rt":$n[8].UnityEvent,"sn":"OnFinishReached"},{"a":2,"n":"Root","t":4,"rt":$n[2].Transform,"sn":"Root"}]}; }, $n);
    /*TrackHandles end.*/

    /*UIActiveBoost start.*/
    $m("UIActiveBoost", function () { return {"nested":[UIActiveBoost.SpriteByKind],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":2,"n":"SetKind","t":8,"pi":[{"n":"value","pt":Products.Kind,"ps":0}],"sn":"SetKind","rt":$n[0].Void,"p":[Products.Kind]},{"a":2,"n":"SetTimeLeft","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"SetTimeLeft","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"Kind","t":4,"rt":Products.Kind,"sn":"Kind","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":1,"n":"TimeLeft","t":4,"rt":$n[0].Single,"sn":"TimeLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"imgIcon","t":4,"rt":$n[3].Image,"sn":"imgIcon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sprites","t":4,"rt":System.Array.type(UIActiveBoost.SpriteByKind),"sn":"sprites"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timerImg","t":4,"rt":$n[3].Image,"sn":"timerImg"},{"a":1,"n":"timerValue","t":4,"rt":$n[0].Single,"sn":"timerValue","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UIActiveBoost end.*/

    /*UIActiveBoost+SpriteByKind start.*/
    $m("UIActiveBoost.SpriteByKind", function () { return {"td":UIActiveBoost,"att":1056771,"a":1,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Kind","t":4,"rt":Products.Kind,"sn":"Kind","box":function ($v) { return Bridge.box($v, Products.Kind, System.Enum.toStringFn(Products.Kind));}},{"a":2,"n":"Sprite","t":4,"rt":$n[2].Sprite,"sn":"Sprite"}]}; }, $n);
    /*UIActiveBoost+SpriteByKind end.*/

    /*UnselectedColliderDrawer start.*/
    $m("UnselectedColliderDrawer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*UnselectedColliderDrawer end.*/

    /*WheatGenerator start.*/
    $m("WheatGenerator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Generate","t":8,"pi":[{"n":"pathCreator","pt":$n[7].PathCreator,"ps":0},{"n":"parent","pt":$n[2].Transform,"ps":1}],"sn":"Generate","rt":$n[0].Void,"p":[$n[7].PathCreator,$n[2].Transform]},{"a":1,"n":"TryToInstantiatePiece","t":8,"pi":[{"n":"pos","pt":$n[2].Vector3,"ps":0},{"n":"rotation","pt":$n[2].Quaternion,"ps":1},{"n":"distance","pt":$n[0].Single,"ps":2},{"n":"parent","pt":$n[2].Transform,"ps":3}],"sn":"TryToInstantiatePiece","rt":$n[0].Void,"p":[$n[2].Vector3,$n[2].Quaternion,$n[0].Single,$n[2].Transform]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"carUserControl","t":4,"rt":CarUserControl,"sn":"carUserControl"},{"a":1,"n":"kDistanceBehindForHiding","t":4,"rt":$n[0].Single,"sn":"kDistanceBehindForHiding","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"kDistanceInFrontForHiding","t":4,"rt":$n[0].Single,"sn":"kDistanceInFrontForHiding","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"kDistanceInFrontForNonDetailing","t":4,"rt":$n[0].Single,"sn":"kDistanceInFrontForNonDetailing","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pieceSize","t":4,"rt":$n[0].Single,"sn":"pieceSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rowWidth","t":4,"rt":$n[0].Single,"sn":"rowWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"trackContentGenerator","t":4,"rt":TrackContentGenerator,"sn":"trackContentGenerator"},{"a":2,"n":"wheatPiece","t":4,"rt":$n[2].GameObject,"sn":"wheatPiece"}]}; }, $n);
    /*WheatGenerator end.*/

    /*WheatPieceDestroyer start.*/
    $m("WheatPieceDestroyer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"PlayFXThenDestroy","t":8,"sn":"PlayFXThenDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"explosionParticleSystem","t":4,"rt":$n[2].ParticleSystem,"sn":"explosionParticleSystem"},{"a":1,"n":"wasPlayFXThenDestroyCalled","t":4,"rt":$n[0].Boolean,"sn":"wasPlayFXThenDestroyCalled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*WheatPieceDestroyer end.*/

    /*WheatPieceRandomizer start.*/
    $m("WheatPieceRandomizer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"partsParent","t":4,"rt":$n[2].Transform,"sn":"partsParent"}]}; }, $n);
    /*WheatPieceRandomizer end.*/

    /*WheatPosInRowRandomizer start.*/
    $m("WheatPosInRowRandomizer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SlightlyRandomizePositions","t":8,"sn":"SlightlyRandomizePositions","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"wheats","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"wheats"}]}; }, $n);
    /*WheatPosInRowRandomizer end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Assets.Scripts.TrackContentGenerationParams start.*/
    $m("Assets.Scripts.TrackContentGenerationParams", function () { return {"nested":[$n[9].TrackContentGenerationParams.ItemType,$n[9].TrackContentGenerationParams.Params,$n[9].TrackContentGenerationParams.GeneratedRow],"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ChooseNextPatternName","t":8,"pi":[{"n":"names","pt":$n[1].List$1(System.String),"ps":0},{"n":"chosingPattern","pt":$n[9].TrackContentGenerationParams.Params.Pattern,"ps":1},{"n":"defaultValue","pt":$n[0].Int32,"ps":2}],"sn":"ChooseNextPatternName","rt":$n[0].String,"p":[$n[1].List$1(System.String),$n[9].TrackContentGenerationParams.Params.Pattern,$n[0].Int32]},{"a":2,"n":"CompileGenerationData","t":8,"pi":[{"n":"distance","pt":$n[0].Single,"ps":0},{"n":"rowLength","pt":$n[0].Single,"ps":1},{"n":"itemSize","pt":$n[0].Single,"ps":2}],"sn":"CompileGenerationData","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"CompilePattern","t":8,"pi":[{"n":"pattern","pt":$n[9].TrackContentGenerationParams.Params.Pattern,"ps":0},{"n":"rowLenght","pt":$n[0].Single,"ps":1},{"n":"itemSize","pt":$n[0].Single,"ps":2}],"sn":"CompilePattern","rt":$n[1].List$1(Assets.Scripts.TrackContentGenerationParams.GeneratedRow),"p":[$n[9].TrackContentGenerationParams.Params.Pattern,$n[0].Single,$n[0].Single]},{"a":1,"n":"GetPatternByName","t":8,"pi":[{"n":"patternName","pt":$n[0].String,"ps":0}],"sn":"GetPatternByName","rt":$n[9].TrackContentGenerationParams.Params.Pattern,"p":[$n[0].String]},{"a":2,"n":"ReadGenerationParams","t":8,"pi":[{"n":"configFile","pt":$n[2].TextAsset,"ps":0}],"sn":"ReadGenerationParams","rt":$n[0].Void,"p":[$n[2].TextAsset]},{"a":2,"n":"compiledData","t":4,"rt":$n[1].List$1(Assets.Scripts.TrackContentGenerationParams.GeneratedRow),"sn":"compiledData"},{"a":1,"n":"generationParams","t":4,"rt":$n[9].TrackContentGenerationParams.Params,"sn":"generationParams"}]}; }, $n);
    /*Assets.Scripts.TrackContentGenerationParams end.*/

    /*Assets.Scripts.TrackContentGenerationParams+ItemType start.*/
    $m("Assets.Scripts.TrackContentGenerationParams.ItemType", function () { return {"td":$n[9].TrackContentGenerationParams,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BONUS","is":true,"t":4,"rt":$n[9].TrackContentGenerationParams.ItemType,"sn":"BONUS","box":function ($v) { return Bridge.box($v, Assets.Scripts.TrackContentGenerationParams.ItemType, System.Enum.toStringFn(Assets.Scripts.TrackContentGenerationParams.ItemType));}},{"a":2,"n":"HARD_OBSTACLE","is":true,"t":4,"rt":$n[9].TrackContentGenerationParams.ItemType,"sn":"HARD_OBSTACLE","box":function ($v) { return Bridge.box($v, Assets.Scripts.TrackContentGenerationParams.ItemType, System.Enum.toStringFn(Assets.Scripts.TrackContentGenerationParams.ItemType));}},{"a":2,"n":"OBSTACLE","is":true,"t":4,"rt":$n[9].TrackContentGenerationParams.ItemType,"sn":"OBSTACLE","box":function ($v) { return Bridge.box($v, Assets.Scripts.TrackContentGenerationParams.ItemType, System.Enum.toStringFn(Assets.Scripts.TrackContentGenerationParams.ItemType));}}]}; }, $n);
    /*Assets.Scripts.TrackContentGenerationParams+ItemType end.*/

    /*Assets.Scripts.TrackContentGenerationParams+Params start.*/
    $m("Assets.Scripts.TrackContentGenerationParams.Params", function () { return {"td":$n[9].TrackContentGenerationParams,"nested":[$n[9].TrackContentGenerationParams.Params.Pattern],"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"defaultWeight","t":4,"rt":$n[0].Int32,"sn":"defaultWeight","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"patterns","t":4,"rt":System.Array.type(Assets.Scripts.TrackContentGenerationParams.Params.Pattern),"sn":"patterns"}]}; }, $n);
    /*Assets.Scripts.TrackContentGenerationParams+Params end.*/

    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern start.*/
    $m("Assets.Scripts.TrackContentGenerationParams.Params.Pattern", function () { return {"td":$n[9].TrackContentGenerationParams.Params,"nested":[$n[9].TrackContentGenerationParams.Params.Pattern.DescendantWeight],"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"descendantWeights","t":4,"rt":System.Array.type(Assets.Scripts.TrackContentGenerationParams.Params.Pattern.DescendantWeight),"sn":"descendantWeights"},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name"},{"a":2,"n":"randomization","t":4,"rt":$n[0].Int32,"sn":"randomization","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"repeat","t":4,"rt":$n[0].String,"sn":"repeat"},{"a":2,"n":"rowOffset","t":4,"rt":$n[0].Single,"sn":"rowOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rows","t":4,"rt":$n[0].Array.type(System.String),"sn":"rows"}]}; }, $n);
    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern end.*/

    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern+DescendantWeight start.*/
    $m("Assets.Scripts.TrackContentGenerationParams.Params.Pattern.DescendantWeight", function () { return {"td":$n[9].TrackContentGenerationParams.Params.Pattern,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"pattern","t":4,"rt":$n[0].String,"sn":"pattern"},{"a":2,"n":"weight","t":4,"rt":$n[0].Int32,"sn":"weight","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Assets.Scripts.TrackContentGenerationParams+Params+Pattern+DescendantWeight end.*/

    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow start.*/
    $m("Assets.Scripts.TrackContentGenerationParams.GeneratedRow", function () { return {"td":$n[9].TrackContentGenerationParams,"nested":[$n[9].TrackContentGenerationParams.GeneratedRow.GeneratedItem],"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"items","t":4,"rt":$n[1].List$1(Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem),"sn":"items"},{"a":2,"n":"offset","t":4,"rt":$n[0].Single,"sn":"offset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow end.*/

    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow+GeneratedItem start.*/
    $m("Assets.Scripts.TrackContentGenerationParams.GeneratedRow.GeneratedItem", function () { return {"td":$n[9].TrackContentGenerationParams.GeneratedRow,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"type","t":4,"rt":$n[9].TrackContentGenerationParams.ItemType,"sn":"type","box":function ($v) { return Bridge.box($v, Assets.Scripts.TrackContentGenerationParams.ItemType, System.Enum.toStringFn(Assets.Scripts.TrackContentGenerationParams.ItemType));}}]}; }, $n);
    /*Assets.Scripts.TrackContentGenerationParams+GeneratedRow+GeneratedItem end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio start.*/
    $m("UnityStandardAssets.Vehicles.Car.CarAudio", function () { return {"nested":[$n[10].CarAudio.EngineAudioOptions],"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(CarController)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SetUpEngineAudioSource","t":8,"pi":[{"n":"clip","pt":$n[2].AudioClip,"ps":0}],"sn":"SetUpEngineAudioSource","rt":$n[2].AudioSource,"p":[$n[2].AudioClip]},{"a":1,"n":"StartSound","t":8,"sn":"StartSound","rt":$n[0].Void},{"a":1,"n":"StopSound","t":8,"sn":"StopSound","rt":$n[0].Void},{"a":1,"n":"ULerp","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"value","pt":$n[0].Single,"ps":2}],"sn":"ULerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"dopplerLevel","t":4,"rt":$n[0].Single,"sn":"dopplerLevel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"engineSoundStyle","t":4,"rt":$n[10].CarAudio.EngineAudioOptions,"sn":"engineSoundStyle","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions, System.Enum.toStringFn(UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions));}},{"a":2,"n":"highAccelClip","t":4,"rt":$n[2].AudioClip,"sn":"highAccelClip"},{"a":2,"n":"highDecelClip","t":4,"rt":$n[2].AudioClip,"sn":"highDecelClip"},{"a":2,"n":"highPitchMultiplier","t":4,"rt":$n[0].Single,"sn":"highPitchMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"lowAccelClip","t":4,"rt":$n[2].AudioClip,"sn":"lowAccelClip"},{"a":2,"n":"lowDecelClip","t":4,"rt":$n[2].AudioClip,"sn":"lowDecelClip"},{"a":2,"n":"lowPitchMax","t":4,"rt":$n[0].Single,"sn":"lowPitchMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"lowPitchMin","t":4,"rt":$n[0].Single,"sn":"lowPitchMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_CarController","t":4,"rt":CarController,"sn":"m_CarController"},{"a":1,"n":"m_HighAccel","t":4,"rt":$n[2].AudioSource,"sn":"m_HighAccel"},{"a":1,"n":"m_HighDecel","t":4,"rt":$n[2].AudioSource,"sn":"m_HighDecel"},{"a":1,"n":"m_LowAccel","t":4,"rt":$n[2].AudioSource,"sn":"m_LowAccel"},{"a":1,"n":"m_LowDecel","t":4,"rt":$n[2].AudioSource,"sn":"m_LowDecel"},{"a":1,"n":"m_StartedSound","t":4,"rt":$n[0].Boolean,"sn":"m_StartedSound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"maxRolloffDistance","t":4,"rt":$n[0].Single,"sn":"maxRolloffDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pitchMultiplier","t":4,"rt":$n[0].Single,"sn":"pitchMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.CarAudio end.*/

    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions start.*/
    $m("UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions", function () { return {"td":$n[10].CarAudio,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FourChannel","is":true,"t":4,"rt":$n[10].CarAudio.EngineAudioOptions,"sn":"FourChannel","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions, System.Enum.toStringFn(UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions));}},{"a":2,"n":"Simple","is":true,"t":4,"rt":$n[10].CarAudio.EngineAudioOptions,"sn":"Simple","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions, System.Enum.toStringFn(UnityStandardAssets.Vehicles.Car.CarAudio.EngineAudioOptions));}}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.CarAudio+EngineAudioOptions end.*/

    /*UnityStandardAssets.Vehicles.Car.SkidTrail start.*/
    $m("UnityStandardAssets.Vehicles.Car.SkidTrail", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[6].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_PersistTime","t":4,"rt":$n[0].Single,"sn":"m_PersistTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.SkidTrail end.*/

    /*UnityStandardAssets.Vehicles.Car.Suspension start.*/
    $m("UnityStandardAssets.Vehicles.Car.Suspension", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"m_Origin","t":4,"rt":$n[2].Vector3,"sn":"m_Origin"},{"a":1,"n":"m_TargetOriginalPosition","t":4,"rt":$n[2].Vector3,"sn":"m_TargetOriginalPosition"},{"a":2,"n":"wheel","t":4,"rt":$n[2].GameObject,"sn":"wheel"}]}; }, $n);
    /*UnityStandardAssets.Vehicles.Car.Suspension end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower start.*/
    $m("UnityStandardAssets.Cameras.AbstractTargetFollower", function () { return {"nested":[$n[11].AbstractTargetFollower.UpdateType],"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FindAndTargetPlayer","t":8,"sn":"FindAndTargetPlayer","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"ab":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"ManualUpdate","t":8,"sn":"ManualUpdate","rt":$n[0].Void},{"v":true,"a":2,"n":"SetTarget","t":8,"pi":[{"n":"newTransform","pt":$n[2].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[2].Transform]},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Target","t":16,"rt":$n[2].Transform,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].Transform,"fg":"Target"},"fn":"Target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_AutoTargetPlayer","t":4,"rt":$n[0].Boolean,"sn":"m_AutoTargetPlayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"m_Target","t":4,"rt":$n[2].Transform,"sn":"m_Target"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_UpdateType","t":4,"rt":$n[11].AbstractTargetFollower.UpdateType,"sn":"m_UpdateType","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}},{"a":3,"n":"targetRigidbody","t":4,"rt":$n[2].Rigidbody,"sn":"targetRigidbody"}]}; }, $n);
    /*UnityStandardAssets.Cameras.AbstractTargetFollower end.*/

    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType start.*/
    $m("UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType", function () { return {"td":$n[11].AbstractTargetFollower,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","is":true,"t":4,"rt":$n[11].AbstractTargetFollower.UpdateType,"sn":"FixedUpdate","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}},{"a":2,"n":"LateUpdate","is":true,"t":4,"rt":$n[11].AbstractTargetFollower.UpdateType,"sn":"LateUpdate","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}},{"a":2,"n":"ManualUpdate","is":true,"t":4,"rt":$n[11].AbstractTargetFollower.UpdateType,"sn":"ManualUpdate","box":function ($v) { return Bridge.box($v, UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType, System.Enum.toStringFn(UnityStandardAssets.Cameras.AbstractTargetFollower.UpdateType));}}]}; }, $n);
    /*UnityStandardAssets.Cameras.AbstractTargetFollower+UpdateType end.*/

    /*UnityStandardAssets.Cameras.AutoCam start.*/
    $m("UnityStandardAssets.Cameras.AutoCam", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"m_CurrentTurnAmount","t":4,"rt":$n[0].Single,"sn":"m_CurrentTurnAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FollowTilt","t":4,"rt":$n[0].Boolean,"sn":"m_FollowTilt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FollowVelocity","t":4,"rt":$n[0].Boolean,"sn":"m_FollowVelocity","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"m_LastFlatAngle","t":4,"rt":$n[0].Single,"sn":"m_LastFlatAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MoveSpeed","t":4,"rt":$n[0].Single,"sn":"m_MoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_RollSpeed","t":4,"rt":$n[0].Single,"sn":"m_RollSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_RollUp","t":4,"rt":$n[2].Vector3,"sn":"m_RollUp"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SmoothTurnTime","t":4,"rt":$n[0].Single,"sn":"m_SmoothTurnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SpinTurnLimit","t":4,"rt":$n[0].Single,"sn":"m_SpinTurnLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TargetVelocityLowerLimit","t":4,"rt":$n[0].Single,"sn":"m_TargetVelocityLowerLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TurnSpeed","t":4,"rt":$n[0].Single,"sn":"m_TurnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_TurnSpeedVelocityChange","t":4,"rt":$n[0].Single,"sn":"m_TurnSpeedVelocityChange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.AutoCam end.*/

    /*UnityStandardAssets.Cameras.FreeLookCam start.*/
    $m("UnityStandardAssets.Cameras.FreeLookCam", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"HandleRotationMovement","t":8,"sn":"HandleRotationMovement","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":3,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"k_LookDistance","is":true,"t":4,"rt":$n[0].Single,"sn":"k_LookDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_LockCursor","t":4,"rt":$n[0].Boolean,"sn":"m_LockCursor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"m_LookAngle","t":4,"rt":$n[0].Single,"sn":"m_LookAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_MoveSpeed","t":4,"rt":$n[0].Single,"sn":"m_MoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_PivotEulers","t":4,"rt":$n[2].Vector3,"sn":"m_PivotEulers"},{"a":1,"n":"m_PivotTargetRot","t":4,"rt":$n[2].Quaternion,"sn":"m_PivotTargetRot"},{"a":1,"n":"m_TiltAngle","t":4,"rt":$n[0].Single,"sn":"m_TiltAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TiltMax","t":4,"rt":$n[0].Single,"sn":"m_TiltMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TiltMin","t":4,"rt":$n[0].Single,"sn":"m_TiltMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_TransformTargetRot","t":4,"rt":$n[2].Quaternion,"sn":"m_TransformTargetRot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TurnSmoothing","t":4,"rt":$n[0].Single,"sn":"m_TurnSmoothing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(0.0, 10.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TurnSpeed","t":4,"rt":$n[0].Single,"sn":"m_TurnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_VerticalAutoReturn","t":4,"rt":$n[0].Boolean,"sn":"m_VerticalAutoReturn","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.FreeLookCam end.*/

    /*UnityStandardAssets.Cameras.HandHeldCam start.*/
    $m("UnityStandardAssets.Cameras.HandHeldCam", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_BaseSwayAmount","t":4,"rt":$n[0].Single,"sn":"m_BaseSwayAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_SwaySpeed","t":4,"rt":$n[0].Single,"sn":"m_SwaySpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.RangeAttribute(-1.0, 1.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TrackingBias","t":4,"rt":$n[0].Single,"sn":"m_TrackingBias","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_TrackingSwayAmount","t":4,"rt":$n[0].Single,"sn":"m_TrackingSwayAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.HandHeldCam end.*/

    /*UnityStandardAssets.Cameras.LookatTarget start.*/
    $m("UnityStandardAssets.Cameras.LookatTarget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"m_FollowAngles","t":4,"rt":$n[2].Vector3,"sn":"m_FollowAngles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FollowSpeed","t":4,"rt":$n[0].Single,"sn":"m_FollowSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":3,"n":"m_FollowVelocity","t":4,"rt":$n[2].Vector3,"sn":"m_FollowVelocity"},{"a":1,"n":"m_OriginalRotation","t":4,"rt":$n[2].Quaternion,"sn":"m_OriginalRotation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_RotationRange","t":4,"rt":$n[2].Vector2,"sn":"m_RotationRange"}]}; }, $n);
    /*UnityStandardAssets.Cameras.LookatTarget end.*/

    /*UnityStandardAssets.Cameras.PivotBasedCameraRig start.*/
    $m("UnityStandardAssets.Cameras.PivotBasedCameraRig", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"m_Cam","t":4,"rt":$n[2].Transform,"sn":"m_Cam"},{"a":3,"n":"m_LastTargetPosition","t":4,"rt":$n[2].Vector3,"sn":"m_LastTargetPosition"},{"a":3,"n":"m_Pivot","t":4,"rt":$n[2].Transform,"sn":"m_Pivot"}]}; }, $n);
    /*UnityStandardAssets.Cameras.PivotBasedCameraRig end.*/

    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip start.*/
    $m("UnityStandardAssets.Cameras.ProtectCameraFromWallClip", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*UnityStandardAssets.Cameras.ProtectCameraFromWallClip end.*/

    /*UnityStandardAssets.Cameras.TargetFieldOfView start.*/
    $m("UnityStandardAssets.Cameras.TargetFieldOfView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"FollowTarget","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"FollowTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"MaxBoundsExtent","is":true,"t":8,"pi":[{"n":"obj","pt":$n[2].Transform,"ps":0},{"n":"includeEffects","pt":$n[0].Boolean,"ps":1}],"sn":"MaxBoundsExtent","rt":$n[0].Single,"p":[$n[2].Transform,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"ov":true,"a":2,"n":"SetTarget","t":8,"pi":[{"n":"newTransform","pt":$n[2].Transform,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[2].Transform]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"m_BoundSize","t":4,"rt":$n[0].Single,"sn":"m_BoundSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_Cam","t":4,"rt":$n[2].Camera,"sn":"m_Cam"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_FovAdjustTime","t":4,"rt":$n[0].Single,"sn":"m_FovAdjustTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"m_FovAdjustVelocity","t":4,"rt":$n[0].Single,"sn":"m_FovAdjustVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_IncludeEffectsInSize","t":4,"rt":$n[0].Boolean,"sn":"m_IncludeEffectsInSize","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"m_LastTarget","t":4,"rt":$n[2].Transform,"sn":"m_LastTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"m_ZoomAmountMultiplier","t":4,"rt":$n[0].Single,"sn":"m_ZoomAmountMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UnityStandardAssets.Cameras.TargetFieldOfView end.*/

    /*PathCreation.BezierPath start.*/
    $m("PathCreation.BezierPath", function () { return {"nested":[$n[7].BezierPath.ControlMode],"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].IEnumerable$1(UnityEngine.Vector2),$n[7].PathSpace,$n[0].Boolean],"pi":[{"n":"points","pt":$n[1].IEnumerable$1(UnityEngine.Vector2),"ps":0},{"n":"space","dv":0,"o":true,"pt":$n[7].PathSpace,"ps":1},{"n":"isClosed","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[1].IEnumerable$1(UnityEngine.Vector3),$n[0].Boolean,$n[7].PathSpace],"pi":[{"n":"points","pt":$n[1].IEnumerable$1(UnityEngine.Vector3),"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"space","dv":0,"o":true,"pt":$n[7].PathSpace,"ps":2}],"sn":"$ctor3"},{"a":2,"n":".ctor","t":1,"p":[$n[1].IEnumerable$1(UnityEngine.Vector2),$n[0].Boolean,$n[7].PathSpace],"pi":[{"n":"transforms","pt":$n[1].IEnumerable$1(UnityEngine.Vector2),"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"space","dv":1,"o":true,"pt":$n[7].PathSpace,"ps":2}],"sn":"$ctor2"},{"a":2,"n":".ctor","t":1,"p":[$n[1].IEnumerable$1(UnityEngine.Transform),$n[0].Boolean,$n[7].PathSpace],"pi":[{"n":"transforms","pt":$n[1].IEnumerable$1(UnityEngine.Transform),"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"space","dv":1,"o":true,"pt":$n[7].PathSpace,"ps":2}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[2].Vector3,$n[0].Boolean,$n[7].PathSpace],"pi":[{"n":"centre","pt":$n[2].Vector3,"ps":0},{"n":"isClosed","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"space","dv":0,"o":true,"pt":$n[7].PathSpace,"ps":2}],"sn":"$ctor4"},{"a":2,"n":"AddSegmentToEnd","t":8,"pi":[{"n":"anchorPos","pt":$n[2].Vector3,"ps":0}],"sn":"AddSegmentToEnd","rt":$n[0].Void,"p":[$n[2].Vector3]},{"a":2,"n":"AddSegmentToStart","t":8,"pi":[{"n":"anchorPos","pt":$n[2].Vector3,"ps":0}],"sn":"AddSegmentToStart","rt":$n[0].Void,"p":[$n[2].Vector3]},{"a":1,"n":"AutoSetAllAffectedControlPoints","t":8,"pi":[{"n":"updatedAnchorIndex","pt":$n[0].Int32,"ps":0}],"sn":"AutoSetAllAffectedControlPoints","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"AutoSetAllControlPoints","t":8,"sn":"AutoSetAllControlPoints","rt":$n[0].Void},{"a":1,"n":"AutoSetAnchorControlPoints","t":8,"pi":[{"n":"anchorIndex","pt":$n[0].Int32,"ps":0}],"sn":"AutoSetAnchorControlPoints","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"AutoSetStartAndEndControls","t":8,"sn":"AutoSetStartAndEndControls","rt":$n[0].Void},{"a":2,"n":"CalculateBoundsWithTransform","t":8,"pi":[{"n":"transform","pt":$n[2].Transform,"ps":0}],"sn":"CalculateBoundsWithTransform","rt":$n[2].Bounds,"p":[$n[2].Transform]},{"a":2,"n":"DeleteSegment","t":8,"pi":[{"n":"anchorIndex","pt":$n[0].Int32,"ps":0}],"sn":"DeleteSegment","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"GetAnchorNormalAngle","t":8,"pi":[{"n":"anchorIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetAnchorNormalAngle","rt":$n[0].Single,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetPoint","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"GetPoint","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetPointsInSegment","t":8,"pi":[{"n":"segmentIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetPointsInSegment","rt":System.Array.type(UnityEngine.Vector3),"p":[$n[0].Int32]},{"a":1,"n":"LoopIndex","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"LoopIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"MovePoint","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0},{"n":"pointPos","pt":$n[2].Vector3,"ps":1},{"n":"suppressPathModifiedEvent","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"MovePoint","rt":$n[0].Void,"p":[$n[0].Int32,$n[2].Vector3,$n[0].Boolean]},{"a":2,"n":"NotifyPathModified","t":8,"sn":"NotifyPathModified","rt":$n[0].Void},{"a":2,"n":"ResetNormalAngles","t":8,"sn":"ResetNormalAngles","rt":$n[0].Void},{"a":2,"n":"SetAnchorNormalAngle","t":8,"pi":[{"n":"anchorIndex","pt":$n[0].Int32,"ps":0},{"n":"angle","pt":$n[0].Single,"ps":1}],"sn":"SetAnchorNormalAngle","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Single]},{"a":2,"n":"SetPoint","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0},{"n":"localPosition","pt":$n[2].Vector3,"ps":1},{"n":"suppressPathModifiedEvent","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"SetPoint","rt":$n[0].Void,"p":[$n[0].Int32,$n[2].Vector3,$n[0].Boolean]},{"a":2,"n":"SplitSegment","t":8,"pi":[{"n":"anchorPos","pt":$n[2].Vector3,"ps":0},{"n":"segmentIndex","pt":$n[0].Int32,"ps":1},{"n":"splitTime","pt":$n[0].Single,"ps":2}],"sn":"SplitSegment","rt":$n[0].Void,"p":[$n[2].Vector3,$n[0].Int32,$n[0].Single]},{"a":1,"n":"UpdateBounds","t":8,"sn":"UpdateBounds","rt":$n[0].Void},{"a":1,"n":"UpdateClosedState","t":8,"sn":"UpdateClosedState","rt":$n[0].Void},{"a":1,"n":"UpdateToNewPathSpace","t":8,"pi":[{"n":"previousSpace","pt":$n[7].PathSpace,"ps":0}],"sn":"UpdateToNewPathSpace","rt":$n[0].Void,"p":[$n[7].PathSpace]},{"a":2,"n":"AutoControlLength","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_AutoControlLength","t":8,"rt":$n[0].Single,"fg":"AutoControlLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_AutoControlLength","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"AutoControlLength"},"fn":"AutoControlLength"},{"a":2,"n":"ControlPointMode","t":16,"rt":$n[7].BezierPath.ControlMode,"g":{"a":2,"n":"get_ControlPointMode","t":8,"rt":$n[7].BezierPath.ControlMode,"fg":"ControlPointMode","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},"s":{"a":2,"n":"set_ControlPointMode","t":8,"p":[$n[7].BezierPath.ControlMode],"rt":$n[0].Void,"fs":"ControlPointMode"},"fn":"ControlPointMode"},{"a":2,"n":"FlipNormals","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_FlipNormals","t":8,"rt":$n[0].Boolean,"fg":"FlipNormals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_FlipNormals","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"FlipNormals"},"fn":"FlipNormals"},{"a":2,"n":"GlobalNormalsAngle","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_GlobalNormalsAngle","t":8,"rt":$n[0].Single,"fg":"GlobalNormalsAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_GlobalNormalsAngle","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"GlobalNormalsAngle"},"fn":"GlobalNormalsAngle"},{"a":2,"n":"IsClosed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsClosed","t":8,"rt":$n[0].Boolean,"fg":"IsClosed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsClosed","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsClosed"},"fn":"IsClosed"},{"a":2,"n":"Item","t":16,"rt":$n[2].Vector3,"p":[$n[0].Int32],"i":true,"ipi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"g":{"a":2,"n":"get_Item","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"getItem","rt":$n[2].Vector3,"p":[$n[0].Int32]}},{"a":2,"n":"NumAnchorPoints","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_NumAnchorPoints","t":8,"rt":$n[0].Int32,"fg":"NumAnchorPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumAnchorPoints"},{"a":2,"n":"NumPoints","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_NumPoints","t":8,"rt":$n[0].Int32,"fg":"NumPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumPoints"},{"a":2,"n":"NumSegments","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_NumSegments","t":8,"rt":$n[0].Int32,"fg":"NumSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumSegments"},{"a":2,"n":"PathBounds","t":16,"rt":$n[2].Bounds,"g":{"a":2,"n":"get_PathBounds","t":8,"rt":$n[2].Bounds,"fg":"PathBounds"},"fn":"PathBounds"},{"a":2,"n":"Space","t":16,"rt":$n[7].PathSpace,"g":{"a":2,"n":"get_Space","t":8,"rt":$n[7].PathSpace,"fg":"Space","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},"s":{"a":2,"n":"set_Space","t":8,"p":[$n[7].PathSpace],"rt":$n[0].Void,"fs":"Space"},"fn":"Space"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"autoControlLength","t":4,"rt":$n[0].Single,"sn":"autoControlLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"bounds","t":4,"rt":$n[2].Bounds,"sn":"bounds"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"boundsUpToDate","t":4,"rt":$n[0].Boolean,"sn":"boundsUpToDate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"controlMode","t":4,"rt":$n[7].BezierPath.ControlMode,"sn":"controlMode","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"flipNormals","t":4,"rt":$n[0].Boolean,"sn":"flipNormals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"globalNormalsAngle","t":4,"rt":$n[0].Single,"sn":"globalNormalsAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"isClosed","t":4,"rt":$n[0].Boolean,"sn":"isClosed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"perAnchorNormalsAngle","t":4,"rt":$n[1].List$1(System.Single),"sn":"perAnchorNormalsAngle"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"points","t":4,"rt":$n[1].List$1(UnityEngine.Vector3),"sn":"points"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"space","t":4,"rt":$n[7].PathSpace,"sn":"space","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"OnModified","t":2,"ad":{"a":2,"n":"add_OnModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnModified","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnModified","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*PathCreation.BezierPath end.*/

    /*PathCreation.BezierPath+ControlMode start.*/
    $m("PathCreation.BezierPath.ControlMode", function () { return {"td":$n[7].BezierPath,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Aligned","is":true,"t":4,"rt":$n[7].BezierPath.ControlMode,"sn":"Aligned","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"a":2,"n":"Automatic","is":true,"t":4,"rt":$n[7].BezierPath.ControlMode,"sn":"Automatic","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"a":2,"n":"Free","is":true,"t":4,"rt":$n[7].BezierPath.ControlMode,"sn":"Free","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}},{"a":2,"n":"Mirrored","is":true,"t":4,"rt":$n[7].BezierPath.ControlMode,"sn":"Mirrored","box":function ($v) { return Bridge.box($v, PathCreation.BezierPath.ControlMode, System.Enum.toStringFn(PathCreation.BezierPath.ControlMode));}}]}; }, $n);
    /*PathCreation.BezierPath+ControlMode end.*/

    /*PathCreation.EndOfPathInstruction start.*/
    $m("PathCreation.EndOfPathInstruction", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Loop","is":true,"t":4,"rt":$n[7].EndOfPathInstruction,"sn":"Loop","box":function ($v) { return Bridge.box($v, PathCreation.EndOfPathInstruction, System.Enum.toStringFn(PathCreation.EndOfPathInstruction));}},{"a":2,"n":"Reverse","is":true,"t":4,"rt":$n[7].EndOfPathInstruction,"sn":"Reverse","box":function ($v) { return Bridge.box($v, PathCreation.EndOfPathInstruction, System.Enum.toStringFn(PathCreation.EndOfPathInstruction));}},{"a":2,"n":"Stop","is":true,"t":4,"rt":$n[7].EndOfPathInstruction,"sn":"Stop","box":function ($v) { return Bridge.box($v, PathCreation.EndOfPathInstruction, System.Enum.toStringFn(PathCreation.EndOfPathInstruction));}}]}; }, $n);
    /*PathCreation.EndOfPathInstruction end.*/

    /*PathCreation.GlobalDisplaySettings start.*/
    $m("PathCreation.GlobalDisplaySettings", function () { return {"nested":[$n[7].GlobalDisplaySettings.HandleType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.HeaderAttribute("Anchor Colours")],"a":2,"n":"anchor","t":4,"rt":$n[2].Color,"sn":"anchor"},{"a":2,"n":"anchorHighlighted","t":4,"rt":$n[2].Color,"sn":"anchorHighlighted"},{"a":2,"n":"anchorSelected","t":4,"rt":$n[2].Color,"sn":"anchorSelected"},{"a":2,"n":"anchorShape","t":4,"rt":$n[7].GlobalDisplaySettings.HandleType,"sn":"anchorShape","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"at":[new UnityEngine.HeaderAttribute("Appearance")],"a":2,"n":"anchorSize","t":4,"rt":$n[0].Single,"sn":"anchorSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Bezier Path Colours")],"a":2,"n":"bezierPath","t":4,"rt":$n[2].Color,"sn":"bezierPath"},{"a":2,"n":"bounds","t":4,"rt":$n[2].Color,"sn":"bounds"},{"at":[new UnityEngine.HeaderAttribute("Control Colours")],"a":2,"n":"control","t":4,"rt":$n[2].Color,"sn":"control"},{"a":2,"n":"controlHighlighted","t":4,"rt":$n[2].Color,"sn":"controlHighlighted"},{"a":2,"n":"controlLine","t":4,"rt":$n[2].Color,"sn":"controlLine"},{"a":2,"n":"controlSelected","t":4,"rt":$n[2].Color,"sn":"controlSelected"},{"a":2,"n":"controlShape","t":4,"rt":$n[7].GlobalDisplaySettings.HandleType,"sn":"controlShape","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"a":2,"n":"controlSize","t":4,"rt":$n[0].Single,"sn":"controlSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handleDisabled","t":4,"rt":$n[2].Color,"sn":"handleDisabled"},{"at":[new UnityEngine.TooltipAttribute("If true, control points will be hidden when the control point mode is set to automatic. Otherwise they will inactive, but still visible.")],"a":2,"n":"hideAutoControls","t":4,"rt":$n[0].Boolean,"sn":"hideAutoControls","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"highlightedPath","t":4,"rt":$n[2].Color,"sn":"highlightedPath"},{"at":[new UnityEngine.HeaderAttribute("Normals")],"a":2,"n":"normals","t":4,"rt":$n[2].Color,"sn":"normals"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"normalsLength","t":4,"rt":$n[0].Single,"sn":"normalsLength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"segmentBounds","t":4,"rt":$n[2].Color,"sn":"segmentBounds"},{"at":[new UnityEngine.HeaderAttribute("Vertex Path Colours")],"a":2,"n":"vertexPath","t":4,"rt":$n[2].Color,"sn":"vertexPath"},{"at":[new UnityEngine.TooltipAttribute("Should the path still be drawn when behind objects in the scene?")],"a":2,"n":"visibleBehindObjects","t":4,"rt":$n[0].Boolean,"sn":"visibleBehindObjects","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Should the path be drawn even when the path object is not selected?")],"a":2,"n":"visibleWhenNotSelected","t":4,"rt":$n[0].Boolean,"sn":"visibleWhenNotSelected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PathCreation.GlobalDisplaySettings end.*/

    /*PathCreation.GlobalDisplaySettings+HandleType start.*/
    $m("PathCreation.GlobalDisplaySettings.HandleType", function () { return {"td":$n[7].GlobalDisplaySettings,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Circle","is":true,"t":4,"rt":$n[7].GlobalDisplaySettings.HandleType,"sn":"Circle","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"a":2,"n":"Sphere","is":true,"t":4,"rt":$n[7].GlobalDisplaySettings.HandleType,"sn":"Sphere","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}},{"a":2,"n":"Square","is":true,"t":4,"rt":$n[7].GlobalDisplaySettings.HandleType,"sn":"Square","box":function ($v) { return Bridge.box($v, PathCreation.GlobalDisplaySettings.HandleType, System.Enum.toStringFn(PathCreation.GlobalDisplaySettings.HandleType));}}]}; }, $n);
    /*PathCreation.GlobalDisplaySettings+HandleType end.*/

    /*PathCreation.MinMax3D start.*/
    $m("PathCreation.MinMax3D", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddValue","t":8,"pi":[{"n":"v","pt":$n[2].Vector3,"ps":0}],"sn":"AddValue","rt":$n[0].Void,"p":[$n[2].Vector3]},{"a":2,"n":"Max","t":16,"rt":$n[2].Vector3,"g":{"a":2,"n":"get_Max","t":8,"rt":$n[2].Vector3,"fg":"Max"},"s":{"a":1,"n":"set_Max","t":8,"p":[$n[2].Vector3],"rt":$n[0].Void,"fs":"Max"},"fn":"Max"},{"a":2,"n":"Min","t":16,"rt":$n[2].Vector3,"g":{"a":2,"n":"get_Min","t":8,"rt":$n[2].Vector3,"fg":"Min"},"s":{"a":1,"n":"set_Min","t":8,"p":[$n[2].Vector3],"rt":$n[0].Void,"fs":"Min"},"fn":"Min"},{"a":1,"backing":true,"n":"<Max>k__BackingField","t":4,"rt":$n[2].Vector3,"sn":"Max"},{"a":1,"backing":true,"n":"<Min>k__BackingField","t":4,"rt":$n[2].Vector3,"sn":"Min"}]}; }, $n);
    /*PathCreation.MinMax3D end.*/

    /*PathCreation.PathCreator start.*/
    $m("PathCreation.PathCreator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetPos","t":8,"pi":[{"n":"distance","pt":$n[0].Single,"ps":0},{"n":"perpendicularOffset","pt":$n[0].Single,"ps":1}],"sn":"GetPos","rt":$n[2].Vector3,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"InitializeEditorData","t":8,"pi":[{"n":"in2DMode","pt":$n[0].Boolean,"ps":0}],"sn":"InitializeEditorData","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"TriggerPathUpdate","t":8,"sn":"TriggerPathUpdate","rt":$n[0].Void},{"a":2,"n":"EditorData","t":16,"rt":$n[7].PathCreatorData,"g":{"a":2,"n":"get_EditorData","t":8,"rt":$n[7].PathCreatorData,"fg":"EditorData"},"fn":"EditorData"},{"a":2,"n":"bezierPath","t":16,"rt":$n[7].BezierPath,"g":{"a":2,"n":"get_bezierPath","t":8,"rt":$n[7].BezierPath,"fg":"bezierPath"},"s":{"a":2,"n":"set_bezierPath","t":8,"p":[$n[7].BezierPath],"rt":$n[0].Void,"fs":"bezierPath"},"fn":"bezierPath"},{"a":2,"n":"path","t":16,"rt":$n[7].VertexPath,"g":{"a":2,"n":"get_path","t":8,"rt":$n[7].VertexPath,"fg":"path"},"fn":"path"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"editorData","t":4,"rt":$n[7].PathCreatorData,"sn":"editorData"},{"a":1,"n":"globalEditorDisplaySettings","t":4,"rt":$n[7].GlobalDisplaySettings,"sn":"globalEditorDisplaySettings"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.HideInInspector()],"a":1,"n":"initialized","t":4,"rt":$n[0].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathUpdated","t":2,"ad":{"a":2,"n":"add_pathUpdated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addpathUpdated","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_pathUpdated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removepathUpdated","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*PathCreation.PathCreator end.*/

    /*PathCreation.PathCreatorData start.*/
    $m("PathCreation.PathCreatorData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BezierPathEdited","t":8,"sn":"BezierPathEdited","rt":$n[0].Void},{"a":1,"n":"CreateBezier","t":8,"pi":[{"n":"centre","pt":$n[2].Vector3,"ps":0},{"n":"defaultIs2D","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"CreateBezier","rt":$n[0].Void,"p":[$n[2].Vector3,$n[0].Boolean]},{"a":2,"n":"GetVertexPath","t":8,"pi":[{"n":"transform","pt":$n[2].Transform,"ps":0}],"sn":"GetVertexPath","rt":$n[7].VertexPath,"p":[$n[2].Transform]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"defaultIs2D","pt":$n[0].Boolean,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"PathModifiedByUndo","t":8,"sn":"PathModifiedByUndo","rt":$n[0].Void},{"a":2,"n":"PathTransformed","t":8,"sn":"PathTransformed","rt":$n[0].Void},{"a":2,"n":"ResetBezierPath","t":8,"pi":[{"n":"centre","pt":$n[2].Vector3,"ps":0},{"n":"defaultIs2D","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"ResetBezierPath","rt":$n[0].Void,"p":[$n[2].Vector3,$n[0].Boolean]},{"a":2,"n":"VertexPathSettingsChanged","t":8,"sn":"VertexPathSettingsChanged","rt":$n[0].Void},{"a":2,"n":"bezierPath","t":16,"rt":$n[7].BezierPath,"g":{"a":2,"n":"get_bezierPath","t":8,"rt":$n[7].BezierPath,"fg":"bezierPath"},"s":{"a":2,"n":"set_bezierPath","t":8,"p":[$n[7].BezierPath],"rt":$n[0].Void,"fs":"bezierPath"},"fn":"bezierPath"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bezierPath","t":4,"rt":$n[7].BezierPath,"sn":"_bezierPath"},{"a":1,"n":"_vertexPath","t":4,"rt":$n[7].VertexPath,"sn":"_vertexPath"},{"a":2,"n":"bezierHandleScale","t":4,"rt":$n[0].Single,"sn":"bezierHandleScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"displayAnchorPoints","t":4,"rt":$n[0].Boolean,"sn":"displayAnchorPoints","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"displayControlPoints","t":4,"rt":$n[0].Boolean,"sn":"displayControlPoints","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"globalDisplaySettingsFoldout","t":4,"rt":$n[0].Boolean,"sn":"globalDisplaySettingsFoldout","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"keepConstantHandleSize","t":4,"rt":$n[0].Boolean,"sn":"keepConstantHandleSize","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showBezierPathInVertexMode","t":4,"rt":$n[0].Boolean,"sn":"showBezierPathInVertexMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showDisplayOptions","t":4,"rt":$n[0].Boolean,"sn":"showDisplayOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showNormals","t":4,"rt":$n[0].Boolean,"sn":"showNormals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showNormalsHelpInfo","t":4,"rt":$n[0].Boolean,"sn":"showNormalsHelpInfo","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showNormalsInVertexMode","t":4,"rt":$n[0].Boolean,"sn":"showNormalsInVertexMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showPathBounds","t":4,"rt":$n[0].Boolean,"sn":"showPathBounds","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showPathOptions","t":4,"rt":$n[0].Boolean,"sn":"showPathOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showPerSegmentBounds","t":4,"rt":$n[0].Boolean,"sn":"showPerSegmentBounds","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showTransformTool","t":4,"rt":$n[0].Boolean,"sn":"showTransformTool","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showVertexPathDisplayOptions","t":4,"rt":$n[0].Boolean,"sn":"showVertexPathDisplayOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showVertexPathOptions","t":4,"rt":$n[0].Boolean,"sn":"showVertexPathOptions","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"tabIndex","t":4,"rt":$n[0].Int32,"sn":"tabIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"vertexPathMaxAngleError","t":4,"rt":$n[0].Single,"sn":"vertexPathMaxAngleError","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"vertexPathMinVertexSpacing","t":4,"rt":$n[0].Single,"sn":"vertexPathMinVertexSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"vertexPathUpToDate","t":4,"rt":$n[0].Boolean,"sn":"vertexPathUpToDate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"bezierCreated","t":2,"ad":{"a":2,"n":"add_bezierCreated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addbezierCreated","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_bezierCreated","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removebezierCreated","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"bezierOrVertexPathModified","t":2,"ad":{"a":2,"n":"add_bezierOrVertexPathModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addbezierOrVertexPathModified","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_bezierOrVertexPathModified","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removebezierOrVertexPathModified","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*PathCreation.PathCreatorData end.*/

    /*PathCreation.PathSpace start.*/
    $m("PathCreation.PathSpace", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"xy","is":true,"t":4,"rt":$n[7].PathSpace,"sn":"xy","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"xyz","is":true,"t":4,"rt":$n[7].PathSpace,"sn":"xyz","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"xz","is":true,"t":4,"rt":$n[7].PathSpace,"sn":"xz","box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}}]}; }, $n);
    /*PathCreation.PathSpace end.*/

    /*PathCreation.VertexPath start.*/
    $m("PathCreation.VertexPath", function () { return {"nested":[$n[7].VertexPath.TimeOnPathData],"att":1048577,"a":2,"m":[{"a":1,"n":".ctor","t":1,"p":[$n[7].BezierPath,$n[12].VertexPathUtility.PathSplitData,$n[2].Transform],"pi":[{"n":"bezierPath","pt":$n[7].BezierPath,"ps":0},{"n":"pathSplitData","pt":$n[12].VertexPathUtility.PathSplitData,"ps":1},{"n":"transform","pt":$n[2].Transform,"ps":2}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[7].BezierPath,$n[2].Transform,$n[0].Single],"pi":[{"n":"bezierPath","pt":$n[7].BezierPath,"ps":0},{"n":"transform","pt":$n[2].Transform,"ps":1},{"n":"vertexSpacing","pt":$n[0].Single,"ps":2}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[7].BezierPath,$n[2].Transform,$n[0].Single,$n[0].Single],"pi":[{"n":"bezierPath","pt":$n[7].BezierPath,"ps":0},{"n":"transform","pt":$n[2].Transform,"ps":1},{"n":"maxAngleError","dv":0.3,"o":true,"pt":$n[0].Single,"ps":2},{"n":"minVertexDst","dv":0.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"$ctor2"},{"a":1,"n":"CalculateClosestPointOnPathData","t":8,"pi":[{"n":"worldPoint","pt":$n[2].Vector3,"ps":0}],"sn":"CalculateClosestPointOnPathData","rt":$n[7].VertexPath.TimeOnPathData,"p":[$n[2].Vector3]},{"a":1,"n":"CalculatePercentOnPathData","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"CalculatePercentOnPathData","rt":$n[7].VertexPath.TimeOnPathData,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetClosestDistanceAlongPath","t":8,"pi":[{"n":"worldPoint","pt":$n[2].Vector3,"ps":0}],"sn":"GetClosestDistanceAlongPath","rt":$n[0].Single,"p":[$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetClosestPointOnPath","t":8,"pi":[{"n":"worldPoint","pt":$n[2].Vector3,"ps":0}],"sn":"GetClosestPointOnPath","rt":$n[2].Vector3,"p":[$n[2].Vector3]},{"a":2,"n":"GetClosestTimeOnPath","t":8,"pi":[{"n":"worldPoint","pt":$n[2].Vector3,"ps":0}],"sn":"GetClosestTimeOnPath","rt":$n[0].Single,"p":[$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetDirection","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetDirection","rt":$n[2].Vector3,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetDirectionAtDistance","t":8,"pi":[{"n":"dst","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetDirectionAtDistance","rt":$n[2].Vector3,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetNormal","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetNormal","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetNormal","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetNormal$1","rt":$n[2].Vector3,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetNormalAtDistance","t":8,"pi":[{"n":"dst","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetNormalAtDistance","rt":$n[2].Vector3,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetPoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetPoint","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"GetPointAtDistance","t":8,"pi":[{"n":"dst","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetPointAtDistance","rt":$n[2].Vector3,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetPointAtTime","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetPointAtTime","rt":$n[2].Vector3,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetRotation","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetRotation","rt":$n[2].Quaternion,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetRotationAtDistance","t":8,"pi":[{"n":"dst","pt":$n[0].Single,"ps":0},{"n":"endOfPathInstruction","dv":0,"o":true,"pt":$n[7].EndOfPathInstruction,"ps":1}],"sn":"GetRotationAtDistance","rt":$n[2].Quaternion,"p":[$n[0].Single,$n[7].EndOfPathInstruction]},{"a":2,"n":"GetTangent","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetTangent","rt":$n[2].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"UpdateTransform","t":8,"pi":[{"n":"transform","pt":$n[2].Transform,"ps":0}],"sn":"UpdateTransform","rt":$n[0].Void,"p":[$n[2].Transform]},{"a":2,"n":"NumPoints","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_NumPoints","t":8,"rt":$n[0].Int32,"fg":"NumPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"NumPoints"},{"a":1,"n":"accuracy","is":true,"t":4,"rt":$n[0].Int32,"sn":"accuracy","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"bounds","t":4,"rt":$n[2].Bounds,"sn":"bounds","ro":true},{"a":2,"n":"cumulativeLengthAtEachVertex","t":4,"rt":$n[0].Array.type(System.Single),"sn":"cumulativeLengthAtEachVertex","ro":true},{"a":2,"n":"isClosedLoop","t":4,"rt":$n[0].Boolean,"sn":"isClosedLoop","ro":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"length","t":4,"rt":$n[0].Single,"sn":"length","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"localNormals","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"localNormals","ro":true},{"a":2,"n":"localPoints","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"localPoints","ro":true},{"a":2,"n":"localTangents","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"localTangents","ro":true},{"a":1,"n":"minVertexSpacing","is":true,"t":4,"rt":$n[0].Single,"sn":"minVertexSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"space","t":4,"rt":$n[7].PathSpace,"sn":"space","ro":true,"box":function ($v) { return Bridge.box($v, PathCreation.PathSpace, System.Enum.toStringFn(PathCreation.PathSpace));}},{"a":2,"n":"times","t":4,"rt":$n[0].Array.type(System.Single),"sn":"times","ro":true},{"a":1,"n":"transform","t":4,"rt":$n[2].Transform,"sn":"transform"},{"a":2,"n":"up","t":4,"rt":$n[2].Vector3,"sn":"up","ro":true}]}; }, $n);
    /*PathCreation.VertexPath end.*/

    /*PathCreation.VertexPath+TimeOnPathData start.*/
    $m("PathCreation.VertexPath.TimeOnPathData", function () { return {"td":$n[7].VertexPath,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Int32,$n[0].Single],"pi":[{"n":"prev","pt":$n[0].Int32,"ps":0},{"n":"next","pt":$n[0].Int32,"ps":1},{"n":"percentBetweenIndices","pt":$n[0].Single,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"nextIndex","t":4,"rt":$n[0].Int32,"sn":"nextIndex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"percentBetweenIndices","t":4,"rt":$n[0].Single,"sn":"percentBetweenIndices","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"previousIndex","t":4,"rt":$n[0].Int32,"sn":"previousIndex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PathCreation.VertexPath+TimeOnPathData end.*/

    /*PathCreation.Utility.CubicBezierUtility start.*/
    $m("PathCreation.Utility.CubicBezierUtility", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"CalculateSegmentBounds","is":true,"t":8,"pi":[{"n":"p0","pt":$n[2].Vector3,"ps":0},{"n":"p1","pt":$n[2].Vector3,"ps":1},{"n":"p2","pt":$n[2].Vector3,"ps":2},{"n":"p3","pt":$n[2].Vector3,"ps":3}],"sn":"CalculateSegmentBounds","rt":$n[2].Bounds,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3]},{"a":2,"n":"EstimateCurveLength","is":true,"t":8,"pi":[{"n":"p0","pt":$n[2].Vector3,"ps":0},{"n":"p1","pt":$n[2].Vector3,"ps":1},{"n":"p2","pt":$n[2].Vector3,"ps":2},{"n":"p3","pt":$n[2].Vector3,"ps":3}],"sn":"EstimateCurveLength","rt":$n[0].Single,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"EvaluateCurve","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[0].Single,"ps":1}],"sn":"EvaluateCurve$1","rt":$n[2].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"EvaluateCurve","is":true,"t":8,"pi":[{"n":"a1","pt":$n[2].Vector3,"ps":0},{"n":"c1","pt":$n[2].Vector3,"ps":1},{"n":"c2","pt":$n[2].Vector3,"ps":2},{"n":"a2","pt":$n[2].Vector3,"ps":3},{"n":"t","pt":$n[0].Single,"ps":4}],"sn":"EvaluateCurve","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"a":2,"n":"EvaluateCurveDerivative","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[0].Single,"ps":1}],"sn":"EvaluateCurveDerivative$1","rt":$n[2].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"EvaluateCurveDerivative","is":true,"t":8,"pi":[{"n":"a1","pt":$n[2].Vector3,"ps":0},{"n":"c1","pt":$n[2].Vector3,"ps":1},{"n":"c2","pt":$n[2].Vector3,"ps":2},{"n":"a2","pt":$n[2].Vector3,"ps":3},{"n":"t","pt":$n[0].Single,"ps":4}],"sn":"EvaluateCurveDerivative","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"a":2,"n":"EvaluateCurveSecondDerivative","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[0].Single,"ps":1}],"sn":"EvaluateCurveSecondDerivative$1","rt":$n[2].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"EvaluateCurveSecondDerivative","is":true,"t":8,"pi":[{"n":"a1","pt":$n[2].Vector3,"ps":0},{"n":"c1","pt":$n[2].Vector3,"ps":1},{"n":"c2","pt":$n[2].Vector3,"ps":2},{"n":"a2","pt":$n[2].Vector3,"ps":3},{"n":"t","pt":$n[0].Single,"ps":4}],"sn":"EvaluateCurveSecondDerivative","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"a":2,"n":"ExtremePointTimes","is":true,"t":8,"pi":[{"n":"p0","pt":$n[2].Vector3,"ps":0},{"n":"p1","pt":$n[2].Vector3,"ps":1},{"n":"p2","pt":$n[2].Vector3,"ps":2},{"n":"p3","pt":$n[2].Vector3,"ps":3}],"sn":"ExtremePointTimes","rt":$n[1].List$1(System.Single),"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3]},{"a":2,"n":"Normal","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[0].Single,"ps":1}],"sn":"Normal$1","rt":$n[2].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"Normal","is":true,"t":8,"pi":[{"n":"a1","pt":$n[2].Vector3,"ps":0},{"n":"c1","pt":$n[2].Vector3,"ps":1},{"n":"c2","pt":$n[2].Vector3,"ps":2},{"n":"a2","pt":$n[2].Vector3,"ps":3},{"n":"t","pt":$n[0].Single,"ps":4}],"sn":"Normal","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"a":2,"n":"SplitCurve","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[0].Single,"ps":1}],"sn":"SplitCurve","rt":System.Array.type(System.Array.type(UnityEngine.Vector3)),"p":[System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":1,"n":"StationaryPointTimes","is":true,"t":8,"pi":[{"n":"a","pt":$n[0].Single,"ps":0},{"n":"b","pt":$n[0].Single,"ps":1},{"n":"c","pt":$n[0].Single,"ps":2}],"sn":"StationaryPointTimes","rt":$n[1].IEnumerable$1(System.Single),"p":[$n[0].Single,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*PathCreation.Utility.CubicBezierUtility end.*/

    /*PathCreation.Utility.MathUtility start.*/
    $m("PathCreation.Utility.MathUtility", function () { return {"nested":[$n[12].MathUtility.PosRotScale],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ClosestPointOnLineSegment","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector2,"ps":0},{"n":"a","pt":$n[2].Vector2,"ps":1},{"n":"b","pt":$n[2].Vector2,"ps":2}],"sn":"ClosestPointOnLineSegment","rt":$n[2].Vector2,"p":[$n[2].Vector2,$n[2].Vector2,$n[2].Vector2]},{"a":2,"n":"ClosestPointOnLineSegment","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector3,"ps":0},{"n":"a","pt":$n[2].Vector3,"ps":1},{"n":"b","pt":$n[2].Vector3,"ps":2}],"sn":"ClosestPointOnLineSegment$1","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3]},{"a":2,"n":"InverseTransformDirection","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector3,"ps":0},{"n":"t","pt":$n[2].Transform,"ps":1},{"n":"space","pt":$n[7].PathSpace,"ps":2}],"sn":"InverseTransformDirection","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Transform,$n[7].PathSpace]},{"a":2,"n":"InverseTransformPoint","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector3,"ps":0},{"n":"t","pt":$n[2].Transform,"ps":1},{"n":"space","pt":$n[7].PathSpace,"ps":2}],"sn":"InverseTransformPoint","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Transform,$n[7].PathSpace]},{"a":2,"n":"InverseTransformVector","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector3,"ps":0},{"n":"t","pt":$n[2].Transform,"ps":1},{"n":"space","pt":$n[7].PathSpace,"ps":2}],"sn":"InverseTransformVector","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Transform,$n[7].PathSpace]},{"a":2,"n":"LineSegmentsIntersect","is":true,"t":8,"pi":[{"n":"a1","pt":$n[2].Vector2,"ps":0},{"n":"a2","pt":$n[2].Vector2,"ps":1},{"n":"b1","pt":$n[2].Vector2,"ps":2},{"n":"b2","pt":$n[2].Vector2,"ps":3}],"sn":"LineSegmentsIntersect","rt":$n[0].Boolean,"p":[$n[2].Vector2,$n[2].Vector2,$n[2].Vector2,$n[2].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LinesIntersect","is":true,"t":8,"pi":[{"n":"a1","pt":$n[2].Vector2,"ps":0},{"n":"a2","pt":$n[2].Vector2,"ps":1},{"n":"a3","pt":$n[2].Vector2,"ps":2},{"n":"a4","pt":$n[2].Vector2,"ps":3}],"sn":"LinesIntersect","rt":$n[0].Boolean,"p":[$n[2].Vector2,$n[2].Vector2,$n[2].Vector2,$n[2].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LockTransformToSpace","is":true,"t":8,"pi":[{"n":"t","pt":$n[2].Transform,"ps":0},{"n":"space","pt":$n[7].PathSpace,"ps":1}],"sn":"LockTransformToSpace","rt":$n[12].MathUtility.PosRotScale,"p":[$n[2].Transform,$n[7].PathSpace]},{"a":2,"n":"MinAngle","is":true,"t":8,"pi":[{"n":"a","pt":$n[2].Vector3,"ps":0},{"n":"b","pt":$n[2].Vector3,"ps":1},{"n":"c","pt":$n[2].Vector3,"ps":2}],"sn":"MinAngle","rt":$n[0].Single,"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"PointInTriangle","is":true,"t":8,"pi":[{"n":"a","pt":$n[2].Vector2,"ps":0},{"n":"b","pt":$n[2].Vector2,"ps":1},{"n":"c","pt":$n[2].Vector2,"ps":2},{"n":"p","pt":$n[2].Vector2,"ps":3}],"sn":"PointInTriangle","rt":$n[0].Boolean,"p":[$n[2].Vector2,$n[2].Vector2,$n[2].Vector2,$n[2].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PointOfLineLineIntersection","is":true,"t":8,"pi":[{"n":"a1","pt":$n[2].Vector2,"ps":0},{"n":"a2","pt":$n[2].Vector2,"ps":1},{"n":"a3","pt":$n[2].Vector2,"ps":2},{"n":"a4","pt":$n[2].Vector2,"ps":3}],"sn":"PointOfLineLineIntersection","rt":$n[2].Vector2,"p":[$n[2].Vector2,$n[2].Vector2,$n[2].Vector2,$n[2].Vector2]},{"a":2,"n":"PointsAreClockwise","is":true,"t":8,"pi":[{"n":"points","pt":System.Array.type(UnityEngine.Vector2),"ps":0}],"sn":"PointsAreClockwise","rt":$n[0].Boolean,"p":[System.Array.type(UnityEngine.Vector2)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SideOfLine","is":true,"t":8,"pi":[{"n":"a","pt":$n[2].Vector2,"ps":0},{"n":"b","pt":$n[2].Vector2,"ps":1},{"n":"c","pt":$n[2].Vector2,"ps":2}],"sn":"SideOfLine","rt":$n[0].Int32,"p":[$n[2].Vector2,$n[2].Vector2,$n[2].Vector2],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TransformDirection","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector3,"ps":0},{"n":"t","pt":$n[2].Transform,"ps":1},{"n":"space","pt":$n[7].PathSpace,"ps":2}],"sn":"TransformDirection","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Transform,$n[7].PathSpace]},{"a":2,"n":"TransformPoint","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector3,"ps":0},{"n":"t","pt":$n[2].Transform,"ps":1},{"n":"space","pt":$n[7].PathSpace,"ps":2}],"sn":"TransformPoint","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Transform,$n[7].PathSpace]},{"a":2,"n":"TransformVector","is":true,"t":8,"pi":[{"n":"p","pt":$n[2].Vector3,"ps":0},{"n":"t","pt":$n[2].Transform,"ps":1},{"n":"space","pt":$n[7].PathSpace,"ps":2}],"sn":"TransformVector","rt":$n[2].Vector3,"p":[$n[2].Vector3,$n[2].Transform,$n[7].PathSpace]}]}; }, $n);
    /*PathCreation.Utility.MathUtility end.*/

    /*PathCreation.Utility.MathUtility+PosRotScale start.*/
    $m("PathCreation.Utility.MathUtility.PosRotScale", function () { return {"td":$n[12].MathUtility,"att":1048579,"a":1,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Transform],"pi":[{"n":"t","pt":$n[2].Transform,"ps":0}],"sn":"ctor"},{"a":2,"n":"SetTransform","t":8,"pi":[{"n":"t","pt":$n[2].Transform,"ps":0}],"sn":"SetTransform","rt":$n[0].Void,"p":[$n[2].Transform]},{"a":2,"n":"position","t":4,"rt":$n[2].Vector3,"sn":"position","ro":true},{"a":2,"n":"rotation","t":4,"rt":$n[2].Quaternion,"sn":"rotation","ro":true},{"a":2,"n":"scale","t":4,"rt":$n[2].Vector3,"sn":"scale","ro":true}]}; }, $n);
    /*PathCreation.Utility.MathUtility+PosRotScale end.*/

    /*PathCreation.Utility.VertexPathUtility start.*/
    $m("PathCreation.Utility.VertexPathUtility", function () { return {"nested":[$n[12].VertexPathUtility.PathSplitData],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"SplitBezierPathByAngleError","is":true,"t":8,"pi":[{"n":"bezierPath","pt":$n[7].BezierPath,"ps":0},{"n":"maxAngleError","pt":$n[0].Single,"ps":1},{"n":"minVertexDst","pt":$n[0].Single,"ps":2},{"n":"accuracy","pt":$n[0].Single,"ps":3}],"sn":"SplitBezierPathByAngleError","rt":$n[12].VertexPathUtility.PathSplitData,"p":[$n[7].BezierPath,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"SplitBezierPathEvenly","is":true,"t":8,"pi":[{"n":"bezierPath","pt":$n[7].BezierPath,"ps":0},{"n":"spacing","pt":$n[0].Single,"ps":1},{"n":"accuracy","pt":$n[0].Single,"ps":2}],"sn":"SplitBezierPathEvenly","rt":$n[12].VertexPathUtility.PathSplitData,"p":[$n[7].BezierPath,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*PathCreation.Utility.VertexPathUtility end.*/

    /*PathCreation.Utility.VertexPathUtility+PathSplitData start.*/
    $m("PathCreation.Utility.VertexPathUtility.PathSplitData", function () { return {"td":$n[12].VertexPathUtility,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"anchorVertexMap","t":4,"rt":$n[1].List$1(System.Int32),"sn":"anchorVertexMap"},{"a":2,"n":"cumulativeLength","t":4,"rt":$n[1].List$1(System.Single),"sn":"cumulativeLength"},{"a":2,"n":"minMax","t":4,"rt":$n[7].MinMax3D,"sn":"minMax"},{"a":2,"n":"tangents","t":4,"rt":$n[1].List$1(UnityEngine.Vector3),"sn":"tangents"},{"a":2,"n":"vertices","t":4,"rt":$n[1].List$1(UnityEngine.Vector3),"sn":"vertices"}]}; }, $n);
    /*PathCreation.Utility.VertexPathUtility+PathSplitData end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[13].Sequence,"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[14].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[13].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[14].Path,$n[0].Single,$n[13].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[13].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[13].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[13].PathType,$n[13].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"towards","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[13].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[15].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[13].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[14].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[13].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[14].Path,$n[0].Single,$n[13].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[13].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[13].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[13].PathType,$n[13].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[13].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[15].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[13].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[13].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[13].Tweener,"p":[$n[3].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[13].Tweener,"p":[$n[3].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[13].Tweener,"p":[$n[3].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[16].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[15].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[3].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[16].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[15].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[3].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Image,"ps":0},{"n":"gradient","pt":$n[2].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[13].Sequence,"p":[$n[3].Image,$n[2].Gradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[13].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[13].Sequence,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[13].Tweener,"p":[$n[3].ScrollRect,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"punch","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[13].Tweener,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Outline,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[3].Outline,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos","rt":$n[13].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[2].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos$1","rt":$n[13].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[2].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[15].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[13].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[15].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[3].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[13].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[15].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[3].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[3].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[13].Tweener,"p":[$n[3].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[13].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[2].RectTransform,"ps":0},{"n":"to","pt":$n[2].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[2].Vector2,"p":[$n[2].RectTransform,$n[2].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":$n[2].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[13].Sequence,"p":[$n[2].Material,$n[2].Gradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":$n[2].Gradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[13].Sequence,"p":[$n[2].Material,$n[2].Gradient,$n[0].String,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[13].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[2].CustomYieldInstruction,"p":[$n[13].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[13].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[2].CustomYieldInstruction,"p":[$n[13].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[13].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[2].CustomYieldInstruction,"p":[$n[13].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[13].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[2].CustomYieldInstruction,"p":[$n[13].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[13].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[2].CustomYieldInstruction,"p":[$n[13].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[13].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[2].CustomYieldInstruction,"p":[$n[13].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[13].DOTweenCYInstruction.WaitForCompletion,$n[13].DOTweenCYInstruction.WaitForRewind,$n[13].DOTweenCYInstruction.WaitForKill,$n[13].DOTweenCYInstruction.WaitForElapsedLoops,$n[13].DOTweenCYInstruction.WaitForPosition,$n[13].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[13].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[13].Tween],"pi":[{"n":"tween","pt":$n[13].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[13].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[13].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[13].Tween],"pi":[{"n":"tween","pt":$n[13].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[13].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[13].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[13].Tween],"pi":[{"n":"tween","pt":$n[13].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[13].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[13].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[13].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[13].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[13].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[13].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[13].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[13].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[13].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[13].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[13].Tween],"pi":[{"n":"tween","pt":$n[13].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[13].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[13].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[13].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[14].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[13].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[15].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[14].Path,$n[0].Single,$n[13].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[17].PathOptions,"ps":0},{"n":"t","pt":$n[13].Tween,"ps":1},{"n":"newRot","pt":$n[2].Quaternion,"ps":2},{"n":"trans","pt":$n[2].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[17].PathOptions,$n[13].Tween,$n[2].Quaternion,$n[2].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*SWS.EventCollisionTrigger start.*/
    $m("SWS.EventCollisionTrigger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyForce","t":8,"pi":[{"n":"power","pt":$n[0].Int32,"ps":0}],"sn":"ApplyForce","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[2].Collision]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":2,"n":"myEvent","t":4,"rt":$n[8].UnityEvent,"sn":"myEvent"},{"a":2,"n":"onCollision","t":4,"rt":$n[0].Boolean,"sn":"onCollision","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onTrigger","t":4,"rt":$n[0].Boolean,"sn":"onTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SWS.EventCollisionTrigger end.*/

    /*SWS.MoveAnimator start.*/
    $m("SWS.MoveAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAnimatorMove","t":8,"sn":"OnAnimatorMove","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"animator","t":4,"rt":$n[2].Animator,"sn":"animator"},{"a":1,"n":"lastRotY","t":4,"rt":$n[0].Single,"sn":"lastRotY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sMove","t":4,"rt":$n[5].splineMove,"sn":"sMove"}]}; }, $n);
    /*SWS.MoveAnimator end.*/

    /*SWS.PathIndicator start.*/
    $m("SWS.PathIndicator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EmitParticles","t":8,"sn":"EmitParticles","rt":$n[6].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"modRotation","t":4,"rt":$n[0].Single,"sn":"modRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pSys","t":4,"rt":$n[2].ParticleSystem,"sn":"pSys"}]}; }, $n);
    /*SWS.PathIndicator end.*/

    /*SWS.PathRenderer start.*/
    $m("SWS.PathRenderer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.LineRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DrawCurved","t":8,"sn":"DrawCurved","rt":$n[0].Void},{"a":1,"n":"DrawLinear","t":8,"sn":"DrawLinear","rt":$n[0].Void},{"a":1,"n":"Render","t":8,"sn":"Render","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartRenderer","t":8,"sn":"StartRenderer","rt":$n[6].IEnumerator},{"a":1,"n":"line","t":4,"rt":$n[2].LineRenderer,"sn":"line"},{"a":2,"n":"onUpdate","t":4,"rt":$n[0].Boolean,"sn":"onUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"path","t":4,"rt":$n[5].PathManager,"sn":"path"},{"a":1,"n":"points","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"points"},{"a":2,"n":"spacing","t":4,"rt":$n[0].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SWS.PathRenderer end.*/

    /*SWS.BezierPathManager start.*/
    $m("SWS.BezierPathManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake$1","rt":$n[0].Void},{"a":2,"n":"CalculatePath","t":8,"sn":"CalculatePath","rt":$n[0].Void},{"ov":true,"a":2,"n":"Create","t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"makeChildren","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"Create$1","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[0].Boolean]},{"ov":true,"a":2,"n":"GetPathPointIndex","t":8,"pi":[{"n":"waypoint","pt":$n[0].Int32,"ps":0}],"sn":"GetPathPointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"GetPathPoints","t":8,"pi":[{"n":"local","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"GetPathPoints","rt":System.Array.type(UnityEngine.Vector3),"p":[$n[0].Boolean]},{"a":1,"n":"GetPoints","t":8,"pi":[{"n":"p0","pt":$n[2].Vector3,"ps":0},{"n":"p1","pt":$n[2].Vector3,"ps":1},{"n":"p2","pt":$n[2].Vector3,"ps":2},{"n":"p3","pt":$n[2].Vector3,"ps":3},{"n":"detail","pt":$n[0].Single,"ps":4}],"sn":"GetPoints","rt":$n[1].List$1(UnityEngine.Vector3),"p":[$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[2].Vector3,$n[0].Single]},{"ov":true,"a":2,"n":"GetWaypoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypoint","rt":$n[2].Transform,"p":[$n[0].Int32]},{"ov":true,"a":2,"n":"GetWaypointCount","t":8,"sn":"GetWaypointCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":2,"n":"GetWaypointIndex","t":8,"pi":[{"n":"pathPoint","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos$1","rt":$n[0].Void},{"a":2,"n":"bPoints","t":4,"rt":$n[1].List$1(SWS.BezierPoint),"sn":"bPoints"},{"a":2,"n":"color3","t":4,"rt":$n[2].Color,"sn":"color3"},{"a":2,"n":"connectHandles","t":4,"rt":$n[0].Boolean,"sn":"connectHandles","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"customDetail","t":4,"rt":$n[0].Boolean,"sn":"customDetail","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pathDetail","t":4,"rt":$n[0].Single,"sn":"pathDetail","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pathPoints","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"pathPoints"},{"a":2,"n":"segmentDetail","t":4,"rt":$n[1].List$1(System.Single),"sn":"segmentDetail"},{"a":2,"n":"showHandles","t":4,"rt":$n[0].Boolean,"sn":"showHandles","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SWS.BezierPathManager end.*/

    /*SWS.BezierPoint start.*/
    $m("SWS.BezierPoint", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"cp","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"cp"},{"a":2,"n":"wp","t":4,"rt":$n[2].Transform,"sn":"wp"}]}; }, $n);
    /*SWS.BezierPoint end.*/

    /*SWS.PathManager start.*/
    $m("SWS.PathManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Create","t":8,"pi":[{"n":"parent","dv":null,"o":true,"pt":$n[2].Transform,"ps":0}],"sn":"Create","rt":$n[0].Void,"p":[$n[2].Transform]},{"v":true,"a":2,"n":"Create","t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"makeChildren","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"Create$1","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[0].Boolean]},{"v":true,"a":2,"n":"GetHandleSize","t":8,"pi":[{"n":"pos","pt":$n[2].Vector3,"ps":0}],"sn":"GetHandleSize","rt":$n[0].Single,"p":[$n[2].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":2,"n":"GetPathPointIndex","t":8,"pi":[{"n":"waypoint","pt":$n[0].Int32,"ps":0}],"sn":"GetPathPointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"v":true,"a":2,"n":"GetPathPoints","t":8,"pi":[{"n":"local","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"GetPathPoints","rt":System.Array.type(UnityEngine.Vector3),"p":[$n[0].Boolean]},{"v":true,"a":2,"n":"GetWaypoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypoint","rt":$n[2].Transform,"p":[$n[0].Int32]},{"v":true,"a":2,"n":"GetWaypointCount","t":8,"sn":"GetWaypointCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"v":true,"a":2,"n":"GetWaypointIndex","t":8,"pi":[{"n":"pathPoint","pt":$n[0].Int32,"ps":0}],"sn":"GetWaypointIndex","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[0].Void},{"a":2,"n":"color1","t":4,"rt":$n[2].Color,"sn":"color1"},{"a":2,"n":"color2","t":4,"rt":$n[2].Color,"sn":"color2"},{"a":2,"n":"drawCurved","t":4,"rt":$n[0].Boolean,"sn":"drawCurved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"drawDirection","t":4,"rt":$n[0].Boolean,"sn":"drawDirection","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"replaceObject","t":4,"rt":$n[2].GameObject,"sn":"replaceObject"},{"a":2,"n":"size","t":4,"rt":$n[2].Vector3,"sn":"size"},{"a":2,"n":"skipCustomNames","t":4,"rt":$n[0].Boolean,"sn":"skipCustomNames","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"waypoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"waypoints"}]}; }, $n);
    /*SWS.PathManager end.*/

    /*SWS.WaypointManager start.*/
    $m("SWS.WaypointManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddPath","is":true,"t":8,"pi":[{"n":"path","pt":$n[2].GameObject,"ps":0}],"sn":"AddPath","rt":$n[0].Void,"p":[$n[2].GameObject]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CleanUp","is":true,"t":8,"sn":"CleanUp","rt":$n[0].Void},{"a":2,"n":"DrawCurved","is":true,"t":8,"pi":[{"n":"pathPoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"DrawCurved","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"a":2,"n":"DrawStraight","is":true,"t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"DrawStraight","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"a":2,"n":"GetCurved","is":true,"t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"segmentSubdivisions","dv":10,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"GetCurved","rt":System.Array.type(UnityEngine.Vector3),"p":[System.Array.type(UnityEngine.Vector3),$n[0].Int32]},{"a":2,"n":"GetPathLength","is":true,"t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"GetPathLength","rt":$n[0].Single,"p":[System.Array.type(UnityEngine.Vector3)],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetPoint","is":true,"t":8,"pi":[{"n":"gizmoPoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"t","pt":$n[0].Single,"ps":1}],"sn":"GetPoint","rt":$n[2].Vector3,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"SmoothCurve","is":true,"t":8,"pi":[{"n":"pathToCurve","pt":$n[1].List$1(UnityEngine.Vector3),"ps":0},{"n":"interpolations","pt":$n[0].Int32,"ps":1}],"sn":"SmoothCurve","rt":$n[1].List$1(UnityEngine.Vector3),"p":[$n[1].List$1(UnityEngine.Vector3),$n[0].Int32]},{"a":2,"n":"Paths","is":true,"t":4,"rt":$n[1].Dictionary$2(System.String,SWS.PathManager),"sn":"Paths","ro":true},{"a":2,"n":"placementKey","t":4,"rt":$n[2].KeyCode,"sn":"placementKey","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}},{"a":2,"n":"viewPlacementKey","t":4,"rt":$n[2].KeyCode,"sn":"viewPlacementKey","box":function ($v) { return Bridge.box($v, UnityEngine.KeyCode, System.Enum.toStringFn(UnityEngine.KeyCode));}}]}; }, $n);
    /*SWS.WaypointManager end.*/

    /*SWS.splineMove start.*/
    $m("SWS.splineMove", function () { return {"nested":[$n[5].splineMove.LocalType,$n[5].splineMove.TimeValue,$n[5].splineMove.LoopType,$n[5].splineMove.RotationType],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyWaypointRotation","t":8,"pi":[{"n":"rotation","pt":$n[2].Quaternion,"ps":0}],"sn":"ApplyWaypointRotation","rt":$n[0].Void,"p":[$n[2].Quaternion]},{"a":2,"n":"ChangeSpeed","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"ChangeSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"CreateTween","t":8,"sn":"CreateTween","rt":$n[0].Void},{"a":2,"n":"GoToWaypoint","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GoToWaypoint","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Initialize","t":8,"pi":[{"n":"startAt","dv":0,"o":true,"pt":$n[0].Int32,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"IsMoving","t":8,"sn":"IsMoving","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsPaused","t":8,"sn":"IsPaused","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnWaypointChange","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"OnWaypointChange","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnWaypointReached","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"OnWaypointReached","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnWaypointRotation","t":8,"sn":"OnWaypointRotation","rt":$n[0].Void},{"a":2,"n":"Pause","t":8,"pi":[{"n":"seconds","dv":0.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"Pause","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"RandomizeWaypoints","t":8,"sn":"RandomizeWaypoints","rt":$n[0].Void},{"a":1,"n":"ReachedEnd","t":8,"sn":"ReachedEnd","rt":$n[0].Void},{"a":2,"n":"ResetToStart","t":8,"sn":"ResetToStart","rt":$n[0].Void},{"a":2,"n":"Resume","t":8,"sn":"Resume","rt":$n[0].Void},{"a":2,"n":"Reverse","t":8,"sn":"Reverse","rt":$n[0].Void},{"a":2,"n":"SetPath","t":8,"pi":[{"n":"newPath","pt":$n[5].PathManager,"ps":0}],"sn":"SetPath","rt":$n[0].Void,"p":[$n[5].PathManager]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartMove","t":8,"sn":"StartMove","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Wait","t":8,"pi":[{"n":"secs","dv":0.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"Wait","rt":$n[6].IEnumerator,"p":[$n[0].Single]},{"a":2,"n":"animEaseType","t":4,"rt":pc.AnimationCurve,"sn":"animEaseType"},{"a":2,"n":"closeLoop","t":4,"rt":$n[0].Boolean,"sn":"closeLoop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"currentPoint","t":4,"rt":$n[0].Int32,"sn":"currentPoint","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"easeType","t":4,"rt":$n[13].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"events","t":4,"rt":$n[1].List$1(UnityEngine.Events.UnityEvent),"sn":"events"},{"a":2,"n":"localType","t":4,"rt":$n[5].splineMove.LocalType,"sn":"localType","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}},{"a":2,"n":"lockPosition","t":4,"rt":$n[13].AxisConstraint,"sn":"lockPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.AxisConstraint, System.Enum.toStringFn(DG.Tweening.AxisConstraint));}},{"a":2,"n":"lockRotation","t":4,"rt":$n[13].AxisConstraint,"sn":"lockRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.AxisConstraint, System.Enum.toStringFn(DG.Tweening.AxisConstraint));}},{"a":2,"n":"lookAhead","t":4,"rt":$n[0].Single,"sn":"lookAhead","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"loopType","t":4,"rt":$n[5].splineMove.LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"moveToPath","t":4,"rt":$n[0].Boolean,"sn":"moveToPath","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onStart","t":4,"rt":$n[0].Boolean,"sn":"onStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"originRot","t":4,"rt":$n[2].Quaternion,"sn":"originRot"},{"a":1,"n":"originSpeed","t":4,"rt":$n[0].Single,"sn":"originSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pathContainer","t":4,"rt":$n[5].PathManager,"sn":"pathContainer"},{"a":2,"n":"pathMode","t":4,"rt":$n[13].PathMode,"sn":"pathMode","box":function ($v) { return Bridge.box($v, DG.Tweening.PathMode, System.Enum.toStringFn(DG.Tweening.PathMode));}},{"a":2,"n":"pathType","t":4,"rt":$n[13].PathType,"sn":"pathType","box":function ($v) { return Bridge.box($v, DG.Tweening.PathType, System.Enum.toStringFn(DG.Tweening.PathType));}},{"a":1,"n":"rand","t":4,"rt":$n[0].Random,"sn":"rand"},{"a":2,"n":"reverse","t":4,"rt":$n[0].Boolean,"sn":"reverse","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"rndArray","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"rndArray"},{"a":2,"n":"rotationTarget","t":4,"rt":$n[2].Transform,"sn":"rotationTarget"},{"a":2,"n":"sizeToAdd","t":4,"rt":$n[0].Single,"sn":"sizeToAdd","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startPoint","t":4,"rt":$n[0].Int32,"sn":"startPoint","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"timeValue","t":4,"rt":$n[5].splineMove.TimeValue,"sn":"timeValue","box":function ($v) { return Bridge.box($v, SWS.splineMove.TimeValue, System.Enum.toStringFn(SWS.splineMove.TimeValue));}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"tween","t":4,"rt":$n[13].Tweener,"sn":"tween"},{"a":1,"n":"waitRoutine","t":4,"rt":$n[2].Coroutine,"sn":"waitRoutine"},{"a":2,"n":"waypointRotation","t":4,"rt":$n[5].splineMove.RotationType,"sn":"waypointRotation","box":function ($v) { return Bridge.box($v, SWS.splineMove.RotationType, System.Enum.toStringFn(SWS.splineMove.RotationType));}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"waypoints","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"waypoints"},{"a":1,"n":"wpPos","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"wpPos"}]}; }, $n);
    /*SWS.splineMove end.*/

    /*SWS.splineMove+LocalType start.*/
    $m("SWS.splineMove.LocalType", function () { return {"td":$n[5].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"none","is":true,"t":4,"rt":$n[5].splineMove.LocalType,"sn":"none","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}},{"a":2,"n":"toObject","is":true,"t":4,"rt":$n[5].splineMove.LocalType,"sn":"toObject","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}},{"a":2,"n":"toPath","is":true,"t":4,"rt":$n[5].splineMove.LocalType,"sn":"toPath","box":function ($v) { return Bridge.box($v, SWS.splineMove.LocalType, System.Enum.toStringFn(SWS.splineMove.LocalType));}}]}; }, $n);
    /*SWS.splineMove+LocalType end.*/

    /*SWS.splineMove+TimeValue start.*/
    $m("SWS.splineMove.TimeValue", function () { return {"td":$n[5].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"speed","is":true,"t":4,"rt":$n[5].splineMove.TimeValue,"sn":"speed","box":function ($v) { return Bridge.box($v, SWS.splineMove.TimeValue, System.Enum.toStringFn(SWS.splineMove.TimeValue));}},{"a":2,"n":"time","is":true,"t":4,"rt":$n[5].splineMove.TimeValue,"sn":"time","box":function ($v) { return Bridge.box($v, SWS.splineMove.TimeValue, System.Enum.toStringFn(SWS.splineMove.TimeValue));}}]}; }, $n);
    /*SWS.splineMove+TimeValue end.*/

    /*SWS.splineMove+LoopType start.*/
    $m("SWS.splineMove.LoopType", function () { return {"td":$n[5].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"loop","is":true,"t":4,"rt":$n[5].splineMove.LoopType,"sn":"loop","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"none","is":true,"t":4,"rt":$n[5].splineMove.LoopType,"sn":"none","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"pingPong","is":true,"t":4,"rt":$n[5].splineMove.LoopType,"sn":"pingPong","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"random","is":true,"t":4,"rt":$n[5].splineMove.LoopType,"sn":"random","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}},{"a":2,"n":"yoyo","is":true,"t":4,"rt":$n[5].splineMove.LoopType,"sn":"yoyo","box":function ($v) { return Bridge.box($v, SWS.splineMove.LoopType, System.Enum.toStringFn(SWS.splineMove.LoopType));}}]}; }, $n);
    /*SWS.splineMove+LoopType end.*/

    /*SWS.splineMove+RotationType start.*/
    $m("SWS.splineMove.RotationType", function () { return {"td":$n[5].splineMove,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"all","is":true,"t":4,"rt":$n[5].splineMove.RotationType,"sn":"all","box":function ($v) { return Bridge.box($v, SWS.splineMove.RotationType, System.Enum.toStringFn(SWS.splineMove.RotationType));}},{"a":2,"n":"none","is":true,"t":4,"rt":$n[5].splineMove.RotationType,"sn":"none","box":function ($v) { return Bridge.box($v, SWS.splineMove.RotationType, System.Enum.toStringFn(SWS.splineMove.RotationType));}}]}; }, $n);
    /*SWS.splineMove+RotationType end.*/

});
