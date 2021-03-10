var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointSpring' )
  var i517 = data
  i516.spring = i517[0]
  i516.damper = i517[1]
  i516.targetPosition = i517[2]
  return i516
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointMotor' )
  var i519 = data
  i518.m_TargetVelocity = i519[0]
  i518.m_Force = i519[1]
  i518.m_FreeSpin = i519[2]
  return i518
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointLimits' )
  var i521 = data
  i520.m_Min = i521[0]
  i520.m_Max = i521[1]
  i520.m_Bounciness = i521[2]
  i520.m_BounceMinVelocity = i521[3]
  i520.m_ContactDistance = i521[4]
  i520.minBounce = i521[5]
  i520.maxBounce = i521[6]
  return i520
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointDrive' )
  var i523 = data
  i522.m_PositionSpring = i523[0]
  i522.m_PositionDamper = i523[1]
  i522.m_MaximumForce = i523[2]
  return i522
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i525 = data
  i524.m_Spring = i525[0]
  i524.m_Damper = i525[1]
  return i524
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i527 = data
  i526.m_Limit = i527[0]
  i526.m_Bounciness = i527[1]
  i526.m_ContactDistance = i527[2]
  return i526
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i529 = data
  i528.m_ExtremumSlip = i529[0]
  i528.m_ExtremumValue = i529[1]
  i528.m_AsymptoteSlip = i529[2]
  i528.m_AsymptoteValue = i529[3]
  i528.m_Stiffness = i529[4]
  return i528
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i531 = data
  i530.m_LowerAngle = i531[0]
  i530.m_UpperAngle = i531[1]
  return i530
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i533 = data
  i532.m_MotorSpeed = i533[0]
  i532.m_MaximumMotorTorque = i533[1]
  return i532
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i535 = data
  i534.m_DampingRatio = i535[0]
  i534.m_Frequency = i535[1]
  i534.m_Angle = i535[2]
  return i534
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i537 = data
  i536.m_LowerTranslation = i537[0]
  i536.m_UpperTranslation = i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i538 = root || new pc.UnityMaterial()
  var i539 = data
  i538.name = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'shader')
  i538.renderQueue = i539[3]
  i538.enableInstancing = !!i539[4]
  var i541 = i539[5]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i541[i + 0]) );
  }
  i538.floatParameters = i540
  var i543 = i539[6]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i543[i + 0]) );
  }
  i538.colorParameters = i542
  var i545 = i539[7]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i545[i + 0]) );
  }
  i538.vectorParameters = i544
  var i547 = i539[8]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i547[i + 0]) );
  }
  i538.textureParameters = i546
  var i549 = i539[9]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i549[i + 0]) );
  }
  i538.materialFlags = i548
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i553 = data
  i552.name = i553[0]
  i552.value = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = new pc.Color(i557[1], i557[2], i557[3], i557[4])
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = new pc.Vec4( i561[1], i561[2], i561[3], i561[4] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i565 = data
  i564.name = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'value')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i569 = data
  i568.name = i569[0]
  i568.enabled = !!i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i571 = data
  i570.name = i571[0]
  i570.bounciness = i571[1]
  i570.dynamicFriction = i571[2]
  i570.staticFriction = i571[3]
  i570.frictionCombine = i571[4]
  i570.bounceCombine = i571[5]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i573 = data
  i572.name = i573[0]
  i572.width = i573[1]
  i572.height = i573[2]
  i572.mipmapCount = i573[3]
  i572.anisoLevel = i573[4]
  i572.filterMode = i573[5]
  i572.hdr = !!i573[6]
  i572.format = i573[7]
  i572.wrapMode = i573[8]
  i572.alphaIsTransparency = !!i573[9]
  i572.alphaSource = i573[10]
  return i572
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i574 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i575 = data
  i574.useSafeMode = !!i575[0]
  i574.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i575[1], i574.safeModeOptions)
  i574.timeScale = i575[2]
  i574.useSmoothDeltaTime = !!i575[3]
  i574.maxSmoothUnscaledTime = i575[4]
  i574.rewindCallbackMode = i575[5]
  i574.showUnityEditorReport = !!i575[6]
  i574.logBehaviour = i575[7]
  i574.drawGizmos = !!i575[8]
  i574.defaultRecyclable = !!i575[9]
  i574.defaultAutoPlay = i575[10]
  i574.defaultUpdateType = i575[11]
  i574.defaultTimeScaleIndependent = !!i575[12]
  i574.defaultEaseType = i575[13]
  i574.defaultEaseOvershootOrAmplitude = i575[14]
  i574.defaultEasePeriod = i575[15]
  i574.defaultAutoKill = !!i575[16]
  i574.defaultLoopType = i575[17]
  i574.debugMode = !!i575[18]
  i574.debugStoreTargetId = !!i575[19]
  i574.showPreviewPanel = !!i575[20]
  i574.storeSettingsLocation = i575[21]
  i574.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i575[22], i574.modules)
  i574.showPlayingTweens = !!i575[23]
  i574.showPausedTweens = !!i575[24]
  return i574
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i576 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i577 = data
  i576.nestedTweenFailureBehaviour = i577[0]
  return i576
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i578 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i579 = data
  i578.showPanel = !!i579[0]
  i578.audioEnabled = !!i579[1]
  i578.physicsEnabled = !!i579[2]
  i578.physics2DEnabled = !!i579[3]
  i578.spriteEnabled = !!i579[4]
  i578.uiEnabled = !!i579[5]
  i578.textMeshProEnabled = !!i579[6]
  i578.tk2DEnabled = !!i579[7]
  i578.deAudioEnabled = !!i579[8]
  i578.deUnityExtendedEnabled = !!i579[9]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i581 = data
  i580.name = i581[0]
  i580.halfPrecision = !!i581[1]
  i580.vertexCount = i581[2]
  i580.aabb = i581[3]
  var i583 = i581[4]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( !!i583[i + 0] );
  }
  i580.streams = i582
  i580.vertices = i581[5]
  var i585 = i581[6]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i585[i + 0]) );
  }
  i580.subMeshes = i584
  var i587 = i581[7]
  var i586 = []
  for(var i = 0; i < i587.length; i += 16) {
    i586.push( new pc.Mat4().setData(i587[i + 0], i587[i + 1], i587[i + 2], i587[i + 3],  i587[i + 4], i587[i + 5], i587[i + 6], i587[i + 7],  i587[i + 8], i587[i + 9], i587[i + 10], i587[i + 11],  i587[i + 12], i587[i + 13], i587[i + 14], i587[i + 15]) );
  }
  i580.bindposes = i586
  var i589 = i581[8]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i589[i + 0]) );
  }
  i580.blendShapes = i588
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i595 = data
  i594.triangles = i595[0]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i601 = data
  i600.name = i601[0]
  var i603 = i601[1]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i603[i + 0]) );
  }
  i600.frames = i602
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i605 = data
  i604.position = new pc.Vec3( i605[0], i605[1], i605[2] )
  i604.scale = new pc.Vec3( i605[3], i605[4], i605[5] )
  i604.rotation = new pc.Quat(i605[6], i605[7], i605[8], i605[9])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i607 = data
  i606.enabled = !!i607[0]
  request.r(i607[1], i607[2], 0, i606, 'sharedMaterial')
  var i609 = i607[3]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i606.sharedMaterials = i608
  i606.receiveShadows = !!i607[4]
  i606.shadowCastingMode = i607[5]
  i606.sortingLayerID = i607[6]
  i606.sortingOrder = i607[7]
  i606.lightmapIndex = i607[8]
  i606.lightmapSceneIndex = i607[9]
  i606.lightmapScaleOffset = new pc.Vec4( i607[10], i607[11], i607[12], i607[13] )
  i606.lightProbeUsage = i607[14]
  i606.reflectionProbeUsage = i607[15]
  request.r(i607[16], i607[17], 0, i606, 'sharedMesh')
  var i611 = i607[18]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i606.bones = i610
  i606.updateWhenOffscreen = !!i607[19]
  i606.localBounds = i607[20]
  request.r(i607[21], i607[22], 0, i606, 'rootBone')
  var i613 = i607[23]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i613[i + 0]) );
  }
  i606.blendShapesWeights = i612
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i621 = data
  i620.weight = i621[0]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i623 = data
  i622.name = i623[0]
  i622.tag = i623[1]
  i622.enabled = !!i623[2]
  i622.isStatic = !!i623[3]
  i622.layer = i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i625 = data
  i624.pivot = new pc.Vec2( i625[0], i625[1] )
  i624.anchorMin = new pc.Vec2( i625[2], i625[3] )
  i624.anchorMax = new pc.Vec2( i625[4], i625[5] )
  i624.sizeDelta = new pc.Vec2( i625[6], i625[7] )
  i624.anchoredPosition3D = new pc.Vec3( i625[8], i625[9], i625[10] )
  i624.rotation = new pc.Quat(i625[11], i625[12], i625[13], i625[14])
  i624.scale = new pc.Vec3( i625[15], i625[16], i625[17] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i627 = data
  i626.cullTransparentMesh = !!i627[0]
  return i626
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Image' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_Sprite')
  i628.m_Type = i629[2]
  i628.m_PreserveAspect = !!i629[3]
  i628.m_FillCenter = !!i629[4]
  i628.m_FillMethod = i629[5]
  i628.m_FillAmount = i629[6]
  i628.m_FillClockwise = !!i629[7]
  i628.m_FillOrigin = i629[8]
  i628.m_UseSpriteMesh = !!i629[9]
  i628.m_PixelsPerUnitMultiplier = i629[10]
  request.r(i629[11], i629[12], 0, i628, 'm_Material')
  i628.m_Maskable = !!i629[13]
  i628.m_Color = new pc.Color(i629[14], i629[15], i629[16], i629[17])
  i628.m_RaycastTarget = !!i629[18]
  return i628
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i630 = root || request.c( 'VariableJoystick' )
  var i631 = data
  i630.Interactable = !!i631[0]
  request.r(i631[1], i631[2], 0, i630, 'background')
  request.r(i631[3], i631[4], 0, i630, 'handleRect')
  i630.moveThreshold = i631[5]
  i630.joystickType = i631[6]
  i630.handleRange = i631[7]
  i630.deadZone = i631[8]
  i630.axisOptions = i631[9]
  i630.snapX = !!i631[10]
  i630.snapY = !!i631[11]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'sharedMesh')
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'additionalVertexStreams')
  i634.enabled = !!i635[2]
  request.r(i635[3], i635[4], 0, i634, 'sharedMaterial')
  var i637 = i635[5]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i634.sharedMaterials = i636
  i634.receiveShadows = !!i635[6]
  i634.shadowCastingMode = i635[7]
  i634.sortingLayerID = i635[8]
  i634.sortingOrder = i635[9]
  i634.lightmapIndex = i635[10]
  i634.lightmapSceneIndex = i635[11]
  i634.lightmapScaleOffset = new pc.Vec4( i635[12], i635[13], i635[14], i635[15] )
  i634.lightProbeUsage = i635[16]
  i634.reflectionProbeUsage = i635[17]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i639 = data
  i638.center = new pc.Vec3( i639[0], i639[1], i639[2] )
  i638.size = new pc.Vec3( i639[3], i639[4], i639[5] )
  i638.enabled = !!i639[6]
  i638.isTrigger = !!i639[7]
  request.r(i639[8], i639[9], 0, i638, 'material')
  return i638
}

