# `globalClusterConfig` Submodule <a name="`globalClusterConfig` Submodule" id="@cdktf/provider-mongodbatlas.globalClusterConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalClusterConfig <a name="GlobalClusterConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config mongodbatlas_global_cluster_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfig;

GlobalClusterConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .customZoneMappings(IResolvable)
//  .customZoneMappings(java.util.List<GlobalClusterConfigCustomZoneMappings>)
//  .id(java.lang.String)
//  .managedNamespaces(IResolvable)
//  .managedNamespaces(java.util.List<GlobalClusterConfigManagedNamespaces>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.customZoneMappings">customZoneMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>></code> | custom_zone_mappings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.managedNamespaces">managedNamespaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>></code> | managed_namespaces block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}.

---

##### `customZoneMappings`<sup>Optional</sup> <a name="customZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.customZoneMappings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>>

custom_zone_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#custom_zone_mappings GlobalClusterConfig#custom_zone_mappings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedNamespaces`<sup>Optional</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.managedNamespaces"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>>

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#managed_namespaces GlobalClusterConfig#managed_namespaces}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings">putCustomZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces">putManagedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings">resetCustomZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces">resetManagedNamespaces</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomZoneMappings` <a name="putCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings"></a>

```java
public void putCustomZoneMappings(IResolvable OR java.util.List<GlobalClusterConfigCustomZoneMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>>

---

##### `putManagedNamespaces` <a name="putManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces"></a>

```java
public void putManagedNamespaces(IResolvable OR java.util.List<GlobalClusterConfigManagedNamespaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>>

---

##### `resetCustomZoneMappings` <a name="resetCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings"></a>

```java
public void resetCustomZoneMappings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId"></a>

```java
public void resetId()
```

##### `resetManagedNamespaces` <a name="resetManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces"></a>

```java
public void resetManagedNamespaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfig;

GlobalClusterConfig.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfig;

GlobalClusterConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfig;

GlobalClusterConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfig;

GlobalClusterConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlobalClusterConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlobalClusterConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlobalClusterConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GlobalClusterConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping">customZoneMapping</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings">customZoneMappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingZoneId">customZoneMappingZoneId</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces">managedNamespaces</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput">customZoneMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput">managedNamespacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customZoneMapping`<sup>Required</sup> <a name="customZoneMapping" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping"></a>

```java
public StringMap getCustomZoneMapping();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `customZoneMappings`<sup>Required</sup> <a name="customZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings"></a>

```java
public GlobalClusterConfigCustomZoneMappingsList getCustomZoneMappings();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a>

---

##### `customZoneMappingZoneId`<sup>Required</sup> <a name="customZoneMappingZoneId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingZoneId"></a>

```java
public StringMap getCustomZoneMappingZoneId();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `managedNamespaces`<sup>Required</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces"></a>

```java
public GlobalClusterConfigManagedNamespacesList getManagedNamespaces();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `customZoneMappingsInput`<sup>Optional</sup> <a name="customZoneMappingsInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput"></a>

```java
public java.lang.Object getCustomZoneMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedNamespacesInput`<sup>Optional</sup> <a name="managedNamespacesInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput"></a>

```java
public java.lang.Object getManagedNamespacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalClusterConfigConfig <a name="GlobalClusterConfigConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfigConfig;

GlobalClusterConfigConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .projectId(java.lang.String)
//  .customZoneMappings(IResolvable)
//  .customZoneMappings(java.util.List<GlobalClusterConfigCustomZoneMappings>)
//  .id(java.lang.String)
//  .managedNamespaces(IResolvable)
//  .managedNamespaces(java.util.List<GlobalClusterConfigManagedNamespaces>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings">customZoneMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>></code> | custom_zone_mappings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces">managedNamespaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>></code> | managed_namespaces block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}.

---

##### `customZoneMappings`<sup>Optional</sup> <a name="customZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings"></a>

```java
public java.lang.Object getCustomZoneMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>>

custom_zone_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#custom_zone_mappings GlobalClusterConfig#custom_zone_mappings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedNamespaces`<sup>Optional</sup> <a name="managedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces"></a>

```java
public java.lang.Object getManagedNamespaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>>

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#managed_namespaces GlobalClusterConfig#managed_namespaces}

---

### GlobalClusterConfigCustomZoneMappings <a name="GlobalClusterConfigCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfigCustomZoneMappings;

GlobalClusterConfigCustomZoneMappings.builder()
//  .location(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#location GlobalClusterConfig#location}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#location GlobalClusterConfig#location}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}.

---

### GlobalClusterConfigManagedNamespaces <a name="GlobalClusterConfigManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfigManagedNamespaces;

GlobalClusterConfigManagedNamespaces.builder()
    .collection(java.lang.String)
    .customShardKey(java.lang.String)
    .db(java.lang.String)
//  .isCustomShardKeyHashed(java.lang.Boolean)
//  .isCustomShardKeyHashed(IResolvable)
//  .isShardKeyUnique(java.lang.Boolean)
//  .isShardKeyUnique(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection">collection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey">customShardKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db">db</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#db GlobalClusterConfig#db}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed">isCustomShardKeyHashed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique">isShardKeyUnique</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}. |

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}.

---

##### `customShardKey`<sup>Required</sup> <a name="customShardKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey"></a>

```java
public java.lang.String getCustomShardKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}.

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db"></a>