Deserializers["GameManager"] = function (request, data, root) {
  var i640 = root || request.c( 'GameManager' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'MainCamera')
  i640.LandscapeFov = i641[2]
  i640.PortraitFov = i641[3]
  i640.WheatCullDistance = i641[4]
  request.r(i641[5], i641[6], 0, i640, 'CountdownWidget')
  request.r(i641[7], i641[8], 0, i640, 'Joystick')
  request.r(i641[9], i641[10], 0, i640, 'JoystickTutorialButton')
  request.r(i641[11], i641[12], 0, i640, 'GasButton')
  request.r(i641[13], i641[14], 0, i640, 'TutorialWindow')
  request.r(i641[15], i641[16], 0, i640, 'MainBackroundImage')
  var i643 = i641[17]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.Opponents = i642
  request.r(i641[18], i641[19], 0, i640, 'PlayerCar')
  request.r(i641[20], i641[21], 0, i640, 'CarUserControl')
  i640.Position = i641[22]
  request.r(i641[23], i641[24], 0, i640, 'LastCheckpoint')
  i640._WheatCullDistance = i641[25]
  var i645 = i641[26]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i640._Wheat = i644
  return i640
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i648 = root || request.c( 'LunaUIFields' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'GasHintText')
  i648.GasHintString = i649[2]
  request.r(i649[3], i649[4], 0, i648, 'SteerHintText')
  i648.SteerHintString = i649[5]
  request.r(i649[6], i649[7], 0, i648, 'ObjectiveHintText')
  i648.ObjectiveHintString = i649[8]
  request.r(i649[9], i649[10], 0, i648, 'LevelFailedButtonText')
  i648.LevelFailedButtonString = i649[11]
  request.r(i649[12], i649[13], 0, i648, 'LevelCompleteButtonText')
  i648.LevelCompleteButtonString = i649[14]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i651 = data
  i650.enabled = !!i651[0]
  i650.isTrigger = !!i651[1]
  request.r(i651[2], i651[3], 0, i650, 'material')
  request.r(i651[4], i651[5], 0, i650, 'sharedMesh')
  i650.convex = !!i651[6]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.isTrigger = !!i653[1]
  request.r(i653[2], i653[3], 0, i652, 'material')
  i652.center = new pc.Vec3( i653[4], i653[5], i653[6] )
  i652.radius = i653[7]
  return i652
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i655 = data
  i654.m_MoveSpeed = i655[0]
  i654.m_TurnSpeed = i655[1]
  i654.m_RollSpeed = i655[2]
  i654.m_FollowVelocity = !!i655[3]
  i654.m_FollowTilt = !!i655[4]
  i654.m_SpinTurnLimit = i655[5]
  i654.m_TargetVelocityLowerLimit = i655[6]
  i654.m_SmoothTurnTime = i655[7]
  request.r(i655[8], i655[9], 0, i654, 'm_Target')
  i654.m_AutoTargetPlayer = !!i655[10]
  i654.m_UpdateType = i655[11]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i657 = data
  i656.enabled = !!i657[0]
  i656.aspect = i657[1]
  i656.orthographic = !!i657[2]
  i656.orthographicSize = i657[3]
  i656.backgroundColor = new pc.Color(i657[4], i657[5], i657[6], i657[7])
  i656.nearClipPlane = i657[8]
  i656.farClipPlane = i657[9]
  i656.fieldOfView = i657[10]
  i656.depth = i657[11]
  i656.clearFlags = i657[12]
  i656.cullingMask = i657[13]
  i656.rect = i657[14]
  request.r(i657[15], i657[16], 0, i656, 'targetTexture')
  return i656
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i658 = root || request.c( 'CameraFollower' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'Target')
  i658.PositionOffset = new pc.Vec3( i659[2], i659[3], i659[4] )
  i658.RotationOffset = new pc.Vec3( i659[5], i659[6], i659[7] )
  i658.CameraSpeed = i659[8]
  return i658
}

Deserializers["CarTrigger"] = function (request, data, root) {
  var i660 = root || request.c( 'CarTrigger' )
  var i661 = data
  i660.OnTriggerEnterEvent = request.d('UnityEngine.Events.UnityEvent', i661[0], i660.OnTriggerEnterEvent)
  i660.OnTriggerStayEvent = request.d('UnityEngine.Events.UnityEvent', i661[1], i660.OnTriggerStayEvent)
  i660.OnTriggerExitEvent = request.d('UnityEngine.Events.UnityEvent', i661[2], i660.OnTriggerExitEvent)
  return i660
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i663 = data
  i662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i663[0], i662.m_PersistentCalls)
  return i662
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i665 = data
  var i667 = i665[0]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('UnityEngine.Events.PersistentCall', i667[i + 0]));
  }
  i664.m_Calls = i666
  return i664
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_Target')
  i670.m_MethodName = i671[2]
  i670.m_Mode = i671[3]
  i670.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i671[4], i670.m_Arguments)
  i670.m_CallState = i671[5]
  return i670
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_ObjectArgument')
  i672.m_ObjectArgumentAssemblyTypeName = i673[2]
  i672.m_IntArgument = i673[3]
  i672.m_FloatArgument = i673[4]
  i672.m_StringArgument = i673[5]
  i672.m_BoolArgument = !!i673[6]
  return i672
}

Deserializers["Checkpoint"] = function (request, data, root) {
  var i674 = root || request.c( 'Checkpoint' )
  var i675 = data
  return i674
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i676 = root || request.c( 'FinishTrigger' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, '_MainScreen')
  request.r(i677[2], i677[3], 0, i676, '_WinScren')
  request.r(i677[4], i677[5], 0, i676, '_LossScreen')
  return i676
}

Deserializers["SWS.splineMove"] = function (request, data, root) {
  var i678 = root || request.c( 'SWS.splineMove' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'pathContainer')
  i678.onStart = !!i679[2]
  i678.moveToPath = !!i679[3]
  i678.reverse = !!i679[4]
  i678.startPoint = i679[5]
  i678.currentPoint = i679[6]
  i678.closeLoop = !!i679[7]
  i678.localType = i679[8]
  i678.lookAhead = i679[9]
  i678.sizeToAdd = i679[10]
  i678.timeValue = i679[11]
  i678.speed = i679[12]
  i678.animEaseType = new pc.AnimationCurve( { keys_flow: i679[13] } )
  i678.loopType = i679[14]
  var i681 = i679[15]
  var i680 = []
  for(var i = 0; i < i681.length; i += 3) {
    i680.push( new pc.Vec3( i681[i + 0], i681[i + 1], i681[i + 2] ) );
  }
  i678.waypoints = i680
  var i683 = i679[16]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.UnityEvent')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('UnityEngine.Events.UnityEvent', i683[i + 0]));
  }
  i678.events = i682
  i678.pathType = i679[17]
  i678.pathMode = i679[18]
  i678.easeType = i679[19]
  i678.lockPosition = i679[20]
  i678.lockRotation = i679[21]
  i678.waypointRotation = i679[22]
  request.r(i679[23], i679[24], 0, i678, 'rotationTarget')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i689 = data
  i688.mass = i689[0]
  i688.drag = i689[1]
  i688.angularDrag = i689[2]
  i688.useGravity = !!i689[3]
  i688.isKinematic = !!i689[4]
  i688.constraints = i689[5]
  i688.maxAngularVelocity = i689[6]
  i688.collisionDetectionMode = i689[7]
  i688.interpolation = i689[8]
  return i688
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i690 = root || request.c( 'RaceCar' )
  var i691 = data
  i690.Owner = i691[0]
  i690.Score = i691[1]
  i690.Wheat = i691[2]
  return i690
}

Deserializers["BotWheels"] = function (request, data, root) {
  var i692 = root || request.c( 'BotWheels' )
  var i693 = data
  i692.RotationSpeed = i693[0]
  i692.IsRotating = !!i693[1]
  var i695 = i693[2]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.Wheels = i694
  return i692
}

Deserializers["Bot"] = function (request, data, root) {
  var i698 = root || request.c( 'Bot' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'RaceCar')
  request.r(i699[2], i699[3], 0, i698, 'SplineMove')
  request.r(i699[4], i699[5], 0, i698, 'BotWheels')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'animatorController')
  i700.updateMode = i701[2]
  var i703 = i701[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.humanBones = i702
  i700.enabled = !!i701[4]
  return i700
}