```java
public java.lang.String getDb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#db GlobalClusterConfig#db}.

---

##### `isCustomShardKeyHashed`<sup>Optional</sup> <a name="isCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed"></a>

```java
public java.lang.Object getIsCustomShardKeyHashed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}.

---

##### `isShardKeyUnique`<sup>Optional</sup> <a name="isShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique"></a>

```java
public java.lang.Object getIsShardKeyUnique();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.35.1/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalClusterConfigCustomZoneMappingsList <a name="GlobalClusterConfigCustomZoneMappingsList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfigCustomZoneMappingsList;

new GlobalClusterConfigCustomZoneMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get"></a>

```java
public GlobalClusterConfigCustomZoneMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>>

---


### GlobalClusterConfigCustomZoneMappingsOutputReference <a name="GlobalClusterConfigCustomZoneMappingsOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfigCustomZoneMappingsOutputReference;

new GlobalClusterConfigCustomZoneMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone"></a>

```java
public void resetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>

---


### GlobalClusterConfigManagedNamespacesList <a name="GlobalClusterConfigManagedNamespacesList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfigManagedNamespacesList;

new GlobalClusterConfigManagedNamespacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get"></a>

```java
public GlobalClusterConfigManagedNamespacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>>

---


### GlobalClusterConfigManagedNamespacesOutputReference <a name="GlobalClusterConfigManagedNamespacesOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.global_cluster_config.GlobalClusterConfigManagedNamespacesOutputReference;

new GlobalClusterConfigManagedNamespacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed">resetIsCustomShardKeyHashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique">resetIsShardKeyUnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsCustomShardKeyHashed` <a name="resetIsCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed"></a>

```java
public void resetIsCustomShardKeyHashed()
```

##### `resetIsShardKeyUnique` <a name="resetIsShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique"></a>

```java
public void resetIsShardKeyUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput">collectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput">customShardKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput">dbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput">isCustomShardKeyHashedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput">isShardKeyUniqueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection">collection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey">customShardKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db">db</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed">isCustomShardKeyHashed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique">isShardKeyUnique</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput"></a>

```java
public java.lang.String getCollectionInput();
```

- *Type:* java.lang.String

---

##### `customShardKeyInput`<sup>Optional</sup> <a name="customShardKeyInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput"></a>

```java
public java.lang.String getCustomShardKeyInput();
```

- *Type:* java.lang.String

---

##### `dbInput`<sup>Optional</sup> <a name="dbInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput"></a>

```java
public java.lang.String getDbInput();
```

- *Type:* java.lang.String

---

##### `isCustomShardKeyHashedInput`<sup>Optional</sup> <a name="isCustomShardKeyHashedInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput"></a>

```java
public java.lang.Object getIsCustomShardKeyHashedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShardKeyUniqueInput`<sup>Optional</sup> <a name="isShardKeyUniqueInput" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput"></a>

```java
public java.lang.Object getIsShardKeyUniqueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

---

##### `customShardKey`<sup>Required</sup> <a name="customShardKey" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey"></a>

```java
public java.lang.String getCustomShardKey();
```

- *Type:* java.lang.String

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db"></a>

```java
public java.lang.String getDb();
```

- *Type:* java.lang.String

---

##### `isCustomShardKeyHashed`<sup>Required</sup> <a name="isCustomShardKeyHashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed"></a>

```java
public java.lang.Object getIsCustomShardKeyHashed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isShardKeyUnique`<sup>Required</sup> <a name="isShardKeyUnique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique"></a>

```java
public java.lang.Object getIsShardKeyUnique();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>

---