Deserializers["CarController"] = function (request, data, root) {
  var i704 = root || request.c( 'CarController' )
  var i705 = data
  var i707 = i705[0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.m_WheelColliders = i706
  i704.TorqueMultiplier = i705[1]
  i704.m_CarDriveType = i705[2]
  var i709 = i705[3]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 2, i708, '')
  }
  i704.m_WheelMeshes = i708
  var i711 = i705[4]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i704.m_WheelEffects = i710
  i704.m_CentreOfMassOffset = new pc.Vec3( i705[5], i705[6], i705[7] )
  i704.m_MaximumSteerAngle = i705[8]
  i704.m_SteerHelper = i705[9]
  i704.m_TractionControl = i705[10]
  i704.m_FullTorqueOverAllWheels = i705[11]
  i704.m_ReverseTorque = i705[12]
  i704.m_MaxHandbrakeTorque = i705[13]
  i704.m_Downforce = i705[14]
  i704.m_SpeedType = i705[15]
  i704.m_Topspeed = i705[16]
  i704.m_RevRangeBoundary = i705[17]
  i704.m_SlipLimit = i705[18]
  i704.m_BrakeTorque = i705[19]
  i704.m_GearNum = i705[20]
  request.r(i705[21], i705[22], 0, i704, 'm_Rigidbody')
  return i704
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i716 = root || request.c( 'CarUserControl' )
  var i717 = data
  i716.CanMove = !!i717[0]
  request.r(i717[1], i717[2], 0, i716, '_Joystick')
  request.r(i717[3], i717[4], 0, i716, '_GasButton')
  return i716
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i719 = data
  i718.engineSoundStyle = i719[0]
  request.r(i719[1], i719[2], 0, i718, 'lowAccelClip')
  request.r(i719[3], i719[4], 0, i718, 'lowDecelClip')
  request.r(i719[5], i719[6], 0, i718, 'highAccelClip')
  request.r(i719[7], i719[8], 0, i718, 'highDecelClip')
  i718.pitchMultiplier = i719[9]
  i718.lowPitchMin = i719[10]
  i718.lowPitchMax = i719[11]
  i718.highPitchMultiplier = i719[12]
  i718.maxRolloffDistance = i719[13]
  i718.dopplerLevel = i719[14]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i721 = data
  i720.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i721[0], i720.main)
  i720.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i721[1], i720.colorBySpeed)
  i720.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i721[2], i720.colorOverLifetime)
  i720.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i721[3], i720.emission)
  i720.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i721[4], i720.rotationBySpeed)
  i720.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i721[5], i720.rotationOverLifetime)
  i720.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i721[6], i720.shape)
  i720.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i721[7], i720.sizeBySpeed)
  i720.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i721[8], i720.sizeOverLifetime)
  i720.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i721[9], i720.textureSheetAnimation)
  i720.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i721[10], i720.velocityOverLifetime)
  i720.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i721[11], i720.noise)
  i720.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i721[12], i720.inheritVelocity)
  i720.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i721[13], i720.forceOverLifetime)
  i720.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i721[14], i720.limitVelocityOverLifetime)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemMain()
  var i723 = data
  i722.duration = i723[0]
  i722.loop = !!i723[1]
  i722.prewarm = !!i723[2]
  i722.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[3], i722.startDelay)
  i722.startDelayMultiplier = i723[4]
  i722.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[5], i722.startLifetime)
  i722.startLifetimeMultiplier = i723[6]
  i722.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[7], i722.startSpeed)
  i722.startSpeedMultiplier = i723[8]
  i722.startSize3D = !!i723[9]
  i722.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[10], i722.startSize)
  i722.startSizeMultiplier = i723[11]
  i722.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[12], i722.startSizeX)
  i722.startSizeXMultiplier = i723[13]
  i722.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[14], i722.startSizeY)
  i722.startSizeYMultiplier = i723[15]
  i722.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[16], i722.startSizeZ)
  i722.startSizeZMultiplier = i723[17]
  i722.startRotation3D = !!i723[18]
  i722.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[19], i722.startRotation)
  i722.startRotationMultiplier = i723[20]
  i722.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[21], i722.startRotationX)
  i722.startRotationXMultiplier = i723[22]
  i722.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[23], i722.startRotationY)
  i722.startRotationYMultiplier = i723[24]
  i722.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[25], i722.startRotationZ)
  i722.startRotationZMultiplier = i723[26]
  i722.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i723[27], i722.startColor)
  i722.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[28], i722.gravityModifier)
  i722.gravityModifierMultiplier = i723[29]
  i722.simulationSpace = i723[30]
  request.r(i723[31], i723[32], 0, i722, 'customSimulationSpace')
  i722.simulationSpeed = i723[33]
  i722.useUnscaledTime = !!i723[34]
  i722.scalingMode = i723[35]
  i722.playOnAwake = !!i723[36]
  i722.maxParticles = i723[37]
  i722.emitterVelocityMode = i723[38]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i724 = root || new pc.MinMaxCurve()
  var i725 = data
  i724.m_Mode = i725[0]
  i724.m_CurveMin = new pc.AnimationCurve( { keys_flow: i725[1] } )
  i724.m_CurveMax = new pc.AnimationCurve( { keys_flow: i725[2] } )
  i724.m_CurveMultiplier = i725[3]
  i724.m_ConstantMin = i725[4]
  i724.m_ConstantMax = i725[5]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i726 = root || new pc.MinMaxGradient()
  var i727 = data
  i726.m_Mode = i727[0]
  i726.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i727[1], i726.m_GradientMin)
  i726.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i727[2], i726.m_GradientMax)
  i726.m_ColorMin = new pc.Color(i727[3], i727[4], i727[5], i727[6])
  i726.m_ColorMax = new pc.Color(i727[7], i727[8], i727[9], i727[10])
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i729 = data
  i728.mode = i729[0]
  var i731 = i729[1]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i731[i + 0]) );
  }
  i728.colorKeys = i730
  var i733 = i729[2]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i733[i + 0]) );
  }
  i728.alphaKeys = i732
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemColorBySpeed()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[1], i734.color)
  i734.range = new pc.Vec2( i735[2], i735[3] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i739 = data
  i738.color = new pc.Color(i739[0], i739[1], i739[2], i739[3])
  i738.time = i739[4]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i743 = data
  i742.alpha = i743[0]
  i742.time = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemColorOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i745[1], i744.color)
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemEmitter()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.rateOverTime)
  i746.rateOverTimeMultiplier = i747[2]
  i746.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.rateOverDistance)
  i746.rateOverDistanceMultiplier = i747[4]
  var i749 = i747[5]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i749[i + 0]) );
  }
  i746.bursts = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemBurst()
  var i753 = data
  i752.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[0], i752.count)
  i752.cycleCount = i753[1]
  i752.minCount = i753[2]
  i752.maxCount = i753[3]
  i752.repeatInterval = i753[4]
  i752.time = i753[5]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemRotationBySpeed()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.xMultiplier = i755[4]
  i754.yMultiplier = i755[5]
  i754.zMultiplier = i755[6]
  i754.separateAxes = !!i755[7]
  i754.range = new pc.Vec2( i755[8], i755[9] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemRotationOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.xMultiplier = i757[4]
  i756.yMultiplier = i757[5]
  i756.zMultiplier = i757[6]
  i756.separateAxes = !!i757[7]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemShape()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.shapeType = i759[1]
  i758.randomDirectionAmount = i759[2]
  i758.sphericalDirectionAmount = i759[3]
  i758.randomPositionAmount = i759[4]
  i758.alignToDirection = !!i759[5]
  i758.radius = i759[6]
  i758.radiusMode = i759[7]
  i758.radiusSpread = i759[8]
  i758.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.radiusSpeed)
  i758.radiusSpeedMultiplier = i759[10]
  i758.radiusThickness = i759[11]
  i758.angle = i759[12]
  i758.length = i759[13]
  i758.boxThickness = new pc.Vec3( i759[14], i759[15], i759[16] )
  i758.meshShapeType = i759[17]
  request.r(i759[18], i759[19], 0, i758, 'mesh')
  request.r(i759[20], i759[21], 0, i758, 'meshRenderer')
  request.r(i759[22], i759[23], 0, i758, 'skinnedMeshRenderer')
  i758.useMeshMaterialIndex = !!i759[24]
  i758.meshMaterialIndex = i759[25]
  i758.useMeshColors = !!i759[26]
  i758.normalOffset = i759[27]
  i758.arc = i759[28]
  i758.arcMode = i759[29]
  i758.arcSpread = i759[30]
  i758.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[31], i758.arcSpeed)
  i758.arcSpeedMultiplier = i759[32]
  i758.donutRadius = i759[33]
  i758.position = new pc.Vec3( i759[34], i759[35], i759[36] )
  i758.rotation = new pc.Vec3( i759[37], i759[38], i759[39] )
  i758.scale = new pc.Vec3( i759[40], i759[41], i759[42] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemSizeBySpeed()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.size)
  i760.sizeMultiplier = i761[2]
  i760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.x)
  i760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.y)
  i760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[5], i760.z)
  i760.xMultiplier = i761[6]
  i760.yMultiplier = i761[7]
  i760.zMultiplier = i761[8]
  i760.separateAxes = !!i761[9]
  i760.range = new pc.Vec2( i761[10], i761[11] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemSizeOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.size)
  i762.sizeMultiplier = i763[2]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[5], i762.z)
  i762.xMultiplier = i763[6]
  i762.yMultiplier = i763[7]
  i762.zMultiplier = i763[8]
  i762.separateAxes = !!i763[9]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.mode = i765[1]
  i764.animation = i765[2]
  i764.numTilesX = i765[3]
  i764.numTilesY = i765[4]
  i764.useRandomRow = !!i765[5]
  i764.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[6], i764.frameOverTime)
  i764.frameOverTimeMultiplier = i765[7]
  i764.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[8], i764.startFrame)
  i764.startFrameMultiplier = i765[9]
  i764.cycleCount = i765[10]
  i764.rowIndex = i765[11]
  i764.flipU = i765[12]
  i764.flipV = i765[13]
  i764.spriteCount = i765[14]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.xMultiplier = i767[4]
  i766.yMultiplier = i767[5]
  i766.zMultiplier = i767[6]
  i766.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.speedModifier)
  i766.speedModifierMultiplier = i767[8]
  i766.space = i767[9]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemNoise()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.separateAxes = !!i769[1]
  i768.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.strengthX)
  i768.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.strengthY)
  i768.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.strengthZ)
  i768.strengthXMultiplier = i769[5]
  i768.strengthYMultiplier = i769[6]
  i768.strengthZMultiplier = i769[7]
  i768.frequency = i769[8]
  i768.damping = !!i769[9]
  i768.octaveCount = i769[10]
  i768.octaveMultiplier = i769[11]
  i768.octaveScale = i769[12]
  i768.quality = i769[13]
  i768.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[14], i768.scrollSpeed)
  i768.scrollSpeedMultiplier = i769[15]
  i768.remapEnabled = !!i769[16]
  i768.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[17], i768.remapX)
  i768.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[18], i768.remapY)
  i768.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[19], i768.remapZ)
  i768.remapXMultiplier = i769[20]
  i768.remapYMultiplier = i769[21]
  i768.remapZMultiplier = i769[22]
  i768.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[23], i768.positionAmount)
  i768.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[24], i768.rotationAmount)
  i768.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[25], i768.sizeAmount)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemInheritVelocity()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.mode = i771[1]
  i770.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.curve)
  i770.curveMultiplier = i771[3]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemForceOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.xMultiplier = i773[4]
  i772.yMultiplier = i773[5]
  i772.zMultiplier = i773[6]
  i772.space = i773[7]
  i772.randomized = !!i773[8]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.limit)
  i774.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.limitX)
  i774.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.limitY)
  i774.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[4], i774.limitZ)
  i774.limitMultiplier = i775[5]
  i774.limitXMultiplier = i775[6]
  i774.limitYMultiplier = i775[7]
  i774.limitZMultiplier = i775[8]
  i774.dampen = i775[9]
  i774.separateAxes = !!i775[10]
  i774.space = i775[11]
  i774.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[12], i774.drag)
  i774.dragMultiplier = i775[13]
  i774.multiplyDragByParticleSize = !!i775[14]
  i774.multiplyDragByParticleVelocity = !!i775[15]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i777 = data
  i776.enabled = !!i777[0]
  request.r(i777[1], i777[2], 0, i776, 'sharedMaterial')
  var i779 = i777[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sharedMaterials = i778
  i776.receiveShadows = !!i777[4]
  i776.shadowCastingMode = i777[5]
  i776.sortingLayerID = i777[6]
  i776.sortingOrder = i777[7]
  i776.lightmapIndex = i777[8]
  i776.lightmapSceneIndex = i777[9]
  i776.lightmapScaleOffset = new pc.Vec4( i777[10], i777[11], i777[12], i777[13] )
  i776.lightProbeUsage = i777[14]
  i776.reflectionProbeUsage = i777[15]
  request.r(i777[16], i777[17], 0, i776, 'mesh')
  i776.meshCount = i777[18]
  i776.activeVertexStreamsCount = i777[19]
  i776.alignment = i777[20]
  i776.renderMode = i777[21]
  i776.sortMode = i777[22]
  i776.lengthScale = i777[23]
  i776.velocityScale = i777[24]
  i776.cameraVelocityScale = i777[25]
  i776.normalDirection = i777[26]
  i776.sortingFudge = i777[27]
  i776.minParticleSize = i777[28]
  i776.maxParticleSize = i777[29]
  i776.pivot = new pc.Vec3( i777[30], i777[31], i777[32] )
  request.r(i777[33], i777[34], 0, i776, 'trailMaterial')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.WheelCollider"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.WheelCollider' )
  var i781 = data
  i780.center = new pc.Vec3( i781[0], i781[1], i781[2] )
  i780.radius = i781[3]
  i780.mass = i781[4]
  i780.suspensionDistance = i781[5]
  i780.forceAppPointDistance = i781[6]
  i780.suspensionSpring = request.d('UnityEngine.JointSpring', i781[7], i780.suspensionSpring)
  i780.forwardFriction = request.d('UnityEngine.WheelFrictionCurve', i781[8], i780.forwardFriction)
  i780.sidewaysFriction = request.d('UnityEngine.WheelFrictionCurve', i781[9], i780.sidewaysFriction)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'clip')
  i782.playOnAwake = !!i783[2]
  i782.loop = !!i783[3]
  i782.enabled = !!i783[4]
  return i782
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i784 = root || request.c( 'WheelEffects' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'SkidTrailPrefab')
  request.r(i785[2], i785[3], 0, i784, 'skidParticles')
  return i784
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i786 = root || request.c( 'BlobShadowMovement' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'Target')
  i786.Offset = new pc.Vec3( i787[2], i787[3], i787[4] )
  return i786
}

Deserializers["SWS.PathManager"] = function (request, data, root) {
  var i788 = root || request.c( 'SWS.PathManager' )
  var i789 = data
  var i791 = i789[0]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.waypoints = i790
  i788.drawCurved = !!i789[1]
  i788.drawDirection = !!i789[2]
  i788.color1 = new pc.Color(i789[3], i789[4], i789[5], i789[6])
  i788.color2 = new pc.Color(i789[7], i789[8], i789[9], i789[10])
  i788.size = new pc.Vec3( i789[11], i789[12], i789[13] )
  i788.radius = i789[14]
  i788.skipCustomNames = !!i789[15]
  request.r(i789[16], i789[17], 0, i788, 'replaceObject')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i793 = data
  i792.enabled = !!i793[0]
  i792.type = i793[1]
  i792.color = new pc.Color(i793[2], i793[3], i793[4], i793[5])
  i792.cullingMask = i793[6]
  i792.intensity = i793[7]
  i792.range = i793[8]
  i792.spotAngle = i793[9]
  i792.shadows = i793[10]
  i792.shadowNormalBias = i793[11]
  i792.shadowBias = i793[12]
  i792.shadowStrength = i793[13]
  i792.lightmapBakeType = i793[14]
  i792.renderMode = i793[15]
  request.r(i793[16], i793[17], 0, i792, 'cookie')
  i792.cookieSize = i793[18]
  return i792
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'm_FirstSelected')
  i794.m_sendNavigationEvents = !!i795[2]
  i794.m_DragThreshold = i795[3]
  return i794
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i797 = data
  i796.m_HorizontalAxis = i797[0]
  i796.m_VerticalAxis = i797[1]
  i796.m_SubmitButton = i797[2]
  i796.m_CancelButton = i797[3]
  i796.m_InputActionsPerSecond = i797[4]
  i796.m_RepeatDelay = i797[5]
  i796.m_ForceModuleActive = !!i797[6]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.planeDistance = i799[1]
  i798.referencePixelsPerUnit = i799[2]
  i798.renderMode = i799[3]
  i798.renderOrder = i799[4]
  i798.sortingLayerName = i799[5]
  i798.sortingOrder = i799[6]
  i798.scaleFactor = i799[7]
  request.r(i799[8], i799[9], 0, i798, 'worldCamera')
  i798.overrideSorting = !!i799[10]
  i798.pixelPerfect = !!i799[11]
  i798.targetDisplay = i799[12]
  i798.overridePixelPerfect = !!i799[13]
  return i798
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i801 = data
  i800.m_UiScaleMode = i801[0]
  i800.m_ReferencePixelsPerUnit = i801[1]
  i800.m_ScaleFactor = i801[2]
  i800.m_ReferenceResolution = new pc.Vec2( i801[3], i801[4] )
  i800.m_ScreenMatchMode = i801[5]
  i800.m_MatchWidthOrHeight = i801[6]
  i800.m_PhysicalUnit = i801[7]
  i800.m_FallbackScreenDPI = i801[8]
  i800.m_DefaultSpriteDPI = i801[9]
  i800.m_DynamicPixelsPerUnit = i801[10]
  return i800
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i803 = data
  i802.m_IgnoreReversedGraphics = !!i803[0]
  i802.m_BlockingObjects = i803[1]
  i802.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i803[2] )
  return i802
}

Deserializers["Countdown"] = function (request, data, root) {
  var i804 = root || request.c( 'Countdown' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'CountdownText')
  request.r(i805[2], i805[3], 0, i804, 'Go_Image')
  request.r(i805[4], i805[5], 0, i804, 'Outline')
  request.r(i805[6], i805[7], 0, i804, 'MainWindow')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i807 = data
  i806.m_Alpha = i807[0]
  i806.m_Interactable = !!i807[1]
  i806.m_BlocksRaycasts = !!i807[2]
  i806.m_IgnoreParentGroups = !!i807[3]
  i806.enabled = !!i807[4]
  return i806
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.Text' )
  var i809 = data
  i808.m_FontData = request.d('UnityEngine.UI.FontData', i809[0], i808.m_FontData)
  i808.m_Text = i809[1]
  request.r(i809[2], i809[3], 0, i808, 'm_Material')
  i808.m_Maskable = !!i809[4]
  i808.m_Color = new pc.Color(i809[5], i809[6], i809[7], i809[8])
  i808.m_RaycastTarget = !!i809[9]
  return i808
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.FontData' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Font')
  i810.m_FontSize = i811[2]
  i810.m_FontStyle = i811[3]
  i810.m_BestFit = !!i811[4]
  i810.m_MinSize = i811[5]
  i810.m_MaxSize = i811[6]
  i810.m_Alignment = i811[7]
  i810.m_AlignByGeometry = !!i811[8]
  i810.m_RichText = !!i811[9]
  i810.m_HorizontalOverflow = i811[10]
  i810.m_VerticalOverflow = i811[11]
  i810.m_LineSpacing = i811[12]
  return i810
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.Outline' )
  var i813 = data
  i812.m_EffectColor = new pc.Color(i813[0], i813[1], i813[2], i813[3])
  i812.m_EffectDistance = new pc.Vec2( i813[4], i813[5] )
  i812.m_UseGraphicAlpha = !!i813[6]
  return i812
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i814 = root || request.c( 'WinScreenWidget' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'RaceCar')
  request.r(i815[2], i815[3], 0, i814, 'WheatText')
  i814.WheatMultiplier = i815[4]
  return i814
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Button' )
  var i817 = data
  i816.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i817[0], i816.m_OnClick)
  i816.m_Navigation = request.d('UnityEngine.UI.Navigation', i817[1], i816.m_Navigation)
  i816.m_Transition = i817[2]
  i816.m_Colors = request.d('UnityEngine.UI.ColorBlock', i817[3], i816.m_Colors)
  i816.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i817[4], i816.m_SpriteState)
  i816.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i817[5], i816.m_AnimationTriggers)
  i816.m_Interactable = !!i817[6]
  request.r(i817[7], i817[8], 0, i816, 'm_TargetGraphic')
  return i816
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i819 = data
  i818.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i819[0], i818.m_PersistentCalls)
  return i818
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i821 = data
  i820.m_Mode = i821[0]
  request.r(i821[1], i821[2], 0, i820, 'm_SelectOnUp')
  request.r(i821[3], i821[4], 0, i820, 'm_SelectOnDown')
  request.r(i821[5], i821[6], 0, i820, 'm_SelectOnLeft')
  request.r(i821[7], i821[8], 0, i820, 'm_SelectOnRight')
  return i820
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i823 = data
  i822.m_NormalColor = new pc.Color(i823[0], i823[1], i823[2], i823[3])
  i822.m_HighlightedColor = new pc.Color(i823[4], i823[5], i823[6], i823[7])
  i822.m_PressedColor = new pc.Color(i823[8], i823[9], i823[10], i823[11])
  i822.m_SelectedColor = new pc.Color(i823[12], i823[13], i823[14], i823[15])
  i822.m_DisabledColor = new pc.Color(i823[16], i823[17], i823[18], i823[19])
  i822.m_ColorMultiplier = i823[20]
  i822.m_FadeDuration = i823[21]
  return i822
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_HighlightedSprite')
  request.r(i825[2], i825[3], 0, i824, 'm_PressedSprite')
  request.r(i825[4], i825[5], 0, i824, 'm_SelectedSprite')
  request.r(i825[6], i825[7], 0, i824, 'm_DisabledSprite')
  return i824
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i827 = data
  i826.m_NormalTrigger = i827[0]
  i826.m_HighlightedTrigger = i827[1]
  i826.m_PressedTrigger = i827[2]
  i826.m_SelectedTrigger = i827[3]
  i826.m_DisabledTrigger = i827[4]
  return i826
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i828 = root || request.c( 'EndGameButton' )
  var i829 = data
  return i828
}

Deserializers["PositionWidget"] = function (request, data, root) {
  var i830 = root || request.c( 'PositionWidget' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'GameManager')
  request.r(i831[2], i831[3], 0, i830, 'Image')
  var i833 = i831[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.Numbers = i832
  return i830
}

Deserializers["ButtonInput"] = function (request, data, root) {
  var i836 = root || request.c( 'ButtonInput' )
  var i837 = data
  i836.IsInteractable = !!i837[0]
  return i836
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.Slider' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_FillRect')
  request.r(i839[2], i839[3], 0, i838, 'm_HandleRect')
  i838.m_Direction = i839[4]
  i838.m_MinValue = i839[5]
  i838.m_MaxValue = i839[6]
  i838.m_WholeNumbers = !!i839[7]
  i838.m_Value = i839[8]
  i838.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i839[9], i838.m_OnValueChanged)
  i838.m_Navigation = request.d('UnityEngine.UI.Navigation', i839[10], i838.m_Navigation)
  i838.m_Transition = i839[11]
  i838.m_Colors = request.d('UnityEngine.UI.ColorBlock', i839[12], i838.m_Colors)
  i838.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i839[13], i838.m_SpriteState)
  i838.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i839[14], i838.m_AnimationTriggers)
  i838.m_Interactable = !!i839[15]
  request.r(i839[16], i839[17], 0, i838, 'm_TargetGraphic')
  return i838
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i841 = data
  i840.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i841[0], i840.m_PersistentCalls)
  return i840
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i842 = root || request.c( 'WheatSliderWidget' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'Slider')
  request.r(i843[2], i843[3], 0, i842, 'RaceCar')
  request.r(i843[4], i843[5], 0, i842, 'BarIconImage')
  request.r(i843[6], i843[7], 0, i842, 'WheatImage')
  i842.MaxWheat = i843[8]
  return i842
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i844 = root || request.c( 'TimeSinceStartup' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'Text')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i847 = data
  i846.name = i847[0]
  i846.atlasId = i847[1]
  i846.mipmapCount = i847[2]
  i846.hdr = !!i847[3]
  i846.size = i847[4]
  i846.anisoLevel = i847[5]
  i846.filterMode = i847[6]
  i846.wrapMode = i847[7]
  var i849 = i847[8]
  var i848 = []
  for(var i = 0; i < i849.length; i += 4) {
    i848.push( UnityEngine.Rect.MinMaxRect(i849[i + 0], i849[i + 1], i849[i + 2], i849[i + 3]) );
  }
  i846.rects = i848
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i853 = data
  i852.name = i853[0]
  i852.index = i853[1]
  i852.startup = !!i853[2]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i855 = data
  i854.ambientIntensity = i855[0]
  i854.reflectionIntensity = i855[1]
  i854.ambientMode = i855[2]
  i854.ambientLight = new pc.Color(i855[3], i855[4], i855[5], i855[6])
  i854.ambientSkyColor = new pc.Color(i855[7], i855[8], i855[9], i855[10])
  i854.ambientGroundColor = new pc.Color(i855[11], i855[12], i855[13], i855[14])
  i854.ambientEquatorColor = new pc.Color(i855[15], i855[16], i855[17], i855[18])
  i854.fogColor = new pc.Color(i855[19], i855[20], i855[21], i855[22])
  i854.fogEndDistance = i855[23]
  i854.fogStartDistance = i855[24]
  i854.fogDensity = i855[25]
  i854.fog = !!i855[26]
  request.r(i855[27], i855[28], 0, i854, 'skybox')
  i854.fogMode = i855[29]
  var i857 = i855[30]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i857[i + 0]) );
  }
  i854.lightmaps = i856
  i854.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i855[31], i854.lightProbes)
  i854.lightmapsMode = i855[32]
  i854.environmentLightingMode = i855[33]
  i854.ambientProbe = new pc.SphericalHarmonicsL2(i855[34])
  request.r(i855[35], i855[36], 0, i854, 'customReflection')
  request.r(i855[37], i855[38], 0, i854, 'defaultReflection')
  i854.defaultReflectionMode = i855[39]
  i854.defaultReflectionResolution = i855[40]
  i854.sunLightObjectId = i855[41]
  i854.pixelLightCount = i855[42]
  i854.defaultReflectionHDR = !!i855[43]
  i854.hasLightDataAsset = !!i855[44]
  i854.hasManualGenerate = !!i855[45]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'lightmapColor')
  request.r(i861[2], i861[3], 0, i860, 'lightmapDirection')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i862 = root || new UnityEngine.LightProbes()
  var i863 = data
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i869 = data
  i868.name = i869[0]
  var i871 = i869[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i871[i + 0]) );
  }
  i868.passes = i870
  var i873 = i869[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i873[i + 0]) );
  }
  i868.defaultParameterValues = i872
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i876 = root || new pc.UnityShaderPass()
  var i877 = data
  i876.passType = i877[0]
  i876.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[1], i876.zTest)
  i876.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[2], i876.zWrite)
  i876.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[3], i876.culling)
  i876.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i877[4], i876.blending)
  i876.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i877[5], i876.alphaBlending)
  i876.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[6], i876.colorWriteMask)
  i876.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[7], i876.offsetUnits)
  i876.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[8], i876.offsetFactor)
  i876.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[9], i876.stencilRef)
  i876.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[10], i876.stencilReadMask)
  i876.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[11], i876.stencilWriteMask)
  i876.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[12], i876.stencilOp)
  i876.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[13], i876.stencilOpFront)
  i876.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[14], i876.stencilOpBack)
  var i879 = i877[15]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i879[i + 0]) );
  }
  i876.tags = i878
  var i881 = i877[16]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i881[i + 0]) );
  }
  i876.variants = i880
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i883 = data
  i882.val = i883[0]
  i882.name = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i885 = data
  i884.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[0], i884.src)
  i884.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[1], i884.dst)
  i884.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[2], i884.op)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i887 = data
  i886.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[0], i886.pass)
  i886.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[1], i886.fail)
  i886.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[2], i886.zFail)
  i886.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i887[3], i886.comp)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i891 = data
  i890.name = i891[0]
  i890.value = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i894.keywords = i896
  i894.vertexProgram = i895[1]
  i894.fragmentProgram = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i903 = data
  i902.name = i903[0]
  i902.type = i903[1]
  i902.value = new pc.Vec4( i903[2], i903[3], i903[4], i903[5] )
  i902.textureValue = i903[6]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i905 = data
  i904.name = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'texture')
  i904.aabb = i905[3]
  i904.vertices = i905[4]
  i904.triangles = i905[5]
  i904.textureRect = UnityEngine.Rect.MinMaxRect(i905[6], i905[7], i905[8], i905[9])
  i904.packedRect = UnityEngine.Rect.MinMaxRect(i905[10], i905[11], i905[12], i905[13])
  i904.border = new pc.Vec4( i905[14], i905[15], i905[16], i905[17] )
  i904.transparency = i905[18]
  i904.bounds = i905[19]
  i904.pixelsPerUnit = i905[20]
  i904.textureWidth = i905[21]
  i904.textureHeight = i905[22]
  i904.nativeSize = new pc.Vec2( i905[23], i905[24] )
  i904.pivot = new pc.Vec2( i905[25], i905[26] )
  i904.textureRectOffset = new pc.Vec2( i905[27], i905[28] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i907 = data
  i906.name = i907[0]
  i906.wrapMode = i907[1]
  i906.isLooping = !!i907[2]
  i906.length = i907[3]
  var i909 = i907[4]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i909[i + 0]) );
  }
  i906.curves = i908
  var i911 = i907[5]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i911[i + 0]) );
  }
  i906.events = i910
  i906.halfPrecision = !!i907[6]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i915 = data
  i914.path = i915[0]
  i914.componentType = i915[1]
  i914.property = i915[2]
  i914.keys = i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i917[i + 0]) );
  }
  i914.objectReferenceKeys = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i921 = data
  i920.time = i921[0]
  request.r(i921[1], i921[2], 0, i920, 'value')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i925 = data
  i924.functionName = i925[0]
  i924.floatParameter = i925[1]
  i924.intParameter = i925[2]
  i924.stringParameter = i925[3]
  request.r(i925[4], i925[5], 0, i924, 'objectReferenceParameter')
  i924.time = i925[6]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i927 = data
  i926.name = i927[0]
  i926.ascent = i927[1]
  i926.lineHeight = i927[2]
  i926.fontSize = i927[3]
  var i929 = i927[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i929[i + 0]) );
  }
  i926.characterInfo = i928
  request.r(i927[5], i927[6], 0, i926, 'texture')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i933 = data
  i932.index = i933[0]
  i932.advance = i933[1]
  i932.bearing = i933[2]
  i932.glyphWidth = i933[3]
  i932.glyphHeight = i933[4]
  i932.minX = i933[5]
  i932.maxX = i933[6]
  i932.minY = i933[7]
  i932.maxY = i933[8]
  i932.uvBottomLeftX = i933[9]
  i932.uvBottomLeftY = i933[10]
  i932.uvBottomRightX = i933[11]
  i932.uvBottomRightY = i933[12]
  i932.uvTopLeftX = i933[13]
  i932.uvTopLeftY = i933[14]
  i932.uvTopRightX = i933[15]
  i932.uvTopRightY = i933[16]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i935 = data
  i934.name = i935[0]
  var i937 = i935[1]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i937[i + 0]) );
  }
  i934.states = i936
  var i939 = i935[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i939[i + 0]) );
  }
  i934.layers = i938
  var i941 = i935[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i941[i + 0]) );
  }
  i934.parameters = i940
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i945 = data
  i944.cycleOffset = i945[0]
  i944.cycleOffsetParameter = i945[1]
  i944.cycleOffsetParameterActive = !!i945[2]
  i944.mirror = !!i945[3]
  i944.mirrorParameter = i945[4]
  i944.mirrorParameterActive = !!i945[5]
  i944.motionId = i945[6]
  i944.nameHash = i945[7]
  i944.fullPathHash = i945[8]
  i944.speed = i945[9]
  i944.speedParameter = i945[10]
  i944.speedParameterActive = !!i945[11]
  i944.tag = i945[12]
  i944.name = i945[13]
  i944.writeDefaultValues = !!i945[14]
  var i947 = i945[15]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i947[i + 0]) );
  }
  i944.transitions = i946
  var i949 = i945[16]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i944.behaviours = i948
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i953 = data
  i952.fullPath = i953[0]
  i952.canTransitionToSelf = !!i953[1]
  i952.duration = i953[2]
  i952.exitTime = i953[3]
  i952.hasExitTime = !!i953[4]
  i952.hasFixedDuration = !!i953[5]
  i952.interruptionSource = i953[6]
  i952.offset = i953[7]
  i952.orderedInterruption = !!i953[8]
  i952.destinationStateNameHash = i953[9]
  i952.destinationStateMachineId = i953[10]
  i952.isExit = !!i953[11]
  i952.mute = !!i953[12]
  i952.solo = !!i953[13]
  var i955 = i953[14]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i955[i + 0]) );
  }
  i952.conditions = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i961 = data
  i960.blendingMode = i961[0]
  i960.defaultWeight = i961[1]
  i960.name = i961[2]
  i960.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i961[3], i960.stateMachine)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i963 = data
  i962.id = i963[0]
  i962.defaultStateNameHash = i963[1]
  var i965 = i963[2]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i965[i + 0]) );
  }
  i962.entryTransitions = i964
  var i967 = i963[3]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i967[i + 0]) );
  }
  i962.anyStateTransitions = i966
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i971 = data
  i970.destinationStateNameHash = i971[0]
  i970.destinationStateMachineId = i971[1]
  i970.isExit = !!i971[2]
  i970.mute = !!i971[3]
  i970.solo = !!i971[4]
  var i973 = i971[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i973[i + 0]) );
  }
  i970.conditions = i972
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i977 = data
  i976.defaultBool = !!i977[0]
  i976.defaultFloat = i977[1]
  i976.defaultInt = i977[2]
  i976.name = i977[3]
  i976.nameHash = i977[4]
  i976.type = i977[5]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i981[i + 0]) );
  }
  i978.files = i980
  i978.componentToPrefabIds = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i985 = data
  i984.path = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'unityObject')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i989[i + 0]) );
  }
  i986.scriptsExecutionOrder = i988
  var i991 = i987[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i991[i + 0]) );
  }
  i986.sortingLayers = i990
  var i993 = i987[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i993[i + 0]) );
  }
  i986.cullingLayers = i992
  i986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i987[3], i986.timeSettings)
  i986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i987[4], i986.physicsSettings)
  i986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i987[5], i986.physics2DSettings)
  i986.removeShadows = !!i987[6]
  i986.autoInstantiatePrefabs = !!i987[7]
  i986.enableAutoInstancing = !!i987[8]
  i986.lightmapEncodingQuality = i987[9]
  i986.desiredColorSpace = i987[10]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i997 = data
  i996.name = i997[0]
  i996.value = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.name = i1001[1]
  i1000.value = i1001[2]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1005 = data
  i1004.id = i1005[0]
  i1004.name = i1005[1]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1007 = data
  i1006.fixedDeltaTime = i1007[0]
  i1006.maximumDeltaTime = i1007[1]
  i1006.timeScale = i1007[2]
  i1006.maximumParticleTimestep = i1007[3]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1009 = data
  i1008.gravity = new pc.Vec3( i1009[0], i1009[1], i1009[2] )
  i1008.defaultSolverIterations = i1009[3]
  i1008.autoSyncTransforms = !!i1009[4]
  i1008.autoSimulation = !!i1009[5]
  var i1011 = i1009[6]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1011[i + 0]) );
  }
  i1008.collisionMatrix = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.layerId = i1015[1]
  i1014.otherLayerId = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'material')
  i1016.gravity = new pc.Vec2( i1017[2], i1017[3] )
  i1016.positionIterations = i1017[4]
  i1016.velocityIterations = i1017[5]
  i1016.velocityThreshold = i1017[6]
  i1016.maxLinearCorrection = i1017[7]
  i1016.maxAngularCorrection = i1017[8]
  i1016.maxTranslationSpeed = i1017[9]
  i1016.maxRotationSpeed = i1017[10]
  i1016.timeToSleep = i1017[11]
  i1016.linearSleepTolerance = i1017[12]
  i1016.angularSleepTolerance = i1017[13]
  i1016.defaultContactOffset = i1017[14]
  i1016.autoSimulation = !!i1017[15]
  i1016.queriesHitTriggers = !!i1017[16]
  i1016.queriesStartInColliders = !!i1017[17]
  i1016.callbacksOnDisable = !!i1017[18]
  i1016.reuseCollisionCallbacks = !!i1017[19]
  i1016.autoSyncTransforms = !!i1017[20]
  var i1019 = i1017[21]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1019[i + 0]) );
  }
  i1016.collisionMatrix = i1018
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1023 = data
  i1022.enabled = !!i1023[0]
  i1022.layerId = i1023[1]
  i1022.otherLayerId = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1027 = data
  i1026.weight = i1027[0]
  i1026.vertices = i1027[1]
  i1026.normals = i1027[2]
  i1026.tangents = i1027[3]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1031 = data
  i1030.mode = i1031[0]
  i1030.parameter = i1031[1]
  i1030.threshold = i1031[2]
  return i1030
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.WheelCollider":{"center":0,"radius":3,"mass":4,"suspensionDistance":5,"forceAppPointDistance":6,"suspensionSpring":7,"forwardFriction":8,"sidewaysFriction":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"lineHeight":2,"fontSize":3,"characterInfo":4,"texture":5},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[4],"76":[17],"77":[38],"78":[38],"79":[38],"80":[38],"81":[38],"82":[38],"83":[38],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[17],"99":[14],"100":[101],"102":[101],"53":[7],"19":[7],"61":[60],"23":[41],"43":[47],"44":[41],"103":[104],"105":[7],"106":[8,7],"55":[53],"10":[8,7],"107":[7],"54":[53],"108":[7],"109":[7],"110":[7],"111":[7],"112":[7],"113":[7],"114":[7],"115":[7],"116":[8,7],"117":[8,7],"118":[7],"119":[7],"120":[7],"63":[7],"25":[8,7],"121":[7],"122":[51],"123":[51],"52":[51],"124":[51],"125":[17],"126":[17],"127":[7],"128":[8,7],"129":[14],"130":[8,7],"131":[8,7],"132":[14,8,7],"133":[7,8],"134":[7]}

Deserializers.types = ["UnityEngine.Shader","DG.Tweening.Core.DOTweenSettings","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","VariableJoystick","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","GameManager","UnityEngine.Camera","Countdown","ButtonInput","UnityEngine.CanvasGroup","Bot","RaceCar","CarUserControl","LunaUIFields","UnityEngine.UI.Text","UnityEngine.MeshCollider","UnityEngine.SphereCollider","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","CarTrigger","UnityEngine.GameObject","Checkpoint","FinishTrigger","SWS.splineMove","SWS.PathManager","BotWheels","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","CarController","UnityEngine.WheelCollider","WheelEffects","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","BlobShadowMovement","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.UI.Outline","WinScreenWidget","UnityEngine.UI.Button","EndGameButton","PositionWidget","UnityEngine.UI.Slider","WheatSliderWidget","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.UIElements.StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

